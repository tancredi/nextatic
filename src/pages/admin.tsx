import { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Page: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/admin/index.html');
  }, []);

  return null;
};

export default Page;
