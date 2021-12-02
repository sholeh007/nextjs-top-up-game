export default function FormatCurrency(val: number) {
  const options = {
    style: "currency",
    currency: "idr",
    minimumFractionDigits: 0,
  };
  return new Intl.NumberFormat("id", options).format(val);
}
