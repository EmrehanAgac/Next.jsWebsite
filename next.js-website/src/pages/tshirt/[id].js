import React from 'react';
import { useRouter } from 'next/router';
import TShirtCard from '../../components/TShirtCard';

const TShirtPage = () => {
  const router = useRouter();
  const { id } = router.query; 

sin
  return <TShirtCard id={id} />;
};

export default TShirtPage;
