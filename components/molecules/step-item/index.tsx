import Image from "next/image";

interface stepType {
  icon: string;
  title: string;
  content: string;
  content2: string;
}

export default function StepItem({ icon, title, content, content2 }: stepType) {
  return (
    <div className="card feature-card border-0">
      <div className="mb-30">
        <Image src={`/icon/${icon}.svg`} alt="step1" width={80} height={80} />
      </div>
      <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
      <p className="text-lg color-palette-1 mb-0">
        {content} <br />
        {content2}
      </p>
    </div>
  );
}
