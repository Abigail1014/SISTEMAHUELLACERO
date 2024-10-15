import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full p-6 flex justify-center bg-slate-700 text-white">
      <div className="">

        {/* <ul className="footer-list">

          <li>
            <a href="#" className="footer-link">Terminos de uso</a>
          </li>

          <li>
            <a href="#" className="footer-link">Privacidad y Politicas</a>
          </li>

        </ul> */}

        <p className="text-sm">
          Hecho en el 2024 por <span className="font-bold">Abigail</span>. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  )
}

export { Footer }