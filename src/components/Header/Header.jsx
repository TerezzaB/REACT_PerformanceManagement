import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const isLoginOrSignup = ['/login', '/signup'].includes(location.pathname);

  if (isLoginOrSignup) {
    return null;
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="sticky top-0 flex justify-between items-center p-2 _nav">
      <div className="flex-1 flex justify-center space-x-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `hover:text-purple-500 ${isActive ? 'text-purple-700 font-bold underline' : ''}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `hover:text-purple-500 ${isActive ? 'text-purple-700 font-bold underline' : ''}`
          }
        >
          Profile
        </NavLink>
      </div>
      <div className="p-2">
        <FontAwesomeIcon
          icon={faInfoCircle}
          className="hover:text-lime-600 cursor-pointer"
          onClick={handleOpenModal}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} content="Info Modal Content" />
    </div>
  );
}
