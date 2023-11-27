import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import React from 'react';
import { ProductFormProps } from '../Edit';
import { Col, Grid } from '@tremor/react';
import { Select, SelectItem } from '@tremor/react';

const periodOptions = [
  { value: 'hours', label: 'Hours' },
  { value: 'days', label: 'Days' },
  { value: 'weeks', label: 'Weeks' },
  { value: 'months', label: 'Months' },
  { value: 'years', label: 'Years' },
];

export const RedeemOptionsForm: React.FC<ProductFormProps> = ({ form }) => {
  return (
    <>
      <div className="mb-3">
        <InputLabel htmlFor="title">Number of redeems per voucher</InputLabel>
        <TextInput
          id="num_of_redeems"
          type="number"
          className="mt-1 block w-full"
          value={form.data.num_of_redeems}
          onChange={e =>
            form.setData('num_of_redeems', Number(e.currentTarget.value))
          }
          defaultValue={1}
          required
        />
        <InputError className="mt-2" message={form.errors.num_of_redeems} />
      </div>
      <Grid numItems={1} numItemsSm={2} className="gap-2">
        <Col>
          <InputLabel htmlFor="title">Valid for</InputLabel>
          <TextInput
            id="valid_for"
            type="number"
            className="mt-1 block w-full"
            value={form.data.valid_for}
            onChange={e =>
              form.setData('valid_for', Number(e.currentTarget.value))
            }
            defaultValue={1}
            required
          />
          <InputError className="mt-2" message={form.errors.valid_for} />
        </Col>
        <Col>
          <InputLabel htmlFor="title">Period</InputLabel>
          <div className="max-w-sm mx-auto space-y-6 mt-1">
            <Select
              value={form.data.valid_period}
              onValueChange={value => form.setData('valid_period', value)}
              defaultValue='years'
            >
              {periodOptions.map(option => (
                <SelectItem value={option.value} key={`period-${option.value}`}>
                  {option.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <InputError className="mt-2" message={form.errors.valid_period} />
        </Col>
      </Grid>
    </>
  );
};
