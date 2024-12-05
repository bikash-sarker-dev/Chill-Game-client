import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../contextAip/ContextCreate";

const RegisterForm = () => {
  const [passShow, setPassShow] = useState(false);
  const { accountRegister, setUser } = useContext(AuthContext);

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

        // update
        updateProfile(user, updateDat)
          .then(() => {
            setUser(user);
            Swal.fire({
              title: "Successfully !",
              text: "this is account created . Enjoy your application",
              icon: "success",
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
    <div className="card bg-base-100 w-full  shrink-0 shadow-2xl max-w-4xl mx-auto mb-32">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter user name"
            className="p-3 border-b focus:outline-none focus:border-sky-500 focus:ring-sky-500"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Enter photo url"
            className="p-3 border-b focus:outline-none focus:border-sky-500 focus:ring-sky-500"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="p-3 border-b focus:outline-none focus:border-sky-500 focus:ring-sky-500"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={passShow ? "text" : "password"}
            name="password"
            placeholder="password"
            className="p-3 border-b focus:outline-none focus:border-sky-500 focus:ring-sky-500"
            required
          />
          <div className="absolute  right-5 top-9 ">
            <span onClick={() => setPassShow(!passShow)}>
              {" "}
              {passShow ? (
                <FaRegEyeSlash className="text-2xl" />
              ) : (
                <FaRegEye className="text-2xl" />
              )}
            </span>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-info">Register</button>
        </div>
      </form>
      <div className="text-center mb-6">
        <p className="text-gray-500">
          Already have an account ?{" "}
          <Link className="text-blue-600 font-semibold underline" to="/login">
            LOGIN HERE
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
