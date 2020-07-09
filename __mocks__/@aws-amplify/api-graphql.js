export const graphqlOperation = (query, variables = {}) => {
    return {
        query,
        variables,
    };
};

export class GraphQLAPIClass {
    constructor() {}

    configure() {}

    graphql(operation) {
        const query = operation.query;

        switch (typeof query === 'string') {
            case query.includes('ListCollections'):
                return {
                    data: {
                        listCollections: {
                            items: [
                                { id: 'test-id-1', name: 'collection one' },
                                { id: 'test-id-2', name: 'collection two' },
                            ],
                        },
                    },
                };
            case query.includes('CreateCollection'):
                return {};
            case query.includes('DeleteCollection'):
                return {};
            case query.includes('listGifs'):
                return {
                    data: {
                        listGifs: {
                            items: [
                                {
                                    id: 'test id',
                                    title: 'title',
                                    gifUrl: 'url',
                                    copyUrl: 'copyUrl',
                                    gifName: 'gif name',
                                    collectionID: 'test id',
                                },
                            ],
                        },
                    },
                };
            case query.includes('deleteGif'):
                return {};
            default:
                return Promise;
        }
    }
}
