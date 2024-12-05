import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../contextAip/ContextCreate";
import Rating from "../home/rating/Rating";

const Details = () => {
  const { user } = useContext(AuthContext);
  const getData = useLoaderData();
  const detailsPro = getData[0];

  const watchInfo = {
    username: user?.displayName,
    email: user?.email,
  };

  const handleWatchList = () => {
    fetch("http://localhost:8000/watchlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(watchInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully",
            text: " The Watch List Add username and email.",
            icon: "success",
          });
        }
      });
  };

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
            src={detailsPro?.thumbnail}
            className=" my-10 rounded-lg shadow-2xl md:min-w-[700px] lg:max-h-[700px]"
          />
          <div>
            <h1 className="text-4xl font-bold">{detailsPro?.title}</h1>
            <div className="max-w-lg flex justify-between mt-3">
              <p className="text-gray-500 mt-2 font-medium">
                Author: {detailsPro?.username}
              </p>
              <p className="text-gray-500 mt-2 font-medium">
                Email: {detailsPro?.email}
              </p>
            </div>
            <div className="max-w-lg flex justify-between mt-4">
              <p className="text-gray-500 mt-2 font-medium">
                Publish Year: {detailsPro?.publishYear}
              </p>
              <p className="text-gray-500 mt-2 font-medium">
                Genres: {detailsPro?.genres}
              </p>
            </div>
            <p className="text-gray-500 mt-4 font-bold flex items-center gap-5">
              Rating: <Rating ratingNumber={detailsPro?.rating} />{" "}
            </p>

            <p className="py-6 mx-w-5xl">{detailsPro?.description}</p>
            {user && user?.email && (
              <button
                onClick={handleWatchList}
                className="btn btn-info  my-8 px-10"
              >
                Add to WatchList
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
