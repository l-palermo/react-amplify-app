import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CollectionCard from '../../../../components/collection-card';
import MenuItem from '../../../../components/menu-item';
import TrashIcon from '../../../../assets/trash/trash.svg';
import Confirmation from '../../../../components/confirmation/confirmation';

const CollectionCardWithHeader = ({ id, path, name, onDelete }) => {
    const [isConfirmation, setIsConfirmation] = useState(false);
    return (
        <CollectionCard path={path} collectionId={id} name={name}>
            <MenuItem
                dataId="delete-button"
                Icon={TrashIcon}
                name="Delete"
                isHeaderItem
                hasPaddingRight
                isInverted
                onClick={() => {
                    setIsConfirmation(!isConfirmation);
                }}
            />
            {isConfirmation && (
                <Confirmation
                    confirmAriaLabel="Yes"
                    denyAriaLabel="No"
                    onConfirmClick={() => {
                        onDelete(id);
                        setIsConfirmation(false);
                    }}
                    onDenyClick={() => {
                        setIsConfirmation(false);
                    }}
                />
            )}
        </CollectionCard>
    );
};

CollectionCardWithHeader.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
};

export default CollectionCardWithHeader;
