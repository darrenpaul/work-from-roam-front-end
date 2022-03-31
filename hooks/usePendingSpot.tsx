import { doGetPendingSpots } from 'services/spot';
import { useEffect, useState } from 'react';

interface Params {
  accessToken: string;
}

const useGetPendingSpots = (accessToken: Params) => {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    revalidate();
  }, []);

  const revalidate = async () => {
    setLoading(true);

    const response = await doGetPendingSpots(accessToken);
    setSpots(response);
    setLoading(false);
  };

  return { spots, revalidate, loading };
};

export default useGetPendingSpots;
