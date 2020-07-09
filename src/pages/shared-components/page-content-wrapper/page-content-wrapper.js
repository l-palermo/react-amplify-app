import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

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
            <Text dataId={`${dataId}-title`} tag={Text.tags.H2}>
                {pageTitle}
            </Text>
            <CardsLayout dataId={`${dataId}-cards-layout`}>
                {gifs.map(({ webpUrl, gfyName, gfyId, title, gif100px }) => (
                    <CardWithHeader
                        key={gfyId}
                        dataId={`${dataId}-card-with-header`}
                        isAdd
                        copyUrl={gif100px}
                        imageUrl={webpUrl}
                        title={title}
                        imageAlt={gfyName}
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
            gfyName: PropTypes.string.isRequired,
            gfyId: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            gif100px: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    pageTitle: PropTypes.string.isRequired,
};

PageContentWrapper.defaultProps = {
    dataId: '',
};

export default PageContentWrapper;
