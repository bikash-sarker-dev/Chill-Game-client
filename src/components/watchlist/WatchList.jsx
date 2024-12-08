import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contextAip/ContextCreate";
import CardWatchList from "./CardWatchList";

const WatchList = () => {
  const { user } = useContext(AuthContext);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    fetch(`https://chill-gamer-server-ten.vercel.app/watchlist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setWatchList(data));
  }, []);

  return (
    <section className="my-32 px-3 lg:px-0">
      <div className="container">
        {watchList.map((watchItem) => (
          <CardWatchList key={watchItem._id} watchReview={watchItem} />
        ))}
      </div>
    </section>
  );
};

export default WatchList;
