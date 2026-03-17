import logo from '../assets/logo.png'
import { Bell, Mail } from 'lucide-react';

const Header = () =>  {
  return (
    <header className="flex justify-between items-center p-4">
      <img src={logo} alt="Agri Connect logo" width={48} height={48} />

      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-700 hover:text-green-500">Home</a></li>
          <li><a href="#" className="text-gray-700 hover:text-green-500">Network</a></li>
          <li><a href="#" className="text-gray-700 hover:text-green-500">Marketplace</a></li>
          <li><a href="#" className="text-gray-700 hover:text-green-500">Forum</a></li>
        </ul>
      </nav>

      <div className="flex justify-between items-center gap-4">
        <Bell size={24} />
        <Mail size={24} />
        <img src="https://placehold.co/48?text=Me" alt="Profile" className='rounded-full' />
      </div>
    </header>
  )
}

export default Header;
