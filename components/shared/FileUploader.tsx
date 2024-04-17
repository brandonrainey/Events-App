import React, { Dispatch, SetStateAction } from 'react'

type FileUploaderProps = {
    imageUrl: string
    onFieldChange: (value: string) => void
    setFiles: Dispatch<SetStateAction<File[]>>
}

export default function FileUploader({ imageUrl, onFieldChange, setFiles }: FileUploaderProps) {
  return (
    <div>FileUploader</div>
  )
}
