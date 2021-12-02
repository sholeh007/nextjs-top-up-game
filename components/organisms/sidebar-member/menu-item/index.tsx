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
  active?: boolean;
}

export default function MenuItem({ title, icon, active }: Partial<PropsType>) {
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
        <a href="" className="text-lg text-decoration-none">
          {title}
        </a>
      </p>
    </div>
  );
}
