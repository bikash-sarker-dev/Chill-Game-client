import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contextAip/ContextCreate";
import auth from "../../firebase/firebase.config";

const LoginHead = ({ title }) => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const { setLoading } = useContext(AuthContext);

  const handleGoogleSignUp = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setLoading(false);
      });
  };
  return (
    <div className="container text-center mt-32 mb-20">
      <h2 className="text-4xl font-bold">{title}</h2>
      <div className="sm:space-x-6 my-5">
        <button
          onClick={handleGoogleSignUp}
          className="btn btn-outline rounded-3xl btn-info  "
        >
          {" "}
          <FcGoogle className="text-lg" /> Sign Up with Google
        </button>
        <button className="btn btn-outline rounded-3xl btn-info mt-4  sm:mt-0">
          {" "}
          <FaGithub className="text-lg text-black" /> Sign Up with Github
        </button>
      </div>
    </div>
  );
};

export default LoginHead;
