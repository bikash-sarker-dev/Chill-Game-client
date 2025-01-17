import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../contextAip/ContextCreate";

const AddReviewInput = () => {
  const { user, setLoading } = useContext(AuthContext);
  const handleAddReview = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const publishYear = form.publishYear.value;
    const rating = form.rating.value;
    const genres = form.genres.value;
    const description = form.description.value;
    const thumbnail = form.thumbnail.value;
    const username = form.username.value;
    const email = form.email.value;
    const newObject = {
      title,
      rating,
      publishYear,
      genres,
      thumbnail,
      username,
      email,
      description,
    };

    fetch("https://chill-gamer-server-ten.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newObject),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully ?",
            text: "the game review added .",
            icon: "success",
          });
          form.reset();
        }
      });
  };
  return (
    <section className="my-24 px-3 lg:px-0">
      <div className="container">
        <div className="card bg-base-100 dark:bg-slate-600  w-full max-w-4xl mx-auto shrink-0 shadow-2xl mb-10">
          <form onSubmit={handleAddReview} className="card-body">
            <div className="md:flex gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text dark:text-gray-200">
                    Game Title
                  </span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Game Title"
                  className="input input-bordered text-gray-900"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text dark:text-gray-200">
                    Publishing year
                  </span>
                </label>
                <input
                  name="publishYear"
                  type="number"
                  min="1990"
                  max="2099"
                  placeholder="Enter publishing year"
                  className="input input-bordered text-gray-900"
                  required
                />
              </div>
            </div>

            <div className="md:flex gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text dark:text-gray-200 ">Genres</span>
                </label>
                <select
                  name="genres"
                  className="select select-bordered w-full text-gray-900"
                  defaultValue={`DEFAULT`}
                >
                  <option key={1} value="DEFAULT" disabled selected>
                    can you select genres?
                  </option>
                  <option key={2} value="Action">
                    Action
                  </option>
                  <option key={3} value="RPG">
                    RPG
                  </option>
                  <option key={4} value="Adventure">
                    Adventure
                  </option>
                  <option key={5} value="Racing">
                    Racing
                  </option>
                  <option key={6} value="Shooter">
                    Shooter
                  </option>
                  <option key={7} value="Strategy">
                    Strategy
                  </option>
                </select>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text dark:text-gray-200">Rating</span>
                </label>
                <input
                  name="rating"
                  type="number"
                  min="1"
                  max="5"
                  placeholder="Enter rating number"
                  className="input input-bordered text-gray-900"
                  required
                />
              </div>
            </div>

            <div className="md:flex gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text dark:text-gray-200">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder=" Enter email"
                  defaultValue={user?.email}
                  className="input input-bordered text-gray-900"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text dark:text-gray-200">
                    User Name
                  </span>
                </label>
                <input
                  type="text"
                  name="username"
                  defaultValue={user?.displayName}
                  placeholder="Enter user name"
                  className="input input-bordered text-gray-900"
                  required
                />
              </div>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text dark:text-gray-200">
                  Game Cover Image/Thumbnail
                </span>
              </label>
              <input
                type="text"
                name="thumbnail"
                placeholder=" Enter Game Cover Image/Thumbnail"
                className="input input-bordered text-gray-900"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text dark:text-gray-200">
                  Review Description
                </span>
              </label>

              <textarea
                className="input input-bordered text-gray-900 h-44"
                placeholder=" Enter Review Description"
                name="description"
                rows="10"
                cols="50"
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-p-primary border-none hover:bg-dark-p-secondary hover:text-dark-p-text">
                Add Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddReviewInput;
