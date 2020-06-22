// const data = { listCollections: { items: [{ id: 'test-id-1' }, { id: 'test-id-2' }] } };

export const API = {
    graphql: (operation) => {
        switch (typeof operation === 'string') {
            case operation.includes('ListCollections'):
                return {
                    data: {
                        listCollections: { items: [{ id: 'test-id-1' }, { id: 'test-id-2' }] },
                    },
                };
            case operation.includes('CreateCollection'):
                return {
                    data: {
                        createCollection: {},
                    },
                };
            case operation.includes('DeleteCollection'):
                return {
                    data: {
                        deleteCollection: {},
                    },
                };
            default:
                return Promise;
        }
    },
};

export const graphqlOperation = (query) => query;
