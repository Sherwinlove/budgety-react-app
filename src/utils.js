export const toNumbers = (str) => {
  return str.toString().replace(/[^0-9]/g, "");
};

export const toCurrency = (str) => {
  return str.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};
