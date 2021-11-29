interface itemProps {
  title: string;
  content: string;
}

export default function ReachedItem({ title, content }: itemProps) {
  return (
    <>
      <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
      <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
      <div className="me-lg-35 ms-lg-35">
        <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
          {title}
        </p>
        <p className="text-lg text-lg-start text-center color-palette-2 m-0">
          {content}
        </p>
      </div>
    </>
  );
}
