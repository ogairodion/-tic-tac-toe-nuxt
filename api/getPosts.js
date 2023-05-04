export default async function getPosts(opts) {
  const { data } = await useApiRequest('/v1/posts', 'get', opts);

  return useSortArray(data);
}
