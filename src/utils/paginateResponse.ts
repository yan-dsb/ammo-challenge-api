export function paginateResponse(
  data: Array<any>,
  page: number,
  limit: number
) {
  const [result, total] = data;
  const lastPage = Math.ceil(total / limit);
  const nextPage = page + 1 > lastPage ? null : page + 1;
  const prevPage = page - 1 < 1 ? null : page - 1;
  return {
    data: [...result],
    total,
    currentPage: page,
    nextPage,
    prevPage,
    lastPage
  };
}
