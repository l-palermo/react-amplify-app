/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCollection = /* GraphQL */ `
  query GetCollection($id: ID!) {
    getCollection(id: $id) {
      id
      name
      gifs {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCollections = /* GraphQL */ `
  query ListCollections(
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getGif = /* GraphQL */ `
  query GetGif($id: ID!) {
    getGif(id: $id) {
      id
      title
      gifUrl
      copyUrl
      gifName
      collectionID
      collection {
        id
        name
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listGifs = /* GraphQL */ `
  query ListGifs(
    $filter: ModelGifFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGifs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        gifUrl
        copyUrl
        gifName
        collectionID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
