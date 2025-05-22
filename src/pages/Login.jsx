import React, { use, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { AuthContext } from "../store/contexts";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { signInUser, googleLogin } = use(AuthContext);

  const handleSignInUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        toast.success("Login successfully!");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error("Something wrong! Please try again?");
      });
    console.log(email, password);
  };

  // sign in with google
  const handleGoogleLogin = (params) => {
    googleLogin()
      .then((result) => {
        toast.success("Login successfully!");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error("Something wrong! Please try again?");
      });
  };

  return (
    <div className="max-w-md  border border-[#cccccc8f] my-16 mx-auto rounded-xl px-4 py-5">
      <h3 className="text-3xl font-semibold text-center mb-6 ">Login</h3>
      <form onSubmit={handleSignInUser}>
        {/* email start  */}
        <legend className="font-semibold mb-1 mt-2">Email</legend>
        <label className="input validator w-full bg-base-300">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            type="email"
            name="email"
            placeholder="mail@site.com"
            required
          />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>
        {/* email end */}
        {/* password start  */}
        <legend className="font-semibold mb-1 mt-2">Password</legend>
        <label className="input validator w-full bg-base-300">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <input
            type={showPass ? "text" : "password"}
            required
            placeholder="Password"
            minLength="6"
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
          />
          <button
            onClick={() => setShowPass((prev) => !prev)}
            type="button"
            className="cursor-pointer"
          >
            {showPass ? <IoMdEyeOff size={25} /> : <IoMdEye size={25} />}
          </button>
        </label>
        <div className="mt-1">
          <Link className="text-xs link link-hover">Forgot Password?</Link>
        </div>

        <p className="validator-hint hidden">
          Must be more than 8 characters, including
          <br />
          At least one number <br />
          At least one lowercase letter <br />
          At least one uppercase letter
        </p>
        {/* password end */}
        <input type="submit" value={"Login"} className="btn w-full mt-6" />
      </form>
      <p className="text-xs  mt-2 text-center">
        I don't have an account?{" "}
        <Link to={"/register"} className="text-blue-700 underline text-sm">
          Register
        </Link>
      </p>
      <div className="divider">OR</div>
      {/* Google */}
      <button
        onClick={handleGoogleLogin}
        type="button"
        className="btn bg-white text-black border-[#e5e5e5] w-full"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
