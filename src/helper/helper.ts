export const formatAmountWithCommas = (amount: number) => {
  let amtStr = amount.toString();
  let formattedAmt = amtStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formattedAmt;
};
