import StepItem from "../../molecules/step-item";
import { ListTransaction } from "./list-transaction";

export default function TransactionSteps() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br /> Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          {ListTransaction.map((list) => (
            <div key={list.icon} className="col-lg-4">
              <StepItem
                icon={list.icon}
                title={list.title}
                content={list.content}
                content2={list.content2}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
