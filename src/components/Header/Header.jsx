import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faUser, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal'
import infoModal from '../../data/modals.json';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [infoModalContent, setInfoModalContent] = useState('');
  const location = useLocation();

  const isLoginOrSignup = ['/login', '/signup'].includes(location.pathname);

  if (isLoginOrSignup) {
    return null;
  }

  useEffect(() => {
    setInfoModalContent(infoModal.infoModal);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white text-gray-800 transition-all duration-300 ${
          isOpen || window.innerWidth >= 1024 ? 'w-60' : 'w-20'
        }`}
      >
        <div className="flex flex-col items-center h-full py-6">
          <div className="mb-8 text-center">
            <h1
              className={`text-xl font-bold transition-opacity ${
                isOpen || window.innerWidth >= 1024 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              MyApp
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-2 w-full">
            <NavLink
              to="/UserDashboard"
              className={({ isActive }) =>
                `flex items-center w-full px-4 py-3 space-x-4 rounded-lg transition ${
                  isActive
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'hover:bg-gray-100'
                }`
              }
            >
              <FontAwesomeIcon
                icon={faChartBar}
                className="text-lg"
              />
              <span
                className={`transition-opacity ${
                  isOpen || window.innerWidth >= 1024 ? 'opacity-100' : 'opacity-0'
                } ${isOpen || window.innerWidth >= 1024 ? 'block' : 'hidden'}`}
              >
                Dashboard
              </span>
            </NavLink>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex items-center w-full px-4 py-3 space-x-4 rounded-lg transition ${
                  isActive
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'hover:bg-gray-100'
                }`
              }
            >
              <FontAwesomeIcon
                icon={faUser}
                className="text-lg"
              />
              <span
                className={`transition-opacity ${
                  isOpen || window.innerWidth >= 1024 ? 'opacity-100' : 'opacity-0'
                } ${isOpen || window.innerWidth >= 1024 ? 'block' : 'hidden'}`}
              >
                Profile
              </span>
            </NavLink>
          </nav>

          {/* Info Icon */}
          <div className="mt-auto w-full px-4 py-3">
            <button
              onClick={handleOpenModal}
              className="flex items-center space-x-4 text-gray-400 hover:text-blue-600  w-full"
            >
              <FontAwesomeIcon icon={faCircleInfo} className="text-lg" />
              <span
                className={`transition-opacity ${
                  isOpen || window.innerWidth >= 1024 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                Info
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Toggle Button for Tablets */}
      <div className="fixed top-2 left-2 z-50 lg:hidden">
        <button
          onClick={toggleSidebar}
          className="p-2 text-gray-800 rounded-full focus:outline-none"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} content={infoModalContent} />
    </div>
  );
}
