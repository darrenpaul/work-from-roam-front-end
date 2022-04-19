import { doGetSpot } from 'services/spot';
import { doGetSpotSuggestion } from 'services/spotSuggestion';
import { useEffect, useState } from 'react';

interface Params {
  accessToken: string;
  id: string;
}

const useSpotCompare = ({ accessToken, id }: Params) => {
  const [spotCompare, setSpotCompare] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    revalidate();
  }, []);

  const revalidate = async () => {
    setLoading(true);

    if (id) {
      const spotSuggestion = await doGetSpotSuggestion(accessToken, id);
      const spot = await doGetSpot(accessToken, spotSuggestion.id);
      setSpotCompare({ spotSuggestion, spot });
      setLoading(false);
    }
  };

  return { spotCompare, revalidate, loading };
};

export default useSpotCompare;
