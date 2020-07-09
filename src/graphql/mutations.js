/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCollection = /* GraphQL */ `
  mutation CreateCollection(
    $input: CreateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    createCollection(input: $input, condition: $condition) {
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
export const updateCollection = /* GraphQL */ `
  mutation UpdateCollection(
    $input: UpdateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    updateCollection(input: $input, condition: $condition) {
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
export const deleteCollection = /* GraphQL */ `
  mutation DeleteCollection(
    $input: DeleteCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    deleteCollection(input: $input, condition: $condition) {
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
export const createGif = /* GraphQL */ `
  mutation CreateGif(
    $input: CreateGifInput!
    $condition: ModelGifConditionInput
  ) {
    createGif(input: $input, condition: $condition) {
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
export const updateGif = /* GraphQL */ `
  mutation UpdateGif(
    $input: UpdateGifInput!
    $condition: ModelGifConditionInput
  ) {
    updateGif(input: $input, condition: $condition) {
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
export const deleteGif = /* GraphQL */ `
  mutation DeleteGif(
    $input: DeleteGifInput!
    $condition: ModelGifConditionInput
  ) {
    deleteGif(input: $input, condition: $condition) {
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
