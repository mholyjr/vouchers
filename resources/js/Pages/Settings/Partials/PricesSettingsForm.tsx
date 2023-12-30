import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import React from 'react';
import { FormProps } from '../Settings';
import { Select, SelectItem } from '@tremor/react';

const currenciesOpts = [
  { value: 'EUR', label: 'EUR' },
  { value: 'CZK', label: 'CZK' },
  { value: 'USD', label: 'USD' },
  { value: 'GBP', label: 'GBP' },
  { value: 'JPY', label: 'JPY' },
];

const leftRightOpts = [
  { value: 'left', label: 'left' },
  { value: 'right', label: 'right' },
];

export const PricesSettingsForm: React.FC<FormProps> = ({ form }) => {
  return (
    <>
      <div>
        <InputLabel htmlFor="currency">Currency</InputLabel>
        <Select
          value={form.data.CURRENCY as string}
          onValueChange={value => form.setData('CURRENCY', value)}
          className=""
        >
          {currenciesOpts.map(option => (
            <SelectItem value={option.value} key={`published-${option.value}`}>
              {option.label}
            </SelectItem>
          ))}
        </Select>
        <InputError className="mt-2" message={form.errors.CURRENCY} />
      </div>
      <div className="mt-4">
        <InputLabel htmlFor="currency_symbol">Currency symbol</InputLabel>
        <TextInput
          id="currency_symbol"
          type="text"
          className="mt-1 block w-full"
          value={form.data.CURRENCY_SYMBOL}
          onChange={e => form.setData('CURRENCY_SYMBOL', e.currentTarget.value)}
          required
          autoFocus
        />
        <InputError className="mt-2" message={form.errors.DECIMALS} />
      </div>
      <div className="mt-4">
        <InputLabel htmlFor="symbol_position">Symbol position</InputLabel>
        <Select
          id="symbol_position"
          value={form.data.SYMBOL_POSITION as string}
          onValueChange={value => form.setData('SYMBOL_POSITION', value)}
          className=""
        >
          {leftRightOpts.map(option => (
            <SelectItem value={option.value} key={`published-${option.value}`}>
              {option.label}
            </SelectItem>
          ))}
        </Select>
        <InputError className="mt-2" message={form.errors.CURRENCY} />
      </div>
      <div className="mt-4">
        <InputLabel htmlFor="decimals">Decimals</InputLabel>
        <TextInput
          id="decimals"
          type="text"
          className="mt-1 block w-full"
          value={form.data.DECIMALS}
          onChange={e => form.setData('DECIMALS', e.currentTarget.value)}
          required
          autoFocus
        />
        <InputError className="mt-2" message={form.errors.DECIMALS} />
      </div>
    </>
  );
};
