interface titleProp {
  title: string;
}

export default function TitleFooter({ title }: titleProp) {
  return <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>;
}
