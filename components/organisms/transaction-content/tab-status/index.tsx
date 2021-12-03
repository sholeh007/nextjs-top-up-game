import Link from "next/link";
import cx from "classnames";

interface propsType {
  title: string;
  active?: boolean;
}

export default function TabStatus({ title, active }: propsType) {
  return (
    <Link href="#">
      <a
        className={`btn btn-status rounded-pill text-sm ${cx({
          "btn-active": active,
        })} me-3`}
      >
        {title}
      </a>
    </Link>
  );
}
