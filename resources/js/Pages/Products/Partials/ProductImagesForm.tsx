import React from 'react';
import { ProductFormProps } from '../Edit';
import InputLabel from '@/Components/InputLabel';

export const ProductImagesForm: React.FC<ProductFormProps> = ({ form }) => {
  return (
    <>
      <div>
        <InputLabel htmlFor="image">Main Image</InputLabel>
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
      </div>
    </>
  );
};
