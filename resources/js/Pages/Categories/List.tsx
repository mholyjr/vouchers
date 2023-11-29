import React from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Text,
  Button,
  Flex,
  Card,
} from '@tremor/react';
import useRoute from '@/Hooks/useRoute';
import { StatusBadge } from '@/Components/StatusBadge';

export default function List() {
  const route = useRoute();
  const { props } = usePage();

  const categories: any = props.categories ?? [];

  const [selectedCategories, setSelectedCategories] = React.useState<Set<number>>(
    new Set(),
  );

  const handleCheckboxChange = (productId: number) => {
    setSelectedCategories(prevSelectedCategories => {
      const newSelectedCategories = new Set(prevSelectedCategories);
      if (newSelectedCategories.has(productId)) {
        newSelectedCategories.delete(productId);
      } else {
        newSelectedCategories.add(productId);
      }
      return newSelectedCategories;
    });
  };

  const handleUnpublish = () => {
    router.post(route('categories.unpublish'), {
      productIds: Array.from(selectedCategories),
    });

    setSelectedCategories(new Set());
  };

  const handlePublish = () => {
    router.post(route('categories.publish'), {
      productIds: Array.from(selectedCategories),
    });

    setSelectedCategories(new Set());
  };

  const handleSelectAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allCategoryIds = new Set<number>(
        categories.map((category: { id: number }) => category.id),
      );
      setSelectedCategories(allCategoryIds);
    } else {
      setSelectedCategories(new Set<number>());
    }
  };

  return (
    <AppLayout
      title="Dashboard"
      renderHeader={() => (
        <Flex>
          <div>
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
              Categories
            </h2>
          </div>
          <div>
            <Button
              variant="secondary"
              className="mr-3"
              disabled={selectedCategories.size === 0}
              onClick={handleUnpublish}
            >
              Unpublish
            </Button>
            <Button
              variant="secondary"
              className="mr-3"
              disabled={selectedCategories.size === 0}
              onClick={handlePublish}
            >
              Publish
            </Button>

            <Link href={route('categories.edit')}>
              <Button>Create new</Button>
            </Link>
          </div>
        </Flex>
      )}
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <Card>
            <Table className="mt-5">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>
                    <input
                      type="checkbox"
                      onChange={handleSelectAllChange}
                      checked={selectedCategories.size === categories.length}
                      disabled={categories.length === 0}
                    />
                  </TableHeaderCell>
                  <TableHeaderCell>Title</TableHeaderCell>
                  <TableHeaderCell>Price</TableHeaderCell>
                  <TableHeaderCell>Created</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                  <TableHeaderCell></TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categories.map((item: any) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <input
                        type="checkbox"
                        checked={selectedCategories.has(item.id)}
                        onChange={() => handleCheckboxChange(item.id)}
                      />
                    </TableCell>
                    <TableCell className="font-bold">{item.title}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>
                      <Text>{item.created_at}</Text>
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={item.status} />
                    </TableCell>
                    <TableCell className="text-right">
                      <Link href={route('categories.edit', { id: item.id })}>
                        <Button>Edit</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
