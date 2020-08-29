import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import styles from './navbar.module.css';
import Container from '../../../components/container';
import MenuItem from '../../../components/menu-item';
import Logo from '../../../components/logo';
import LogOutIcon from '../../../assets/log-out/log-out.svg';
import CollectionIcon from '../../../assets/collection/collection.svg';
import PawIcon from '../../../assets/paw/paw.svg';
import SearchInput from './components/search-input';
import { UserContext } from '../../../helpers/user-context/user-context';

const Navbar = ({ logOut }) => {
    const history = useHistory();

    const { setSearchValue } = useContext(UserContext);

    const handleSearch = (searchItem) => {
        setSearchValue(searchItem);
        history.push('/search');
    };

    return (
        <nav data-qa="navbar" className={styles.navbar}>
            <Container>
                <div data-qa="navbar-layout" className={styles.navbarLayout}>
                    <Logo
                        path="/"
                        text="CATURDAY"
                        icon={<MenuItem dataId="home-button" Icon={PawIcon} />}
                    />
                    <div className={styles.buttons}>
                        <SearchInput onSearch={handleSearch} />
                        <MenuItem
                            dataId="collections-button"
                            Icon={CollectionIcon}
                            name="Collections"
                            hasPaddingRight
                            onClick={() => {
                                history.push('/collections');
                            }}
                        />

                        <MenuItem
                            dataId="log-out-button"
                            Icon={LogOutIcon}
                            name="Log out"
                            onClick={logOut}
                            isAlignedRight
                        />
                    </div>
                </div>
            </Container>
        </nav>
    );
};

Navbar.propTypes = {
    logOut: PropTypes.func.isRequired,
};

export default Navbar;
