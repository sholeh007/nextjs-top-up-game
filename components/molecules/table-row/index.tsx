import cx from "classnames";
import Image from "next/image";
import FormatCurrency from "../../../lib/format-currency";
import Link from "next/link";

interface propsType {
  title: string;
  category: string;
  item: number;
  price: number;
  status: "pending" | "failed" | "success";
  image: string;
  action?: boolean;
}

export default function TableRow({
  title,
  category,
  item,
  price,
  status,
  image,
  action,
}: propsType) {
  const statusClass = cx("float-start", "icon-status", {
    pending: status === "pending",
    failed: status === "failed",
    success: status === "success",
  });

  return (
    <tr className="align-middle">
      <th scope="row">
        <div className="float-start me-3 mb-lg-0 mb-3">
          <Image src={`/img/${image}.png`} width={80} height={60} alt="" />
        </div>
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">
          {FormatCurrency(price)}
        </p>
      </td>
      <td>
        <div>
          <span className={statusClass}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
      {action && (
        <td>
          <Link href="/member/transactions/detail" passHref>
            <a className="btn btn-status rounded-pill text-sm">Details</a>
          </Link>
        </td>
      )}
    </tr>
  );
}
