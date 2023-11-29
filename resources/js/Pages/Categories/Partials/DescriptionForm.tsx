import React from 'react';
import { ProductFormProps } from '../Edit';
import InputLabel from '@/Components/InputLabel';
import TextArea from '@/Components/TextArea';
import InputError from '@/Components/InputError';

export const DescriptionForm: React.FC<ProductFormProps> = ({ form }) => {
  return (
    <>
      <div>
        <InputLabel htmlFor="price">Short description</InputLabel>
        <TextArea
          id="description_short"
          className="mt-1 block w-full"
          value={form.data.description_short}
          onChange={e => form.setData('description_short', e.target.value)}
        />
        <InputError className="mt-2" message={form.errors.description_short} />
      </div>
      <div className="mt-4">
        <InputLabel htmlFor="price">Full description</InputLabel>
        <TextArea
          id="description"
          className="mt-1 block w-full"
          value={form.data.description}
          onChange={e => form.setData('description', e.target.value)}
        />
        <InputError className="mt-2" message={form.errors.description} />
      </div>
    </>
  );
};
