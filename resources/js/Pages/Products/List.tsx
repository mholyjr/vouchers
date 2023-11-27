import React from 'react';
import { Link, router, useForm, usePage } from '@inertiajs/react';
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

  const products: any = props.products ?? [];

  const [selectedProducts, setSelectedProducts] = React.useState<Set<number>>(
    new Set(),
  );

  const handleCheckboxChange = (productId: number) => {
    setSelectedProducts(prevSelectedProducts => {
      const newSelectedProducts = new Set(prevSelectedProducts);
      if (newSelectedProducts.has(productId)) {
        newSelectedProducts.delete(productId);
      } else {
        newSelectedProducts.add(productId);
      }
      return newSelectedProducts;
    });
  };

  const handleUnpublish = () => {
    router.post(route('products.unpublish'), {
      productIds: Array.from(selectedProducts),
    });

    setSelectedProducts(new Set());
  };

  return (
    <AppLayout
      title="Dashboard"
      renderHeader={() => (
        <Flex>
          <div>
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
              Products
            </h2>
          </div>
          <div>
            <Button
              variant="secondary"
              className="mr-3"
              disabled={selectedProducts.size === 0}
              onClick={handleUnpublish}
            >
              Unpublish
            </Button>
            <Link href={route('products.edit')}>
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
                  <TableHeaderCell>#</TableHeaderCell>
                  <TableHeaderCell>Title</TableHeaderCell>
                  <TableHeaderCell>Price</TableHeaderCell>
                  <TableHeaderCell>Created</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                  <TableHeaderCell></TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((item: any) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <input
                        type="checkbox"
                        checked={selectedProducts.has(item.id)}
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
                      <Link href={route('products.edit', { id: item.id })}>
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
