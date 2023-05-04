export default async function getReviews(opts) {
  const { data } = await useApiRequest('/v1/reviews', 'get', opts);

  return useSortArray(data);
}
