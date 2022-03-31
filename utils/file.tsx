import { v4 as uuidv4 } from 'uuid';

export const generateHash = () => uuidv4();

export const fileTypeFromBlob = (blob: Blob) => {
  return blob.type.split('/')[1];
};

export const blobObjectFromBlobUrl = async (blobUrl: string) => {
  return await fetch(blobUrl).then((r) => r.blob());
};

export const readFile = async (file: File) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
};
