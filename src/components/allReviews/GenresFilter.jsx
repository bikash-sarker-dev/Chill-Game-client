import { useEffect, useState } from "react";
import { genresFilter } from "../../utilities/CategoriesGenres";

const GenresFilter = ({ setAllReviews }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://chill-gamer-server-ten.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  const handleAll = () => {
    setAllReviews(category);
  };

  const handleAction = () => {
    let result = genresFilter(category, "Action");
    setAllReviews(result);
  };
  const handleRpg = () => {
    let result = genresFilter(category, "RPG");
    setAllReviews(result);
  };
  const handleAdventure = () => {
    let result = genresFilter(category, "Adventure");
    setAllReviews(result);
  };
  const handleRacing = () => {
    let result = genresFilter(category, "Racing");
    setAllReviews(result);
  };

  const handleShooter = () => {
    let result = genresFilter(category, "Shooter");
    setAllReviews(result);
  };
  const handleStrategy = () => {
    let result = genresFilter(category, "Strategy");
    setAllReviews(result);
  };
  return (
    <>
      <li>
        <button onClick={handleAll}>All</button>
      </li>
      <li>
        <button onClick={handleAction}>Action</button>
      </li>
      <li>
        <button onClick={handleRpg}>RPG</button>
      </li>
      <li>
        <button onClick={handleAdventure}>Adventure</button>
      </li>
      <li>
        <button onClick={handleRacing}>Racing</button>
      </li>
      <li>
        <button onClick={handleShooter}>Shooter</button>
      </li>
      <li>
        <button onClick={handleStrategy}>Strategy</button>
      </li>
    </>
  );
};

export default GenresFilter;
