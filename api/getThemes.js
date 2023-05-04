export default async function getPosts(opts) {
  const { data } = await useApiRequest('/v1/themes', 'get', opts);

  return useSortArray(data);
}
