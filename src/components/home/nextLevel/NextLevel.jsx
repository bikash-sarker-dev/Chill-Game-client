import React from "react";
import { SiLevelsdotfyi } from "react-icons/si";

const NextLevel = () => {
  return (
    <section className="bg-p-background dark:bg-dark-p-background py-36 my-32">
      <div className="container">
        <div className="flex gap-8">
          <div className="md:flex-1">
            <img
              src="https://cdn.mos.cms.futurecdn.net/5VytVjVQUu9WzYqu8tU5pR-970-80.jpg.webp"
              alt="not support image"
            />
          </div>
          <div className="md:flex-1">
            <h2 className="text-4xl font-bold uppercase">Gaming Next Level</h2>
            <h4 className="uppercase font-semibold bg-p-secondary inline-block py-1 px-3 my-3">
              arctic warfare magnum (nfts)
            </h4>
            <p className="text-md font-medium max-w-2xl leading-7 my-3">
              Building your own stuff, you can do that too. The ASSET CREATOR
              will allow creators to make things for the as well as sell them
              game’s marketp just characters.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <SiLevelsdotfyi className="text-3xl text-p-primary" />
              <p className="text-lg font-semibold ">
                {" "}
                | Earn Great Rewards{" "}
                <span className="text-p-primary">( Friend )</span>
              </p>
            </div>
            <button className="bg-p-accent py-3 px-5 hover:bg-p-primary  uppercase font-semibold  mt-8">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextLevel;
