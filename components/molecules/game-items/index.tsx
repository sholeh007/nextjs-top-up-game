import Link from "next/link";
import Image from "next/image";

export interface GameProps {
  id: number;
  link: string;
  image: string;
  icon: string;
  title: string;
  category: string;
}

export default function GameItems({
  id,
  link,
  image,
  icon,
  title,
  category,
}: GameProps) {
  return (
    <div className="featured-game-card position-relative">
      <Link href={`/${link}/${id}`} passHref>
        <a>
          <div className="blur-sharp">
            <Image
              src={`/img/${image}.png`}
              width={205}
              height={270}
              alt="thumbnail"
              className="thumbnail"
            />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <Image
                  src={`/icon/${icon}.svg`}
                  alt="icon"
                  width={54}
                  height={36}
                />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{title}</p>
                <p className="fw-light text-white m-0">{category}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
