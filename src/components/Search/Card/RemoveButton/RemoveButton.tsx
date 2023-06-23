import { MinusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { RemoveButtonProps } from './type';

export function RemoveButton({ loading, onClick = () => {} }: RemoveButtonProps) {
  return (
    <Button
      type="text"
      danger
      icon={<MinusCircleOutlined />}
      loading={loading}
      onClick={onClick}
    />
  );
}
