import React, { useState } from 'react';
import { Drawer as AntDrawer, Space } from 'antd';
import type { DrawerProps } from './type';

export function Drawer({ children, characterId }: DrawerProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <div onClick={showDrawer}>{children}</div>
      </Space>
      <AntDrawer placement={'right'} width={500} onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </AntDrawer>
    </>
  );
}
