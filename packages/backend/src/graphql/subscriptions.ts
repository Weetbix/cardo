// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      name
      messages {
        items {
          id
          message
          approved
        }
        nextToken
      }
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      name
      messages {
        items {
          id
          message
          approved
        }
        nextToken
      }
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      name
      messages {
        items {
          id
          message
          approved
        }
        nextToken
      }
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      message
      approved
      category {
        id
        name
        messages {
          nextToken
        }
      }
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      message
      approved
      category {
        id
        name
        messages {
          nextToken
        }
      }
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      message
      approved
      category {
        id
        name
        messages {
          nextToken
        }
      }
    }
  }
`;
