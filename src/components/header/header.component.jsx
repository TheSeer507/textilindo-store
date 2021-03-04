import React from 'react';

import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/Logo.svg';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          TIENDA
        </Link>
        <Link className='option' to='/contacto'>
          CONTACTENOS
        </Link>
        <Link className='option' to='/info'>
          QUIENES SOMOS
        </Link>
        {/* {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )} */}
      </div>
    </div>
  );
  
  export default Header;