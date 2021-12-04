import cx from "classnames";
import FormatCurrency from "../../../../lib/format-currency";

interface propsType {
  label: string;
  value: number | string;
  styles?: boolean;
  isNumber?: boolean;
}

export default function Row({ label, value, isNumber, styles }: propsType) {
  const classPruchase = cx("purchase-details", { "color-palette-4": styles });

  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}
      <span className={classPruchase}>
        {isNumber ? FormatCurrency(value) : value}
      </span>
    </p>
  );
}
