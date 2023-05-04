export default async function getEvents(opts) {
  const { data } = await useApiRequest('/v1/events', 'get', opts);

  return useSortArray(data);
}
