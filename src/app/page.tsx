'use client';

import * as React from 'react';
import { StyledLayout } from './styles';
import Link from 'next/link';

export default function Index() {
  return (
    <StyledLayout>
      <Link className="link" href={'/home'}>
        <span>Go Find Them all</span>
      </Link>
      {/* <Footer></Footer> */}
    </StyledLayout>
  );
}
