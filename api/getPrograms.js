export default async function getPrograms(opts) {
  const { data } = await useApiRequest('/v1/programs', 'get', opts);

  return useSortArray(data);
}
