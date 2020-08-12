/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCollection = /* GraphQL */ `
  subscription OnCreateCollection($owner: String) {
    onCreateCollection(owner: $owner) {
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
export const onUpdateCollection = /* GraphQL */ `
  subscription OnUpdateCollection($owner: String) {
    onUpdateCollection(owner: $owner) {
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
export const onDeleteCollection = /* GraphQL */ `
  subscription OnDeleteCollection($owner: String) {
    onDeleteCollection(owner: $owner) {
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
export const onCreateGif = /* GraphQL */ `
  subscription OnCreateGif($owner: String) {
    onCreateGif(owner: $owner) {
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
export const onUpdateGif = /* GraphQL */ `
  subscription OnUpdateGif($owner: String) {
    onUpdateGif(owner: $owner) {
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
export const onDeleteGif = /* GraphQL */ `
  subscription OnDeleteGif($owner: String) {
    onDeleteGif(owner: $owner) {
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
