import React from 'react';
import PropTypes from 'prop-types';

import styles from './navbar.module.css';
import Container from '../container';
import SearchInput from '../search-input';
import MenuItem from '../menu-item';
import Logo from '../logo';
import LogOutIcon from '../../assets/log-out/log-out.svg';

const Navbar = ({ logOut }) => {
  return (
    <div data-qa="navbar" className={styles.navbar}>
      <Container>
        <div data-qa="navbar-layout" className={styles.navbarLayout}>
          <Logo path="/">CATURDAY</Logo>
          <div className={styles.buttons}>
            <SearchInput />
            <MenuItem dataId="log-out-button" Icon={LogOutIcon} name="Log out" onClick={logOut} />
          </div>
        </div>
      </Container>
    </div>
  );
};

Navbar.propTypes = {
  logOut: PropTypes.func.isRequired,
};

export default Navbar;
