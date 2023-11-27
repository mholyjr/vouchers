import React from 'react';
import { ProductFormProps } from '../Edit';
import InputLabel from '@/Components/InputLabel';
import TextArea from '@/Components/TextArea';
import InputError from '@/Components/InputError';

export const ProductDescriptionForm: React.FC<ProductFormProps> = ({
  form,
}) => {
  return (
    <>
      <div>
        <InputLabel htmlFor="price">Short description</InputLabel>
        <TextArea
          id="short_description"
          className="mt-1 block w-full"
          value={form.data.short_description}
          onChange={e =>
            form.setData('short_description', e.currentTarget.value)
          }
        />
        <InputError className="mt-2" message={form.errors.price} />
      </div>
      <div className="mt-4">
        <InputLabel htmlFor="price">Full description</InputLabel>
        <TextArea
          id="description"
          className="mt-1 block w-full"
          value={form.data.description}
          onChange={e => form.setData('description', e.currentTarget.value)}
        />
        <InputError className="mt-2" message={form.errors.price} />
      </div>
    </>
  );
};
