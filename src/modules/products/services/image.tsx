export const UploadImage = async (formData: FormData) => {
  const res = await fetch('/api/image', {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();
  return data;
};

export const fetchImages = async (productId: string) => {
  const res = await fetch(`/api/image?productId=${productId}`, {
    method: 'GET',
    next: { revalidate: 0 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch images');
  }
  return res.json();
};

export const deleteImage = async (imageId: string) => {
  const res = await fetch(`/api/image?imageId=${imageId}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  return data;
};
