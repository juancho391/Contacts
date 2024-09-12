import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen  bg-mainbackground bg-cover bg-center">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center">
          <i className="bx bxs-calendar h-6 w-6 text-blue-600 animate-bounce"></i>
          <span className="ml-2 text-2xl font-bold text-white">
            Agenda de contactos
          </span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 lx:py-48 lg:mt-20 flex flex-col items-center justify-center text-center">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8">
              Bienvenido a tu Agenda de Contactos
            </h1>
            <p className="mx-auto max-w-[700px] text-lg md:text-xl text-white mb-8">
              {" "}
              Organiza tus contactos de manera eficiente y mantén tus conexiones
              al alcance de tu mano.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full text-lg font-semibold transition-colors"
              >
                Registrarse
              </Link>
              <Link
                to="/landingLogin"
                variant="outline"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-semibold transition-colors"
              >
                Iniciar Sesión
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6  ">
        <p className="text-xs text-white">
          © 2023 ContactAgenda. Todos los derechos reservados
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-white">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-white">
            Politica de privacidad
          </Link>
        </nav>
      </footer>
    </div>
  );
};
