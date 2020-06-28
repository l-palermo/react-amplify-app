import { API, graphqlOperation } from 'aws-amplify';
import { listCollections } from '../../../../graphql/queries';
import { deleteCollection, createCollection } from '../../../../graphql/mutations';

export const collectionList = async () => {
    const collections = await API.graphql(graphqlOperation(listCollections));
    const items = collections.data.listCollections.items;
    return items;
};

export const collectionDelete = async (id) => {
    await API.graphql(graphqlOperation(deleteCollection, { input: { id } }));
};

export const collectionCreate = async (collectionName) => {
    await API.graphql(graphqlOperation(createCollection, { input: { name: collectionName } }));
};
