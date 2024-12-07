export let genresFilter = (allData, genres) => {
  let filter = allData.filter((genreItem) => genreItem.genres === genres);
  return filter;
};
