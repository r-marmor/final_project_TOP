import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="bg-white border-gray-200 shadow-lg fixed w-screen z-30">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NavLink to="/" className="self-center text-2xl font-semibold whitespace-nowrap">Bitstamp</NavLink>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                <li>
                  <NavLink to="/institutions" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Institution</NavLink>
                </li>
                <li>
                  <NavLink to="/pro" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Pro</NavLink>
                </li>
                <li>
                  <NavLink to="/earnstake" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Earn Stake</NavLink>
                </li>
                <li>
                  <NavLink to="/markets" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Markets</NavLink>
                </li>
                <li>
                  <NavLink to="/learn" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Learn</NavLink>
                </li>
              </ul>
            </div>
            <div className="flex gap-4 justify-end w-full md:w-auto items-center mt-6 md:mt-0 ">
                <span>Log in</span>
                <button type="button" className="focus:outline-none text-green-400 hover:text-green-900 bg-green-900 hover:bg-green-400 focus:ring-4 focus:ring-green-300 font-medium rounded text-sm px-8 py-2.5 mr-2 mb-2">Get started</button>
            </div>
          </div>
        </nav>

    )
}