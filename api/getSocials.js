export default async function getSocials(opts) {
  const { data } = await useApiRequest('/v1/social-networks', 'get', opts);

  return useSortArray(data);
}
