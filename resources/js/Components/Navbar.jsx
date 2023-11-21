// Navbar.js

import React, { useState, useEffect } from 'react';  // Add the import statement for useEffect
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBell, faUser, faUtensils } from "@fortawesome/free-solid-svg-icons";
import Notification from './Notification'; // Import the Notification component
import g from "/resources/images/HALALKU(V2).png";

const Navbar = ({ user, city }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showNotification, setShowNotification] = useState(false); // State for the notification

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className={`navbar ${scrolled ? "fixed top-0 bg-white shadow" : ""} z-50`}>
      <div className="flex-1 py-4">
        <Link href="/" className="btn btn-ghost normal-case text-xl text-black">
          <img
            src={g}
            style={{ maxWidth: '200px', height: 'auto', margin: '0 auto' }}
            alt="Logo"
          />
        </Link>
      </div>

      <div className="flex items-center">
        {/* ... (existing search input, if needed) */}
      </div>

      <div className="flex items-center space-x-4">
        <Link href={user ? route("store") : route("login")} as="button" className="btn btn-ghost normal-case text-xl text-black">
          <FontAwesomeIcon icon={faUtensils} style={{ fontSize: '1.5rem' }} />
          {user && <span className="ml-1">Pilih Restoran</span>}
        </Link>
        <button
          className="btn btn-ghost normal-case text-xl text-black"
          onClick={handleNotificationClick}
        >
          <FontAwesomeIcon icon={faBell} style={{ fontSize: '1.5rem' }} />
        </button>
      </div>

      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <FontAwesomeIcon icon={faUser} style={{ fontSize: '1.5rem' }} />
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {!user ? (
              <>

                <li><Link href={route("login")} as="button">Login</Link></li>
                <li><Link href={route("register")} as="button">Register</Link></li>
              </>
            ) : user.role === "Admin" ? (
              <>
                <li>
                  <Link href={route("admin")} className="justify-between">
                    Dashboard Admin
                  </Link>
                </li>
                <li><Link href={route("logout")} as="button" method="POST">Logout</Link></li>
              </>
            ) : (
              <>
                <li><Link href={route("logout")} as="button" method="POST">Logout</Link></li>
                <li><Link href={route('store')}>Store</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>

      {showNotification && <Notification onClose={closeNotification} />}
    </div>
  );
};

export default Navbar;
