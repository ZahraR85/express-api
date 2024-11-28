import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const [dropdownOpen4, setDropdownOpen4] = useState(false);

  return (
    <nav className="bg-custom-gradient p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          My Store
        </Link>
        <div className="flex space-x-6 items-center text-white">
          <Link to="/">Home</Link>

          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen1(!dropdownOpen1)}
              className="text-white"
            >
              Products <i className="fas fa-chevron-down ml-1 text-xs"></i>
            </button>
            {dropdownOpen1 && (
              <div className="absolute mt-2 w-40 bg-custom-gradient rounded shadow-lg">
                <Link
                  to="/products"
                  className="block p-2 text-sm text-white hover:text-gray-900 hover:bg-gray-200"
                  onClick={() => setDropdownOpen1(false)}
                >
                  Manage Products
                </Link>
              </div>
            )}
          </div>

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen2(!dropdownOpen2)}
              className="text-white"
            >
              Categories <i className="fas fa-chevron-down ml-1 text-xs"></i>
            </button>
            {dropdownOpen2 && (
              <div className="absolute mt-2 w-40 bg-custom-gradient rounded shadow-lg">
                <Link
                  to="/categories"
                  className="block p-2 text-sm text-white hover:text-gray-900 hover:bg-gray-200"
                  onClick={() => setDropdownOpen2(false)}
                >
                  Manage Categories
                </Link>
              </div>
            )}
          </div>

          {/* Orders Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen3(!dropdownOpen3)}
              className="text-white"
            >
              Orders <i className="fas fa-chevron-down ml-1 text-xs"></i>
            </button>
            {dropdownOpen3 && (
              <div className="absolute mt-2 w-40 bg-custom-gradient rounded shadow-lg">
                <Link
                  to="/orders"
                  className="block p-2 text-sm text-white hover:text-gray-900 hover:bg-gray-200"
                  onClick={() => setDropdownOpen3(false)}
                >
                  Manage Orders
                </Link>
              </div>
            )}
          </div>

          {/* Users Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen4(!dropdownOpen4)}
              className="text-white"
            >
              Users <i className="fas fa-chevron-down ml-1 text-xs"></i>
            </button>
            {dropdownOpen4 && (
              <div className="absolute mt-2 w-40 bg-custom-gradient rounded shadow-lg">
                <Link
                  to="/users"
                  className="block p-2 text-sm text-white hover:text-gray-900 hover:bg-gray-200"
                  onClick={() => setDropdownOpen4(false)}
                >
                  Manage Users
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
