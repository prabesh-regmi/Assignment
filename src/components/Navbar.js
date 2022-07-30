
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import * as MdIcons from 'react-icons/md';


function Navbar() {


  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
        <div className='navbar info-wrap'>
        <img className={'logo'} src={require('../img/logo.jpg')}  alt='Img cannot load' />

        </div>
        <nav className={'nav-menu info-wrap'}>
          <ul className='nav-menu-items'>
          
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                    <MdIcons.MdArrowDropDown/>
                  </Link>
                  
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
