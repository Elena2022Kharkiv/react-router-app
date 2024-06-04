export const getSumm = (prodArr) => {
  if (!prodArr.length) {
    return null;
  }

  return prodArr.reduce((acc, item) => (acc + Number(item.price)), 0);
}
