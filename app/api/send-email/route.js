import nodemailer from 'nodemailer'

export async function POST(request) {
    const data = await request.formData()

    const name     = data.get('name')?.toString().trim() ?? ''
    const email    = data.get('email')?.toString().trim() ?? ''
    const objetivo = data.get('objetivo')?.toString().trim() ?? ''
    const message  = data.get('message')?.toString().trim() ?? ''

    if (!name || !email || !message) {
        return Response.json(
            { success: false, message: 'Preencha todos os campos obrigatórios.' },
            { status: 400 }
        )
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    })

    try {
        await transporter.sendMail({
            from: `"Site Parque Olho D'Água" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER,
            replyTo: `"${name}" <${email}>`,
            subject: objetivo ? `[${objetivo}] Mensagem de ${name}` : `Contato de ${name}`,
            html: `
                <h2>Nova mensagem pelo site</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Objetivo:</strong> ${objetivo || 'Não informado'}</p>
                <hr>
                <p><strong>Mensagem:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
            text: `Nome: ${name}\nEmail: ${email}\nObjetivo: ${objetivo}\n\n${message}`,
        })

        return Response.json({ success: true, message: 'Mensagem enviada com sucesso!' })
    } catch (error) {
        return Response.json(
            { success: false, message: 'Erro ao enviar mensagem. Tente novamente.' },
            { status: 500 }
        )
    }
}
