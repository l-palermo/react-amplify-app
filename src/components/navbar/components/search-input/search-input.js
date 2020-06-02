import React, { useState } from 'react';

import styles from './search-input.module.css';
import SearchIcon from '../../../../assets/search/search.svg';
import ArrowRightIcon from '../../../../assets/arrow-right/arrow-right.svg';
import MenuItem from '../menu-item/';

const SearchInput = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchItem, setSearchItem] = useState('');

  return isVisible ? (
    <div data-qa="search-input" className={styles.searchInput}>
      <input className={styles.input} type="text" value={searchItem} placeholder="Search.." onChange={(e) => setSearchItem(e.target.value)} />
      <MenuItem Icon={ArrowRightIcon} name="Close" hasCircle={false} onClick={() => setIsVisible(false)} />
    </div>
  ) : (
    <MenuItem Icon={SearchIcon} hasMarginRight name="Search" onClick={() => setIsVisible(true)} />
  );
};

export default SearchInput;
