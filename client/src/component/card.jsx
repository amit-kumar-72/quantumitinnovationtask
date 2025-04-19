import { FaRegUserCircle, FaUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

// card ui that show signup/login
function Card({ login, handleSubmit, handleChange }) {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-teal-800 to-teal-500">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 text-center">
        <div className="bg-teal-400 text-gray-500 py-3 rounded-t-lg text-lg font-semibold -mt-14">
          {login ? "LOGIN" : "SIGNUP"}
        </div>
        <div className="flex justify-center my-10 ">
          <FaRegUserCircle className="text-white text-8xl" />
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Username Input */}

          {!login && (
            <div className="relative">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="name"
                className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-700 text-white outline-none"
              />
              <FaUser className="absolute left-3 top-3 text-white" />
            </div>
          )}

          {/* dob */}
          {!login && (
            <div className="relative">
              <input
                type="date"
                name="dateOfBirth"
                onChange={handleChange}
                placeholder="Date Of Birth"
                className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-700 text-white outline-none"
              />
              <FaCalendarAlt className="absolute left-3 top-3 text-white" />
            </div>
          )}

          {/* email */}

          <div className="relative">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="email"
              className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-700 text-white outline-none"
            />
            <MdEmail className="absolute left-3 top-3 text-white" />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-700 text-white outline-none"
            />
            <TbLockPassword className="absolute left-3 top-3 text-white" />
          </div>

          {/* remember Me & forgot password */}

          <div className="flex justify-between text-teal-400 text-sm">
            <label>
              <input type="checkbox" className="mr-2 " />
              Remember me
            </label>

            {login ? (
              <Link to={"/"}>
                <div className="hover:text-teal-400 cursor-pointer">Signup ?</div>
              </Link>
            ) : (
              <Link to={"/login"}>
                <div className="hover:text-teal-400 cursor-pointer">Login ?</div>
              </Link>
            )}
          </div>

          {/*  Button */}
          <button
            type="submit"
            className="bg-teal-400 text-gray-500 py-2 rounded-lg hover:bg-teal-500 transition"
          >
            {login ? "LOGIN" : "SIGNUP"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Card;
