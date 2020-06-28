import { API, graphqlOperation } from 'aws-amplify';
import { listCollections } from '../../../../../graphql/queries';

export const collectionList = async () => {
    const collections = await API.graphql(graphqlOperation(listCollections));
    const items = collections.data.listCollections.items;
    return items;
};
