import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MenuItem from '../../../../../components/menu-item';
import InputField from '../../../../../components/input-field';
import SearchIcon from '../../../../../assets/search/search.svg';
import ArrowRightIcon from '../../../../../assets/arrow-right/arrow-right.svg';

const SearchInput = ({ onSearch }) => {
    const [searchItem, setSearchItem] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    return isVisible ? (
        <InputField
            value={searchItem}
            onKeyPress={(e) => e.key === 'Enter' && (setSearchItem(''), onSearch(searchItem))}
            placeholder="Search..."
            onChange={(e) => setSearchItem(e.target.value)}
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
    );
};

SearchInput.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchInput;
