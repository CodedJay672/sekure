"use client";

import Image from 'next/image';
import { useState, useCallback } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';


interface FileUploaderProps {
  fieldOnChange: (files: File[]) => void;
}

const DocumentUploader: React.FC<FileUploaderProps> = ({ fieldOnChange }) => {
  const [file, setFile] = useState<File[]>([]);
  const [filePath, setFilePath] = useState('');

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFile(acceptedFiles);
    fieldOnChange(acceptedFiles);
    setFilePath(URL.createObjectURL(acceptedFiles[0]));
  }, [file]);


  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': [".svg", ".jpg", ".jpeg", ".png"],
      'text/pdf': ['.pdf'],
    }
  })
  
  return (
    <div {...getRootProps()} className='flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer'>
      <input {...getInputProps()} className='cursor-pointer' />
      {
        filePath ? (
          <>
          <div className='flex flex-1 justify-center w-full bg-[#F3F3F3]'>
            <Image
              src={filePath}
              alt='uploaded'
              width={100}
              height={40}
              className="object-cover"
              />
          </div>
          <p className='w-[283px] text-[10px] text-center leading-[15px] mt-[2px] font-light'>
            Click or drag to replace photo
          </p>
          </>
        ) : (
          <div className='w-full h-[105px] rounded-[11px] flex-center flex-col bg-[#F3F3F3]'>
            <Image
              src='/assets/icons-pack/uploadDocument.png'
              alt='upload file'
              width={28.21}
              height={28.21}
            />
            <div className="w-[283px]">
              <p className='text-[10px] text-center leading-[15px] mt-[2px] font-light'>
                Deposez un document ici ou cliquez pour ajouter une Document ( PDF, JPEG, JPG, PNG )
              </p>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default DocumentUploader;
