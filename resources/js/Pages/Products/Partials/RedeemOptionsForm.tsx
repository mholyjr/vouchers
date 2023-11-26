import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import { InertiaFormProps } from '@inertiajs/react/types/useForm';
import { NumberInput, TextInput } from '@tremor/react';
import React from 'react';

type FormProps = {
  form: InertiaFormProps<{ title: string; price: string }>;
};

export const RedeemOptionsForm: React.FC<FormProps> = ({ form }) => {
  return (
    <>
      <div>
        <InputLabel htmlFor="title">Product Title</InputLabel>
        <TextInput
          id="title"
          type="text"
          className="mt-1 block w-full"
          value={form.data.title}
          onChange={e => form.setData('title', e.currentTarget.value)}
          required
          autoFocus
        />
        <InputError className="mt-2" message={form.errors.title} />
      </div>

      <div className="mt-4">
        <InputLabel htmlFor="price">Product Price</InputLabel>
        <NumberInput
          id="price"
          step="1"
          className="mt-1 block w-full"
          value={form.data.price}
          onChange={e => form.setData('price', e.currentTarget.value)}
          required
        />
        <InputError className="mt-2" message={form.errors.price} />
      </div>
    </>
  );
};
