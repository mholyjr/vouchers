import { Link, useForm, usePage } from '@inertiajs/react';
import classNames from 'classnames';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import AppLayout from '@/Layouts/AppLayout';
import { Button, Divider, Flex } from '@tremor/react';
import { EditCategoryForm } from './Partials/EditCategoryForm';
import ActionSection from '@/Components/ActionSection';
import { InertiaFormProps } from '@inertiajs/react/types/useForm';
import { DescriptionForm } from './Partials/DescriptionForm';

type CategoryProps = {
  title: string;
  status: string;
  description_short: string;
  description: string;
  id?: number;
};

export type ProductFormProps = {
  form: InertiaFormProps<CategoryProps>;
};

export default function Edit() {
  const route = useRoute();
  const { props } = usePage();
  const category = (props.category as CategoryProps) || {
    title: '',
    price: 0,
    id: '',
  };

  const form = useForm({
    title: category.title ?? '',
    status: category.status?.toString() ?? '1',
    description_short: category.description_short ?? '',
    description: category.description ?? '',
  });

  React.useEffect(() => {
    if (category) {
      form.setData('title', category.title);
      form.setData('status', category.status);
      form.setData('description_short', category.description_short);
      form.setData('description', category.description);
    }
  }, [category?.id]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (category?.id) {
      form.put(route('categories.update', { id: category.id }), {
        preserveScroll: true,
        onSuccess: () => alert('Product updated successfully'),
      });
    } else {
      form.post(route('categories.store'), {
        preserveScroll: true,
        onSuccess: () => alert('Product created successfully'),
      });
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <AppLayout
        title={category?.id ? 'Edit category' : 'Create new category'}
        renderHeader={() => (
          <Flex>
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
              {category?.id ? 'Edit category' : 'Create new category'}
            </h2>
            <div>
              <Link href={route('categories.list')}>
                <Button variant="light">Go back</Button>
              </Link>
              <Button
                type="submit"
                className={classNames('ml-4', {
                  'opacity-25': form.processing,
                })}
                disabled={form.processing}
              >
                {category?.id ? 'Save changes' : 'Create category'}
              </Button>
            </div>
          </Flex>
        )}
      >
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12">
          <ActionSection
            title="Basic information"
            description="Add basic information about your category"
          >
            <EditCategoryForm form={form} />
          </ActionSection>

          <Divider />

          <ActionSection
            title="Product description"
            description="Write down description of your product"
          >
            <DescriptionForm form={form} />
          </ActionSection>
        </div>
      </AppLayout>
    </form>
  );
}
