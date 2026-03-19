import logo from "../assets/logo-white.png";
import { Bell, ChevronDown, ChevronUp, Mail } from "lucide-react";
import Search from "./Search";
import { useState } from "react";

const Header = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const toggleProfileMenu = () => {
    setIsProfileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-brand-green flex justify-between items-center p-4">
      <img src={logo} alt="Agri Connect logo" width={48} height={48} />

      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-beige hover:text-green-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-beige hover:text-green-500">
              Network
            </a>
          </li>
          <li>
            <a href="#" className="text-beige hover:text-green-500">
              Marketplace
            </a>
          </li>
          <li>
            <a href="#" className="text-beige hover:text-green-500">
              Forum
            </a>
          </li>
        </ul>
      </nav>

      <div>
        <Search />
      </div>

      <div className="flex justify-between items-center gap-4">
        <Bell color="beige" size={24} />
        <Mail color="beige" size={24} />
        <div className="relative flex justify-between items-center gap-2">
          <img
            src="https://placehold.co/48?text=Me"
            alt="Profile"
            className="rounded-full"
          />
          <div className="flex flex-col justify-between items-start gap-2">
            <span className="text-beige text-sm">John Doe</span>
            <span className="text-beige text-sm">Farmer</span>
          </div>
          {isProfileMenuOpen ? (
            <ChevronDown
              onClick={toggleProfileMenu}
              color="beige"
              size={16}
              className="cursor-pointer"
            />
          ) : (
            <ChevronUp
              onClick={toggleProfileMenu}
              color="beige"
              size={16}
              className="cursor-pointer"
            />
          )}

          <div
            className={`absolute bg-brand-green -bottom-16 text-beige rounded-md p-2 w-full transition-all duration-300 ease-in-out ${
              isProfileMenuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            Profile
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
