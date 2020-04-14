import { NextPage } from "next";
import "./levels.scss";

const Levels: NextPage = () => {
  const levels: number[] = [1, 2, 3, 4, 5, 6, 7];

  const renderBoxes = () =>
    levels.map((level, key) => {
      return (
        <div
          className="box box hover:bg-gray-600"
          key={key}
          style={{ top: `${key * 90}px` }}
        ></div>
      );
    });

  return (
    <section className="flex flex-col max-w-2xl mx-auto">
      <span className="block font-bold md:text-4xl text-2xl text-center">
        Choose a level
      </span>
      <section className="relative transform scale-75">{renderBoxes()}</section>
    </section>
  );
};

Levels.getInitialProps = () => {
  return {
    title: "All Levels",
  };
};

export default Levels;
