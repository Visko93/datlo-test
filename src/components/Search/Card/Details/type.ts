import { ComponentPropsWithoutRef } from 'react';

type DetailsProps = ComponentPropsWithoutRef<'div'> & {
  text: string;
  icon?: any;
};

export type { DetailsProps };
