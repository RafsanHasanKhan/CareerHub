import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { FaAlignJustify} from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate()
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [color, setColor] = useState(false);
  const navItems = [
    { id: 1, path: `/`, link: 'Statistics' },
    { id: 2, path: '/AppliedJobs', link: 'Applied Jobs' },
    { id: 3, path: '/Blog', link: 'Blog' },
  ];

  const backHome = () => {
    navigate('/')
  }
  const menuToggle = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)
  return (
    <header
      className={`${
        color ? '.bg-primary-gradient bg-navbar-active' : '.bg-primary-gradient'
      } fixed top-0 left-0 right-0
     z-50`}
    >
      <div className="max-w-[1320px] mx-auto">
        <nav className="flex items-center justify-between my-5 ">
          <button onClick={backHome} className="text-3xl font-extrabold">
            CareerHub
          </button>
          <div>
            <ul className="md:flex gap-10 text-base font-bold hidden">
              {navItems.map(({ id, path, link }) => (
                <li key={id}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'text-transparent bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text'
                        : ''
                    }
                    to={path}
                  >
                    {link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button className="px-7 py-5 font-extrabold rounded-lg text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-xl md:inline-flex hidden">
              Star Applying
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={menuToggle} className="cursor-pointer">
              {isOpenMenu ? (
                <IoClose className="text-3xl"></IoClose>
              ) : (
                <FaAlignJustify className="text-3xl"></FaAlignJustify>
              )}
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div
          className={`${
            isOpenMenu
              ? 'fixed top-0 left-0 w-full transition-all ease-out duration-150'
              : 'hidden'
          } gap-12 space-y-4  mt-16 py-5 px-5 text-black bg-white md:hidden`}
        >
          <ul
            className={`text-lg space-y-4 font-bold 
           }
          `}
          >
            {navItems.map(({ id, path, link }) => (
              <li key={id}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'text-transparent bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text'
                      : ''
                  }
                  to={path}
                >
                  {link}>
                </NavLink>
              </li>
            ))}
          </ul>
          <div>
            <Link to="#jobApply">
              <button className="px-5 py-3 font-extrabold rounded-lg text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-base md:hidden">
                Star Applying
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
