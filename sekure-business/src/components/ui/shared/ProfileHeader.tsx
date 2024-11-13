"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { useAppDispatch } from "@/_lib/redux/hooks";
import { updateProfilePicture } from "@/_lib/features/users/connexionSlice";

interface FileUploaderProps {
  fieldOnChange: (files: File[]) => void;
}

const ProfileHeader: React.FC<FileUploaderProps> = ({ fieldOnChange }) => {
  const [file, setFile] = useState<File[]>([]);
  const [filePath, setFilePath] = useState("");
  const dispatch = useAppDispatch();

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setFile(acceptedFiles);
      fieldOnChange(acceptedFiles);
      setFilePath(URL.createObjectURL(acceptedFiles[0]));
      dispatch(updateProfilePicture(filePath));
    },
    [file, fieldOnChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpg", ".jpeg", ".png"],
    },
  });
  return (
    <div
      {...getRootProps()}
      className="w-11 h-11 flex flex-center flex-col cursor-pointer"
    >
      <input {...getInputProps()} className="cursor-pointer" />
      {filePath ? (
        <>
          <div className="flex-center w-full h-full rounded-full bg-white">
            <Image
              src={filePath}
              alt="uploaded"
              width={300}
              height={300}
              className="object-cover bg-center rounded-full"
            />
          </div>
        </>
      ) : (
        <div className="w-full h-full rounded-full flex-center bg-primary">
          <p className="text-base text-center leading-[15px] mt-[2px] font-bold text-white">
            DT
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
