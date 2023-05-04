export default async function getPartners(opts) {
  const { data } = await useApiRequest('/v1/partners', 'get', opts);

  return useSortArray(data);
}
