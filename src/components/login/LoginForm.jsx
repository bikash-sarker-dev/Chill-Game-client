import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contextAip/ContextCreate";

const LoginForm = () => {
  const [passShow, setPassShow] = useState(true);
  const { accountLogin, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    accountLogin(email, password)
      .then((loginData) => {
        const user = loginData.user;

        const lastSignInTime = user.metadata?.lastSignInTime;
        fetch(`https://chill-gamer-server-ten.vercel.app/users/${email}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ lastSignInTime }),
        })
          .then((res) => res.json())
          .then((data) => {
            {
              location.state ? navigate(location.state) : navigate("/");
            }
          });
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage.includes("auth/invalid-credential")) {
          toast.warn("the Email and password not match. please try again .");
          setLoading(false);
        }
      });
  };

  return (
    <div className="card bg-base-100 dark:bg-slate-600 w-full  shrink-0 shadow-2xl max-w-4xl mx-auto mb-32 ">
      <form onSubmit={handleLogin} className="card-body p-3 md:p-10">
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-gray-200">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="p-3 border-b text-gray-900 focus:outline-none focus:border-sky-500   focus:ring-sky-500"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text   dark:text-gray-200">Password</span>
          </label>
          <input
            type={passShow ? "text" : "password"}
            name="password"
            placeholder="password"
            className="p-3 border-b focus:outline-none focus:border-sky-500 text-gray-900 focus:ring-sky-500"
            required
          />
          <div className="absolute  right-5 top-9 dark:top-12 ">
            <span onClick={() => setPassShow(!passShow)}>
              {" "}
              {passShow ? (
                <FaRegEyeSlash className="text-2xl text-gray-900" />
              ) : (
                <FaRegEye className="text-2xl text-gray-900" />
              )}
            </span>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-info">Login</button>
        </div>
      </form>
      <div className="text-center mb-6">
        <p className="text-gray-500 dark:text-white">
          New User ?{" "}
          <Link
            className="text-blue-600 dark:text-orange-600 font-semibold underline"
            to="/register"
          >
            SIGN UP HERE
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
