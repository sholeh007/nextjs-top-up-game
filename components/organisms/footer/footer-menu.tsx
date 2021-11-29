import Link from "next/link";

interface menuProps {
  name: string;
}

export default function FooterMenu({ name }: menuProps) {
  return (
    <li className="mb-6">
      <Link href="/" passHref>
        <a className="text-lg color-palette-1 text-decoration-none">{name}</a>
      </Link>
    </li>
  );
}
