import { API, graphqlOperation } from 'aws-amplify';
import { listGifs } from '../../../../graphql/queries';

export const gifsList = async (collectionId) => {
    const list = await API.graphql(
        graphqlOperation(listGifs, { filter: { collectionID: { eq: collectionId } } })
    );
    const gifs = list.data.listGifs.items;
    return gifs;
};
