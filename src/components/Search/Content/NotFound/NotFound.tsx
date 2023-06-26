import { CHANGE_SEARCH, useSearch } from '@/state/Search';
import { Button, Space } from 'antd';
import Title from 'antd/es/typography/Title';
import Image from 'next/image';

export function NotFound() {
  const { dispatch } = useSearch();
  const handleReturn = () => {
    dispatch && dispatch({ type: CHANGE_SEARCH, payload: '' });
  };
  return (
    <Space direction="vertical" align="center">
      <Image
        src="/assets/notFound.png"
        alt="Green portal gif spinning"
        width={500}
        height={500}
      />
      <Title>Jezz... there is no one in here</Title>
      <Button size="large" ghost onClick={handleReturn}>
        Go Back
      </Button>
    </Space>
  );
}
