import ActionSection from '@/Components/ActionSection';
import AppLayout from '@/Layouts/AppLayout';
import { Divider } from '@tremor/react';
import React from 'react';
import { PricesSettingsForm } from './Partials/PricesSettingsForm';
import { useForm, usePage } from '@inertiajs/react';
import { InertiaFormProps } from '@inertiajs/react/types/useForm';

export type SettingsProps = {
  CURRENCY: string;
  DECIMALS: string;
  CURRENCY_SYMBOL: string;
  SYMBOL_POSITION: string;
};

export type FormProps = {
  form: InertiaFormProps<SettingsProps>;
};

export default function Settings() {
  const { props } = usePage();
  const settings = (props.settings as SettingsProps) || {
    CURRENCY: 'EUR',
    DESCIMALS: '2',
    CURRENCY_SYMBOL: '€',
    SYMBOL_POSITION: 'left',
  };

  const form = useForm({
    CURRENCY: settings.CURRENCY ?? 'EUR',
    DECIMALS: settings.DECIMALS ?? '2',
    CURRENCY_SYMBOL: settings.CURRENCY_SYMBOL ?? '€',
    SYMBOL_POSITION: settings.SYMBOL_POSITION ?? 'left',
  });

  React.useEffect(() => {
    if (settings) {
      form.setData('CURRENCY', settings.CURRENCY);
      form.setData('DECIMALS', settings.DECIMALS);
      form.setData('CURRENCY_SYMBOL', settings.CURRENCY_SYMBOL);
      form.setData('SYMBOL_POSITION', settings.SYMBOL_POSITION);
    }
  }, [settings]);

  return (
    <AppLayout
      title="Settings"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Settings
        </h2>
      )}
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12">
        <ActionSection
          title="Currency settings"
          description="Setup store's currency"
        >
          <PricesSettingsForm form={form} />
        </ActionSection>
      </div>
    </AppLayout>
  );
}
