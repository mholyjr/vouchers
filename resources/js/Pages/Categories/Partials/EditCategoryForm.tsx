import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import React from 'react';
import { ProductFormProps } from '../Edit';
import { Select, SelectItem } from '@tremor/react';

const publishedOptions = [
  { value: '0', label: 'Unpublished' },
  { value: '1', label: 'Published' },
];

export const EditCategoryForm: React.FC<ProductFormProps> = ({ form }) => {
  return (
    <>
      <div>
        <InputLabel htmlFor="title">Category Title</InputLabel>
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
        <InputLabel htmlFor="title">Published</InputLabel>
        <Select
          value={form.data.status as string}
          onValueChange={value => form.setData('status', value)}
          className=""
        >
          {publishedOptions.map(option => (
            <SelectItem value={option.value} key={`published-${option.value}`}>
              {option.label}
            </SelectItem>
          ))}
        </Select>

        <InputError className="mt-2" message={form.errors.status} />
      </div>
    </>
  );
};
