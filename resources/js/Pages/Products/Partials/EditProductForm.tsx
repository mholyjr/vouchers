import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import React from 'react';
import { Category, ProductFormProps } from '../Edit';
import { Select, SelectItem } from '@tremor/react';

const publishedOptions = [
  { value: '0', label: 'Unpublished' },
  { value: '1', label: 'Published' },
];

export const EditProductForm: React.FC<ProductFormProps & { categories: Category[] }> = ({
  form,
  categories,
}) => {
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
        <InputLabel htmlFor="category">Category</InputLabel>
        <Select
          id="category"
          value={form.data.category_id?.toString() ?? ''}
          onValueChange={value => form.setData('category_id', value)}
        >
          <SelectItem value="">Select a Category</SelectItem>
          {categories.map(category => (
            <SelectItem key={category.id} value={category.id.toString()}>
              {category.title}
            </SelectItem>
          ))}
        </Select>
        <InputError className="mt-2" message={form.errors.category_id} />
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

      <div className="mt-4">
        <InputLabel htmlFor="price">Product Price</InputLabel>
        <TextInput
          id="price"
          type="number"
          step="0.01"
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
