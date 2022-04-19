import { doGetSpotSuggestion } from 'services/spotSuggestion';
import { useEffect, useState } from 'react';

interface Params {
  accessToken: string;
  id: string;
}

const useGetSpotSuggestion = ({ accessToken, id }: Params) => {
  const [spotSuggestion, setSpot] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    revalidate();
  }, []);

  const revalidate = async () => {
    setLoading(true);

    if (id) {
      const response = await doGetSpotSuggestion(accessToken, id);
      setSpot(response);
      setLoading(false);
    }
  };

  return { spotSuggestion, revalidate, loading };
};

export default useGetSpotSuggestion;
