import React from "react";

const Details = () => {
  return (
    <section>
      <div
        style={{
          background: `url(https://t4.ftcdn.net/jpg/06/09/68/87/360_F_609688709_cYztwjColm1AK7aiXMR1LvlgPItluPA4.jpg)`,
          backgroundColor: "rgba(0,0,0,0.8)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-bottom py-32 bg-blend-overlay text-center "
      >
        <h2 className="text-5xl font-bold text-clip text-white">
          Details Review
        </h2>
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="flex-col my-20">
          <img
            src="https://i.pcmag.com/imagery/lineups/06dxdkd5h3MmSKAaMczRpbQ-1..v1569492889.jpg"
            className=" my-10 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold">Box Office News!</h1>
            <div className="max-w-lg flex justify-between mt-3">
              <p className="text-gray-500 mt-2 font-medium">Author: name</p>
              <p className="text-gray-500 mt-2 font-medium">Email: name</p>
            </div>
            <div className="max-w-lg flex justify-between mt-4">
              <p className="text-gray-500 mt-2 font-medium">
                Publish Year: name
              </p>
              <p className="text-gray-500 mt-2 font-medium">Genres: name</p>
            </div>
            <p className="text-gray-500 mt-4 font-bold">Rating: name</p>

            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
