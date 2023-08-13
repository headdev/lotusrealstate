// useUploadUserImages.tsx

import { useState } from 'react';
import { Storage } from 'aws-amplify';

const acceptFileTypes = ['image/png', 'image/jpeg', 'image/gif'];

export default function useUploadImage() {

  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const uploadImage = async (file: File) => {

    if (!acceptFileTypes.includes(file.type)) {
      throw new Error('Solo se aceptan PNG, JPG o GIF');
    }

    const fileName = `image-${Date.now()}-${file.name}`;

    const uploadedFile = await Storage.put(fileName, file);

    setImageUrl(uploadedFile.key);
  }

  return { imageUrl, uploadImage };

}