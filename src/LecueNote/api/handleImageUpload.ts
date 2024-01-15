import putPresignedUrl from './putPresignedUrl';

const handleImageUpload = (
  imgRef: React.MutableRefObject<HTMLInputElement | null>,
  uploadImage: (file: string) => void,
  presignedUrl: string,
) => {
  const fileInput = imgRef.current;

  if (fileInput && fileInput.files && fileInput.files.length > 0) {
    const file = fileInput.files[0];

    // reader1: 파일을 base64로 읽어서 업로드
    const reader1 = new FileReader();
    reader1.readAsDataURL(file);
    reader1.onloadend = () => {
      if (reader1.result !== null) {
        uploadImage(reader1.result as string);
      }
    };

    // reader2: 파일을 ArrayBuffer로 읽어서 PUT 요청 수행
    const reader2 = new FileReader();
    reader2.readAsArrayBuffer(file);
    reader2.onloadend = () => {
      if (reader2.result !== null && presignedUrl) {
        putPresignedUrl({
          presignedUrl: presignedUrl,
          binaryFile: reader2.result,
          fileType: file.type,
        });
      }
    };
  }
};

export default handleImageUpload;
