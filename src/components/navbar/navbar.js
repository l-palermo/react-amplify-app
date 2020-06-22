import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import styles from './navbar.module.css';
import Container from '../container';
import InputField from '../../components/input-field';
import MenuItem from '../menu-item';
import Logo from '../logo';
import LogOutIcon from '../../assets/log-out/log-out.svg';
import CollectionIcon from '../../assets/collection/collection.svg';
import SearchIcon from '../../assets/search/search.svg';
import ArrowRightIcon from '../../assets/arrow-right/arrow-right.svg';
import { UserContext } from '../../helpers/user-context/user-context';

const Navbar = ({ logOut }) => {
    const history = useHistory();
    const [isVisible, setIsVisible] = useState(false);
    const [searchItem, setSearchItem] = useState('');

    const { setSearchValue } = useContext(UserContext);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setSearchValue(searchItem);
            setSearchItem('');
            history.push('/search');
        }
    };

    return (
        <div data-qa="navbar" className={styles.navbar}>
            <Container>
                <div data-qa="navbar-layout" className={styles.navbarLayout}>
                    <Logo path="/">CATURDAY</Logo>
                    <div className={styles.buttons}>
                        {isVisible ? (
                            <InputField
                                value={searchItem}
                                onKeyPress={handleKeyPress}
                                placeholder="Search..."
                                onChange={setSearchItem}
                                ButtonIcon={
                                    <MenuItem
                                        dataId="arrow-close-button"
                                        Icon={ArrowRightIcon}
                                        name="Close"
                                        hasCircle={false}
                                        onClick={() => setIsVisible(false)}
                                    />
                                }
                            />
                        ) : (
                            <MenuItem
                                dataId="search-button"
                                Icon={SearchIcon}
                                hasPaddingRight
                                name="Search"
                                onClick={() => setIsVisible(true)}
                            />
                        )}
                        <MenuItem
                            dataId="collection-button"
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
        </div>
    );
};

Navbar.propTypes = {
    logOut: PropTypes.func.isRequired,
};

export default Navbar;
