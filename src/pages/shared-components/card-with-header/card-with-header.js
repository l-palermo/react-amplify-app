import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from '../../../components/card';
import MenuItem from '../../../components/menu-item';
import DropdownList from '../../../components/dropdown-list';
import copyIcon from '../../../assets/copy/copy.svg';
import checkIcon from '../../../assets/check/check.svg';
import textIcon from '../../../assets/title/title.svg';
import plusIcon from '../../../assets/plus/plus.svg';
import trashIcon from '../../../assets/trash/trash.svg';
import { gifCreate, gifDelete } from './lib/queries/gif-queries';
import { collectionList } from './lib/queries/collection-queries';

const CardWithHeader = ({
    isAdd,
    isDelete,
    imageUrl,
    imageAlt,
    dataId,
    title,
    gifId,
    onDelete,
}) => {
    const [isCopied, setIsCopied] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [items, setItems] = useState([]);

    const copytoClipboard = () => {
        navigator.clipboard.writeText(imageUrl);
        setIsCopied(true);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsCopied(false);
        }, 700);
        return () => clearTimeout(timer);
    }, [isCopied]);

    return (
        <Card imageUrl={imageUrl} imageAlt={imageAlt} dataId={dataId}>
            <MenuItem
                dataId="card-copy-button"
                Icon={isCopied ? checkIcon : copyIcon}
                onClick={copytoClipboard}
                name="Copy"
                hasPaddingRight
                isHeaderItem
            />
            <MenuItem
                dataId="card-name-button"
                Icon={textIcon}
                name={title}
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
                <DropdownList>
                    {items.map(({ id, name }) => {
                        const input = {
                            title: title,
                            gifUrl: imageUrl,
                            gifName: imageAlt,
                            collectionID: id,
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
            )}
        </Card>
    );
};

CardWithHeader.propTypes = {
    dataId: PropTypes.string,
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
