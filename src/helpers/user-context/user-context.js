import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [searchValue, setValue] = useState('');

    const setSearchValue = (value) => {
        setValue(value);
    };

    return (
        <UserContext.Provider
            value={{
                searchValue,
                setSearchValue,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
