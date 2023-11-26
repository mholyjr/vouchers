import { Link, useForm, Head, usePage } from '@inertiajs/react';
import classNames from 'classnames';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import AppLayout from '@/Layouts/AppLayout';
import { Button, Card, Divider, Flex } from '@tremor/react';
import { EditProductForm } from './Partials/EditProductForm';
import ActionSection from '@/Components/ActionSection';

type ProductProps = {
  title: string;
  price: string;
  id?: string;
};

export default function Edit() {
  const route = useRoute();
  const { props } = usePage();
  const product = (props.product as ProductProps) || {
    title: '',
    price: 0,
    id: '',
  };

  const form = useForm({
    title: product.title,
    price: product.price.toString(),
  });

  React.useEffect(() => {
    if (product) {
      form.setData('title', product.title);
      form.setData('price', product.price);
    }
  }, [product?.id]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (product?.id) {
      form.put(route('products.update', { id: product.id }), {
        preserveScroll: true,
        onSuccess: () => alert('Product updated successfully'),
      });
    } else {
      form.post(route('products.store'), {
        preserveScroll: true,
        onSuccess: () => alert('Product created successfully'),
      });
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <AppLayout
        title="Create product"
        renderHeader={() => (
          <Flex>
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
              Products
            </h2>
            <Button
              type="submit"
              className={classNames('ml-4', {
                'opacity-25': form.processing,
              })}
              disabled={form.processing}
            >
              {product?.id ? 'Save changes' : 'Create product'}
            </Button>
          </Flex>
        )}
      >
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12">
          <ActionSection
            title="Basic information"
            description="Add basic information about your product"
          >
            <EditProductForm form={form} />
          </ActionSection>

          <Divider />

          <ActionSection
            title="Redeem settings"
            description="Set up rules for redeeming the product"
          >
            <EditProductForm form={form} />
          </ActionSection>

          <Divider />

          <ActionSection
            title="Product images"
            description="Add images of your product"
          >
            <EditProductForm form={form} />
          </ActionSection>
        </div>
      </AppLayout>
    </form>
  );
}
