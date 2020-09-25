import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './card-with-header.module.css';
import Card from '../../../components/card';
import MenuItem from '../../../components/menu-item';
import DropdownList from '../../../components/dropdown-list';
import textIcon from '../../../assets/title/title.svg';
import plusIcon from '../../../assets/plus/plus.svg';
import trashIcon from '../../../assets/trash/trash.svg';
import { gifCreate, gifDelete } from './lib/queries/gif-queries';
import { collectionList } from './lib/queries/collection-queries';
import detectBrowser from './lib/helpers/detect-browser';

const CardWithHeader = ({
    isAdd,
    isDelete,
    imageUrl,
    imageAlt,
    dataId,
    title,
    gifId,
    onDelete,
    copyUrl,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [items, setItems] = useState([]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(copyUrl);
    };

    const imageUrlAdapter = () => {
        if (detectBrowser() === 'Safari') {
            return imageUrl.replace('.webp', '-small.gif');
        }
        return imageUrl;
    };

    return (
        <Card
            imageUrl={imageUrlAdapter()}
            imageAlt={imageAlt}
            dataId={dataId}
            headerAriaLabel="group, control buttons"
            onClick={copyToClipboard}
            clickConfirmationText="Copied!"
        >
            <MenuItem
                dataId="card-name-button"
                Icon={textIcon}
                name={`Title: ${title}`}
                isHeaderItem
                hasPaddingRight
            />

            {isDelete && (
                <MenuItem
                    dataId="delete-from-collection"
                    Icon={trashIcon}
                    name="Delete"
                    isHeaderItem
                    hasPaddingRight
                    onClick={async () => {
                        await gifDelete({ id: gifId });
                        onDelete();
                    }}
                />
            )}
            {isAdd && (
                <MenuItem
                    dataId="add-to-collection-button"
                    Icon={plusIcon}
                    name="add to collection"
                    isHeaderItem
                    hasPaddingRight
                    onClick={() => {
                        setIsVisible(!isVisible);
                        collectionList().then((data) => setItems(data));
                    }}
                />
            )}

            {isVisible && (
                <div className={styles.dropdownList}>
                    <DropdownList>
                        {items.map(({ id, name }) => {
                            const input = {
                                title: title,
                                gifUrl: imageUrl,
                                gifName: imageAlt,
                                collectionID: id,
                                copyUrl: copyUrl,
                            };
                            return (
                                <DropdownList.Item
                                    key={id}
                                    name={name}
                                    onClick={() => {
                                        gifCreate(input);
                                        setIsVisible(!isVisible);
                                    }}
                                />
                            );
                        })}
                    </DropdownList>
                </div>
            )}
        </Card>
    );
};

CardWithHeader.propTypes = {
    dataId: PropTypes.string,
    copyUrl: PropTypes.string.isRequired,
    gifId: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    isAdd: PropTypes.bool,
    isDelete: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({})),
    onDelete: PropTypes.func,
    title: PropTypes.string.isRequired,
};

CardWithHeader.defaultProps = {
    dataId: '',
    gifId: '',
    isAdd: false,
    isDelete: false,
    onDelete: undefined,
};

export default CardWithHeader;
