import React, { useEffect, useState } from "react";
import { NextPage } from "next";

import { Floor } from "models/floor.model";
import LevelDetail from "./_components/LevelDetail";
import axios from "helpers/axios";

interface Props {
  title?: string;
  floor: Floor;
}

const Level: NextPage<Props> = ({ floor }) => {
  return (
    <section className="max-w-2xl mx-auto">
      <LevelDetail floor={floor} />
      <section className="bg-white flex flex-col mx-4 p-6 ">
        <div className="flex justify-center">
          <button className="border-green-500 mx-2 px-3 py-2 rounded-full font-semibold hover:bg-gray-200">
            Standard desks
          </button>
          <button className="bg-gray-100 border-2 border-green-500 mx-2 px-3 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-200">
            Standing desks
          </button>
          <button className="border-green-500 mx-2 px-3 py-2 rounded-full font-semibold hover:bg-gray-200">
            View All
          </button>
        </div>
        <span className="font-semibold mt-4 text-center text-gray-500">
          Click on a desk to select it
        </span>
      </section>
    </section>
  );
};

Level.getInitialProps = async ({ query, res }) => {
  const { id } = query;

  const { data } = await axios.get("/data/floors.json");
  const floor = data.filter((floor) => floor.id === +id);

  if (res && !floor.length) {
    res.writeHead(301, { Location: "/levels" });
    res.end();
  }

  return {
    title: `Level ${id}`,
    floor: floor[0],
  };
};

export default Level;
