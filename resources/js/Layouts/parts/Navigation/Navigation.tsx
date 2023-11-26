import NavLink from '@/Components/NavLink';
import useRoute from '@/Hooks/useRoute';
import React from 'react';

type LinkProps = {
  key: string;
  title: string;
  route: string;
};

export const Navigation: React.FC = () => {
  const route = useRoute();

  const links: LinkProps[] = [
    {
      key: 'dasboard',
      title: 'Dashboard',
      route: 'dashboard',
    },
    {
      key: 'products.list',
      title: 'Products',
      route: 'products.list',
    },
  ];

  return (
    <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
      {links.map(item => (
        <NavLink
          href={route(item.route)}
          active={route().current(item.route)}
          key={item.key}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};
