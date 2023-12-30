import React from 'react';
import { ProductFormProps } from '../Edit';
import InputLabel from '@/Components/InputLabel';
import { ImagePreview } from '@/Components/ImagePreview';
import { Flex } from '@tremor/react';

export const ProductImagesForm: React.FC<ProductFormProps> = ({ form }) => {
  return (
    <>
      <div>
        <InputLabel htmlFor="image">Main Image</InputLabel>
        <Flex justifyContent='start'>
          {form?.data?.image && (
            /* 
          // @ts-ignore */
            <ImagePreview image={{ src: form.data.image, alt: 'Main image' }} />
          )}
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={e => {
              if (e.target.files && e.target.files[0]) {
                form.setData('image', e.target.files[0]);
              }
            }}
          />
        </Flex>
      </div>
    </>
  );
};
