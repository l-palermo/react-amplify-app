import { API, graphqlOperation } from 'aws-amplify';
import { listCollections } from '../../../../graphql/queries';
import { deleteCollection, createCollection } from '../../../../graphql/mutations';

export const collectionList = async (setCollections) => {
    try {
        const collections = await API.graphql(graphqlOperation(listCollections));
        setCollections(collections.data.listCollections.items);
    } catch (err) {
        console.log('There is an error', err);
    }
};

export const collectionDelete = async (id, collectionList, setCollections) => {
    try {
        await API.graphql(graphqlOperation(deleteCollection, { input: { id } }));
        collectionList(setCollections);
    } catch (err) {
        console.log('delete error', err);
    }
};

export const collectionCreate = async (collectionName, collectionList, setCollections) => {
    try {
        await API.graphql(graphqlOperation(createCollection, { input: { name: collectionName } }));
        collectionList(setCollections);
    } catch (err) {
        console.log('this is the error', err);
    }
};
