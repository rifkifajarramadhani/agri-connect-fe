import logo from "../assets/logo-white.png";
import { Bell, Mail } from "lucide-react";
import Search from "../components/Search";
import Navigation from "./header/Navigation";
import Account from "./header/Account";

const Header = () => {
  return (
    <header className="bg-brand-green flex justify-between items-center p-4">
      <a href="/">
        <img src={logo} alt="Agri Connect logo" width={48} height={48} />
      </a>

      <Navigation />

      <div>
        <Search />
      </div>

      <div className="flex justify-between items-center gap-4">
        <div className="relative">
          <Bell color="beige" size={24} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>
        <div className="relative">
          <Mail color="beige" size={24} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>
        <Account />
      </div>
    </header>
  );
};

export default Header;
