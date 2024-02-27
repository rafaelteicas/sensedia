export function getPagination(
    items: any[],
    currentPage: number,
    perPage: number
) {
    const startIndex = (currentPage - 1) * perPage;
    return items.slice(startIndex, startIndex + perPage);
}
