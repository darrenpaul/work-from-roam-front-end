import { createSpotSuggestion } from '../apiClient/spotSuggestion';

export const doCreateSpotSuggestion = async (accessToken: string, spotData) => {
  try {
    const response = await createSpotSuggestion(accessToken, spotData);
    return response;
  } catch (error) {
    console.log(error);
  }
};
