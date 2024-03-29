import { Link, useForm, usePage } from '@inertiajs/react';
import classNames from 'classnames';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import AppLayout from '@/Layouts/AppLayout';
import { Button, Divider, Flex } from '@tremor/react';
import { EditProductForm } from './Partials/EditProductForm';
import ActionSection from '@/Components/ActionSection';
import { RedeemOptionsForm } from './Partials/RedeemOptionsForm';
import { InertiaFormProps } from '@inertiajs/react/types/useForm';
import { ProductDescriptionForm } from './Partials/ProductDescriptionForm';
import { ProductImagesForm } from './Partials/ProductImagesForm';

type ProductProps = {
  title: string;
  price: string;
  num_of_redeems: number;
  valid_for: number;
  valid_period: string;
  status: string;
  short_description: string;
  description: string;
  id?: number;
  category_id: number | string;
  image: string | null | File;
};

export type Category = {
  id: number;
  title: string;
  description: string;
  description_short: string;
  status: number;
  user_id: number;
  created_at: string; // ISO 8601 date format
  updated_at: string; // ISO 8601 date format
};

export type ProductFormProps = {
  form: InertiaFormProps<ProductProps>;
};

export default function Edit() {
  const route = useRoute();
  const { props } = usePage();
  const product = (props.product as ProductProps) || {
    title: '',
    price: 0,
    id: '',
    category_id: 0,
  };

  const { categories } = props as any;

  const form = useForm({
    title: product.title ?? '',
    price: product.price?.toString() ?? '',
    status: product.status?.toString() ?? '1',
    valid_for: product.valid_for ?? 1,
    valid_period: product.valid_period ?? 'years',
    num_of_redeems: product.num_of_redeems ?? 1,
    short_description: product.short_description ?? '',
    description: product.description ?? '',
    category_id: product.category_id ?? '',
    image: product.image ?? null,
  });

  React.useEffect(() => {
    if (product) {
      form.setData('title', product.title);
      form.setData('price', product.price);
      form.setData('valid_for', product.valid_for);
      form.setData('valid_period', product.valid_period);
      form.setData('status', product.status);
      form.setData('num_of_redeems', product.num_of_redeems);
      form.setData('category_id', product.category_id);
      form.setData('image', product.image)
    }
  }, [product?.id]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (product?.id) {
      form.post(route('products.update', { id: product.id }), {
        preserveScroll: true,
        onSuccess: () => alert('Product updated successfully'),
        onError: err => console.log(err),
      });
    } else {
      form.post(route('products.store'), {
        preserveScroll: true,
        onSuccess: () => alert('Product created successfully'),
      });
    }
  }

  return (
    <form onSubmit={onSubmit} encType="multipart/form-data">
      <AppLayout
        title={product?.id ? 'Edit product' : 'Create new product'}
        renderHeader={() => (
          <Flex>
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
              {product?.id ? 'Edit product' : 'Create new product'}
            </h2>
            <div>
              <Link href={route('products.list')}>
                <Button variant="light">Go back</Button>
              </Link>
              <Button
                type="submit"
                className={classNames('ml-4', {
                  'opacity-25': form.processing,
                })}
                disabled={form.processing}
              >
                {product?.id ? 'Save changes' : 'Create product'}
              </Button>
            </div>
          </Flex>
        )}
      >
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12">
          <ActionSection
            title="Basic information"
            description="Add basic information about your product"
          >
            <EditProductForm form={form} categories={categories} />
          </ActionSection>

          <Divider />

          <ActionSection
            title="Redeem settings"
            description="Set up rules for redeeming the product"
          >
            <RedeemOptionsForm form={form} />
          </ActionSection>

          <Divider />

          <ActionSection
            title="Product description"
            description="Write down description of your product"
          >
            <ProductDescriptionForm form={form} />
          </ActionSection>

          <Divider />

          <ActionSection
            title="Product images"
            description="Add images of your product"
          >
            <ProductImagesForm form={form} />
          </ActionSection>
        </div>
      </AppLayout>
    </form>
  );
}
