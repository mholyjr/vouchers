import React from 'react';
import { ProductFormProps } from '../Edit';
import InputLabel from '@/Components/InputLabel';
import { ImagePreview } from '@/Components/ImagePreview';
import { Flex } from '@tremor/react';

export const ProductImagesForm: React.FC<ProductFormProps> = ({ form }) => {
  const [preview, setPreview] = React.useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      form.setData('image', file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div>
        <InputLabel htmlFor="image">Main Image</InputLabel>
        <Flex justifyContent="start">
          {preview ? (
            <ImagePreview image={{ src: preview, alt: 'Image preview' }} />
          ) : (
            form?.data?.image && (
              <ImagePreview
                //@ts-ignore
                image={{ src: form.data.image, alt: 'Main image' }}
              />
            )
          )}
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </Flex>
      </div>
    </>
  );
};
