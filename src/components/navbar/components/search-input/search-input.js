import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './search-input.module.css';
import SearchIcon from '../../../../assets/search/search.svg';
import ArrowRightIcon from '../../../../assets/arrow-right/arrow-right.svg';
import MenuItem from '../menu-item/';
import { UserContext } from '../../../../helpers/user-context/user-context';

const SearchInput = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchItem, setSearchItem] = useState('');
  const history = useHistory();

  const { setSearchValue } = useContext(UserContext);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setSearchValue(searchItem);
      setSearchItem('');
      history.push('/search');
    }
  };

  return isVisible ? (
    <div className={styles.searchInput} data-qa="search-input">
      <input
        className={styles.input}
        type="text"
        value={searchItem}
        placeholder="Search..."
        onChange={(e) => setSearchItem(e.target.value)}
        onKeyPress={(e) => handleKeyPress(e)}
      />
      <MenuItem Icon={ArrowRightIcon} name="Close" hasCircle={false} onClick={() => setIsVisible(false)} />
    </div>
  ) : (
    <MenuItem Icon={SearchIcon} hasMarginRight name="Search" onClick={() => setIsVisible(true)} />
  );
};

export default SearchInput;
