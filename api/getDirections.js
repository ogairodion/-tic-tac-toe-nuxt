export default async function getDirections(opts) {
  const { data } = await useApiRequest('/v1/directions', 'get', opts);

  return useSortArray(data);
}
