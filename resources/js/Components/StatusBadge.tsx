import { Badge } from '@tremor/react';
import React from 'react';

type StatusBadgeProps = {
  status: number;
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  if (status) {
    return <Badge>Active</Badge>;
  } else {
    return <Badge color="rose">Inactive</Badge>;
  }
};
