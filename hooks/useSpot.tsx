import { doGetSpot } from 'services/spot';
import { useEffect, useState } from 'react';

interface Params {
  accessToken: string;
  id: string;
}

const useGetSpot = ({ accessToken, id }: Params) => {
  const [spot, setSpot] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    revalidate();
  }, []);

  const revalidate = async () => {
    setLoading(true);

    if (id) {
      const response = await doGetSpot(accessToken, id);
      setSpot(response);
      setLoading(false);
    }
  };

  return { spot, revalidate, loading };
};

export default useGetSpot;
