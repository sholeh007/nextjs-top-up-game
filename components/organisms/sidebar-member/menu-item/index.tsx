import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

interface PropsType {
  title: string;
  icon:
    | "overview"
    | "transaction"
    | "message"
    | "card"
    | "reward"
    | "setting"
    | "power";
  link: string;
  active?: boolean;
}

export default function MenuItem({ title, icon, active, link }: PropsType) {
  const classItem = cx({
    item: true,
    "mb-30": true,
    active: active,
  });

  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} height={25} width={25} alt="" />
      </div>
      <p className="item-title m-0">
        <Link href={link} passHref>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
