import axios from 'axios';

export const uploadImage = async (formData: FormData) => {
  try {
    const { data } = await axios.post('/api/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (eror) {
    console.error('Upload image failed:', eror);
    throw eror;
  }
};

export const fetchImages = async (productId: string) => {
  try {
    const { data } = await axios.get('/api/image', {
      params: { productId },
    });
    return data;
  } catch (eror) {
    console.error('Fetch images failed:', eror);
    throw eror;
  }
};

export const deleteImage = async (imageId: string) => {
  try {
    const { data } = await axios.delete('/api/image', {
      params: { imageId },
    });
    return data;
  } catch (eror) {
    console.error('Delete image failed:', eror);
    throw eror;
  }
};
