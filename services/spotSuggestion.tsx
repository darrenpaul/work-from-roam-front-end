import {
  acceptSpotSuggestion,
  createSpotSuggestion,
  getSpotsSuggestions,
  getSpotSuggestion,
} from 'apiClient/spotSuggestion';

export const doCreateSpotSuggestion = async (accessToken: string, spotData) => {
  try {
    const response = await createSpotSuggestion(accessToken, spotData);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const doGetSpotSuggestion = async (accessToken: String, id: String) => {
  const spotData = await getSpotSuggestion(accessToken, id);
  return spotData;
};

export const doSpotSuggestionAccept = async (accessToken: string, id: string, spotData) => {
  try {
    const response = await acceptSpotSuggestion(accessToken, id, spotData);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const doGetSpotsSuggestions = async (accessToken: String) => {
  const spotsSuggests = await getSpotsSuggestions(accessToken);
  return spotsSuggests;
};
