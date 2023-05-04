export default async function getDocuments(opts) {
  let link = '/v1/documents?';
  Object.keys(opts).forEach((key) => {
    link += `&${key}=${opts[key]}`;
  });
  const response = await useApiRequest(link, 'get', opts);
  return response;
}
