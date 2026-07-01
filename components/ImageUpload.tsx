'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { Upload, X, Loader2 } from 'lucide-react'

interface Props {
  value: string
  onChange: (url: string) => void
}

export default function ImageUpload({ value, onChange }: Props) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Selecione um arquivo de imagem.')
      return
    }

    setUploading(true)
    setError('')

    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!)

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        { method: 'POST', body: formData }
      )
      const data = await res.json()
      if (data.secure_url) {
        onChange(data.secure_url)
      } else {
        setError('Erro no upload. Verifique as configurações do Cloudinary.')
      }
    } catch {
      setError('Erro de conexão. Tente novamente.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) handleFile(file)
          e.target.value = ''
        }}
      />

      {value ? (
        <div className="relative aspect-video rounded-sm overflow-hidden bg-[#eeeae0]">
          <Image
            src={value}
            alt="Capa do post"
            fill
            className="object-cover"
            unoptimized
          />
          <button
            type="button"
            onClick={() => onChange('')}
            className="absolute top-2 right-2 w-8 h-8 bg-[#f6f4ee]/90 rounded-full flex items-center justify-center hover:bg-white transition shadow"
            aria-label="Remover imagem"
          >
            <X className="w-4 h-4 text-[#1f2a1c]" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="w-full aspect-video flex flex-col items-center justify-center gap-3 border-2 border-dashed border-[#1f2a1c]/20 rounded-sm hover:border-[#3d5a2a] transition bg-[#f6f4ee] text-[#1f2a1c]/50 hover:text-[#3d5a2a] disabled:opacity-60 cursor-pointer"
        >
          {uploading ? (
            <>
              <Loader2 className="w-8 h-8 animate-spin" />
              <span className="text-sm">Enviando imagem...</span>
            </>
          ) : (
            <>
              <Upload className="w-8 h-8" />
              <span className="text-sm font-medium">Clique para escolher a imagem de capa</span>
              <span className="text-xs opacity-60">JPG, PNG ou WEBP</span>
            </>
          )}
        </button>
      )}

      {error && <p className="text-xs text-red-600 mt-2">{error}</p>}
    </div>
  )
}
