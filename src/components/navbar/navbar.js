import React from 'react';
import PropTypes from 'prop-types';

import styles from './navbar.module.css';
import Container from '../container';
import SearchInput from './components/search-input';
import MenuItem from './components/menu-item';
import signOut from '../../helpers/crud/sign-out';
import LogOutIcon from '../../assets/log-out/log-out.svg';
import PersonIcon from '../../assets/person/person.svg';

const Navbar = ({ userName }) => {
  return (
    <div data-qa="navbar" className={styles.navbar}>
      <Container>
        <div data-qa="navbar-layout" className={styles.navbarLayout}>
          <div data-qa="logo" className={styles.logo}>CATURDAY</div>
          <div className={styles.buttons}>
            <SearchInput />
            <MenuItem Icon={PersonIcon} hasMarginRight name={userName} onClick={() => {}} />
            <MenuItem Icon={LogOutIcon} name="Log out" onClick={() => signOut()} />
          </div>
        </div>
      </Container>
    </div>
  );
};

Navbar.propTypes = {
  userName: PropTypes.string,
};

Navbar.defaultProps = {
  userName: 'My account',
};

export default Navbar;
