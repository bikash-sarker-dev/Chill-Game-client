const ascendingOrder = (ratingValue) => {
  let lowerOrder = ratingValue.sort((x, y) => x.rating - y.rating);
  return lowerOrder;
};

const descendingOrder = (ratingValue) => {
  let upperOrder = ratingValue.sort((x, y) => y.rating - x.rating);
  return upperOrder;
};
const ascendingOrderYear = (ratingValue) => {
  let lowerOrder = ratingValue.sort((x, y) => x.publishYear - y.publishYear);
  return lowerOrder;
};

const descendingOrderYear = (ratingValue) => {
  let upperOrder = ratingValue.sort((x, y) => y.publishYear - x.publishYear);
  return upperOrder;
};
export {
  ascendingOrder,
  ascendingOrderYear,
  descendingOrder,
  descendingOrderYear,
};
