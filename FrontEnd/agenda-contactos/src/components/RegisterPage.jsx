import React, { useState } from "react";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleRegister = () => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleRegister}
          className="border mb-8 bg-white shadow-md rounded px-8 pt-6 pb-8"
        >
          <div className=" mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              usuario
            </label>
            <input
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="User"
              className="shadow hover:border-blue-300  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex flex-col mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {" "}
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow hover:border-blue-300  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex flex-col mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow hover:border-blue-300  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Registrarse
            </button>
          </div>
          <div className="mt-4">
            <p className="text-center text-gray-600 text-sm">
              ¿Ya estas registrado?{" "}
              <Link className="hover:text-blue-300" to="/landingLogin">
                Inicia Sesion
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
