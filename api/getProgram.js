export default async function getProgram(id, opts) {
  const { data } = await useApiRequest(`/v1/programs/${id}`, 'get', opts);

  return data;
}
