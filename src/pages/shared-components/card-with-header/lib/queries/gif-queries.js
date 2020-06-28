import { API, graphqlOperation } from 'aws-amplify';
import { createGif, deleteGif } from '../../../../../graphql/mutations';

export const gifCreate = async (input) => {
    await API.graphql(graphqlOperation(createGif, { input: input }));
};
export const gifDelete = async (input) => {
    await API.graphql(graphqlOperation(deleteGif, { input: input }));
};
