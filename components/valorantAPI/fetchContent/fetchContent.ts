import { ValorantAPI } from "../valorantAPI";

const fetchContent = async (locale?: string): Promise<any> => {
  const response = await ValorantAPI.getContent();
  const { data } = await response;

  if (response.status === 200) {
    return data;
  }

  return Promise.reject(response);
};

export default fetchContent;
