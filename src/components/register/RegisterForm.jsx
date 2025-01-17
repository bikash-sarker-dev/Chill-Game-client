import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../contextAip/ContextCreate";

const RegisterForm = () => {
  const [passShow, setPassShow] = useState(false);
  const { accountRegister, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const photo_Url = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const newObj = { username, photo_Url, email, password };

    const validation = /^(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;
    if (!validation.test(password)) {
      toast.warn(
        "the password must be at least 6 character, must be Uppercase and Lowercase "
      );
      return;
    }

    const updateDat = {
      displayName: username,
      photoURL: photo_Url,
    };
    accountRegister(email, password)
      .then((data) => {
        const user = data.user;
        const creationTime = user.metadata?.creationTime;
        // update
        updateProfile(user, updateDat)
          .then(() => {
            setUser(user);
            fetch("https://chill-gamer-server-ten.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ username, email, creationTime }),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  Swal.fire({
                    title: "Successfully !",
                    text: "this is account created . Enjoy your application",
                    icon: "success",
                  });
                  navigate("/");
                }
              });
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });

        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="card bg-p-background w-full   shrink-0 shadow-2xl max-w-4xl mx-auto mb-32">
      <form onSubmit={handleRegister} className="card-body px-3 md:px-10">
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-gray-200">User Name</span>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter user name"
            className="p-3 border-b dark:text-p-text border-p-secondary  focus:outline-none focus:border-p-secondary focus:ring-sky-500"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-gray-200">Photo Url</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Enter photo url"
            className="p-3 border-b dark:text-p-text border-p-secondary  focus:outline-none focus:border-p-secondary focus:ring-sky-500"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-gray-200">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="p-3 border-b dark:text-p-text border-p-secondary  focus:outline-none focus:border-p-secondary focus:ring-sky-500"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text dark:text-gray-200">Password</span>
          </label>
          <input
            type={passShow ? "text" : "password"}
            name="password"
            placeholder="password"
            className="p-3 border-b dark:text-p-text border-p-secondary  focus:outline-none focus:border-p-secondary focus:ring-sky-500"
            required
          />
          <div className="absolute  right-5  dark:top-12 top-9 ">
            <span
              className="cursor-pointer"
              onClick={() => setPassShow(!passShow)}
            >
              {" "}
              {passShow ? (
                <FaRegEyeSlash className="text-2xl " />
              ) : (
                <FaRegEye className="text-2xl " />
              )}
            </span>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-p-primary">Register</button>
        </div>
      </form>
      <div className="text-center mb-6">
        <p className="text-gray-500 dark:text-dark-p-background ">
          Already have an account ?{" "}
          <Link
            className="text-blue-600 font-semibold dark:text-p-primary  underline"
            to="/login"
          >
            LOGIN HERE
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
