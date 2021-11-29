import GameItems from "../../molecules/game-items";
import { GameList } from "./game-list";

export default function FeatureGames() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {GameList.map((item, i) => (
            <div key={i}>
              <GameItems
                id={item.id}
                link={item.link}
                image={item.image}
                icon={item.icon}
                title={item.title}
                category={item.category}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
