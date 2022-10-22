import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '29685313-2ba6443e06a4499ef383b21bf';

export const getGallery = async (value, page, perPage) => {
  const response = await axios.get(
    `?q=${value}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
