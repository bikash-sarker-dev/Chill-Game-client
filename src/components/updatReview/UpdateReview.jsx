import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../contextAip/ContextCreate";

const UpdateReview = () => {
  const { user, setLoading } = useContext(AuthContext);
  const getUpData = useLoaderData();
  const previousValue = getUpData[0];

  const handleUpdateReview = (e) => {
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
    console.log(newObject);

    fetch(
      `https://chill-gamer-server-ten.vercel.app/update/${previousValue._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newObject),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Successfully",
            text: "your data update",
            icon: "success",
          });
        }
      });
  };
  return (
    <section>
      <h2 className="text-4xl font-bold text-center my-16">Update Reviews </h2>
      <div className="container">
        <div className="card bg-base-100 dark:bg-slate-600 w-full max-w-4xl mx-auto shrink-0 shadow-2xl mb-10">
          <form onSubmit={handleUpdateReview} className="card-body p-3 md:p-10">
            <div className="md:flex gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Game Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={previousValue?.title}
                  placeholder="Game Title"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Publishing year</span>
                </label>
                <input
                  name="publishYear"
                  type="number"
                  min="1990"
                  max="2099"
                  defaultValue={previousValue?.publishYear}
                  placeholder="Enter publishing year"
                  className="input input-bordered text-black"
                  required
                />
              </div>
            </div>

            <div className="md:flex gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Genres</span>
                </label>
                <select
                  name="genres"
                  className="select select-bordered w-full text-black"
                  defaultValue={previousValue?.genres}
                >
                  <option key={1} disabled selected>
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
                  <span className="label-text">Rating</span>
                </label>
                <input
                  name="rating"
                  type="number"
                  min="1"
                  max="5"
                  defaultValue={previousValue?.rating}
                  placeholder="Enter rating number"
                  className="input input-bordered text-black"
                  required
                />
              </div>
            </div>

            <div className="md:flex gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder=" Enter email"
                  defaultValue={user?.email}
                  className="input input-bordered text-black"
                  disabled
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  name="username"
                  defaultValue={user?.displayName}
                  placeholder="Enter user name"
                  className="input input-bordered text-black"
                  disabled
                />
              </div>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Game Cover Image/Thumbnail</span>
              </label>
              <input
                type="text"
                name="thumbnail"
                defaultValue={previousValue?.thumbnail}
                placeholder=" Enter Game Cover Image/Thumbnail"
                className="input input-bordered text-black"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Review Description</span>
              </label>

              <textarea
                className="input input-bordered text-black h-44"
                placeholder=" Enter Review Description"
                name="description"
                defaultValue={previousValue?.description}
                rows="10"
                cols="50"
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-info">Update Review</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateReview;
