import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './page-content-layout.module.css';
import Container from '../../../components/container';
import CardsLayout from '../../../components/cards-layout';
import Text from '../../../components/text';
import CardWithHeader from '../card-with-header';
import useIO from '../../../helpers/hooks/useIO';

const PageContentWrapper = ({ gifs, pageTitle, dataId }) => {
    const useIOoptions = { threshold: 0.25, root: null };

    const [entries, setElements, observer] = useIO(useIOoptions);

    useEffect(() => {
        let img = Array.from(document.querySelectorAll('[data-qa="card-image"]'));
        setElements(img);
    }, [gifs]);

    useEffect(() => {
        entries &&
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    observer.unobserve(lazyImage);
                }
            });
    }, [entries, observer]);

    return (
        <Container dataId={dataId}>
            <div className={styles.textSpacing}>
                <Text dataId={`${dataId}-title`} tag={Text.tags.H1}>
                    {pageTitle}
                </Text>
            </div>
            <CardsLayout dataId={`${dataId}-cards-layout`} ariaLabel="group, gif images">
                {gifs.map(({ webpUrl, gfyId, title, max2mbGif }) => (
                    <CardWithHeader
                        key={gfyId}
                        dataId={`${dataId}-card-with-header`}
                        isAdd
                        copyUrl={max2mbGif}
                        imageUrl={webpUrl}
                        title={title}
                        imageAlt="gif"
                    />
                ))}
            </CardsLayout>
        </Container>
    );
};

PageContentWrapper.propTypes = {
    dataId: PropTypes.string,
    gifs: PropTypes.arrayOf(
        PropTypes.shape({
            webpUrl: PropTypes.string.isRequired,
            gfyId: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            max2mbGif: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    pageTitle: PropTypes.string.isRequired,
};

PageContentWrapper.defaultProps = {
    dataId: '',
};

export default PageContentWrapper;
