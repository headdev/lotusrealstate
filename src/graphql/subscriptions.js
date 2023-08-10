/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onCreateLocation(filter: $filter) {
      id
      address
      lat
      lon
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onUpdateLocation(filter: $filter) {
      id
      address
      lat
      lon
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation($filter: ModelSubscriptionLocationFilterInput) {
    onDeleteLocation(filter: $filter) {
      id
      address
      lat
      lon
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateRental = /* GraphQL */ `
  subscription OnCreateRental($filter: ModelSubscriptionRentalFilterInput) {
    onCreateRental(filter: $filter) {
      id
      property {
        id
        title
        shortDescription
        longDescription
        type
        price
        rentPerMonth
        rentPerDay
        owner {
          id
          name
          email
          address
          createdAt
          updatedAt
          owner
          __typename
        }
        agent {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        mainImage
        images
        location {
          id
          address
          lat
          lon
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        userBoughtPropertiesId
        agentPropertiesId
        propertyOwnerId
        propertyAgentId
        propertyLocationId
        __typename
      }
      user {
        id
        name
        email
        address
        boughtProperties {
          nextToken
          __typename
        }
        rentedProperties {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nights
      paidAmount
      createdAt
      updatedAt
      userRentedPropertiesId
      rentalPropertyId
      rentalUserId
      __typename
    }
  }
`;
export const onUpdateRental = /* GraphQL */ `
  subscription OnUpdateRental($filter: ModelSubscriptionRentalFilterInput) {
    onUpdateRental(filter: $filter) {
      id
      property {
        id
        title
        shortDescription
        longDescription
        type
        price
        rentPerMonth
        rentPerDay
        owner {
          id
          name
          email
          address
          createdAt
          updatedAt
          owner
          __typename
        }
        agent {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        mainImage
        images
        location {
          id
          address
          lat
          lon
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        userBoughtPropertiesId
        agentPropertiesId
        propertyOwnerId
        propertyAgentId
        propertyLocationId
        __typename
      }
      user {
        id
        name
        email
        address
        boughtProperties {
          nextToken
          __typename
        }
        rentedProperties {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nights
      paidAmount
      createdAt
      updatedAt
      userRentedPropertiesId
      rentalPropertyId
      rentalUserId
      __typename
    }
  }
`;
export const onDeleteRental = /* GraphQL */ `
  subscription OnDeleteRental($filter: ModelSubscriptionRentalFilterInput) {
    onDeleteRental(filter: $filter) {
      id
      property {
        id
        title
        shortDescription
        longDescription
        type
        price
        rentPerMonth
        rentPerDay
        owner {
          id
          name
          email
          address
          createdAt
          updatedAt
          owner
          __typename
        }
        agent {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        mainImage
        images
        location {
          id
          address
          lat
          lon
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        userBoughtPropertiesId
        agentPropertiesId
        propertyOwnerId
        propertyAgentId
        propertyLocationId
        __typename
      }
      user {
        id
        name
        email
        address
        boughtProperties {
          nextToken
          __typename
        }
        rentedProperties {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nights
      paidAmount
      createdAt
      updatedAt
      userRentedPropertiesId
      rentalPropertyId
      rentalUserId
      __typename
    }
  }
`;
export const onCreateProperty = /* GraphQL */ `
  subscription OnCreateProperty(
    $filter: ModelSubscriptionPropertyFilterInput
    $owner: String
  ) {
    onCreateProperty(filter: $filter, owner: $owner) {
      id
      title
      shortDescription
      longDescription
      type
      price
      rentPerMonth
      rentPerDay
      owner {
        id
        name
        email
        address
        boughtProperties {
          nextToken
          __typename
        }
        rentedProperties {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      agent {
        id
        name
        properties {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      mainImage
      images
      location {
        id
        address
        lat
        lon
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userBoughtPropertiesId
      agentPropertiesId
      propertyOwnerId
      propertyAgentId
      propertyLocationId
      __typename
    }
  }
`;
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty(
    $filter: ModelSubscriptionPropertyFilterInput
    $owner: String
  ) {
    onUpdateProperty(filter: $filter, owner: $owner) {
      id
      title
      shortDescription
      longDescription
      type
      price
      rentPerMonth
      rentPerDay
      owner {
        id
        name
        email
        address
        boughtProperties {
          nextToken
          __typename
        }
        rentedProperties {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      agent {
        id
        name
        properties {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      mainImage
      images
      location {
        id
        address
        lat
        lon
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userBoughtPropertiesId
      agentPropertiesId
      propertyOwnerId
      propertyAgentId
      propertyLocationId
      __typename
    }
  }
`;
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty(
    $filter: ModelSubscriptionPropertyFilterInput
    $owner: String
  ) {
    onDeleteProperty(filter: $filter, owner: $owner) {
      id
      title
      shortDescription
      longDescription
      type
      price
      rentPerMonth
      rentPerDay
      owner {
        id
        name
        email
        address
        boughtProperties {
          nextToken
          __typename
        }
        rentedProperties {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      agent {
        id
        name
        properties {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      mainImage
      images
      location {
        id
        address
        lat
        lon
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userBoughtPropertiesId
      agentPropertiesId
      propertyOwnerId
      propertyAgentId
      propertyLocationId
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
      id
      name
      email
      address
      boughtProperties {
        items {
          id
          title
          shortDescription
          longDescription
          type
          price
          rentPerMonth
          rentPerDay
          mainImage
          images
          createdAt
          updatedAt
          userBoughtPropertiesId
          agentPropertiesId
          propertyOwnerId
          propertyAgentId
          propertyLocationId
          __typename
        }
        nextToken
        __typename
      }
      rentedProperties {
        items {
          id
          nights
          paidAmount
          createdAt
          updatedAt
          userRentedPropertiesId
          rentalPropertyId
          rentalUserId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
      id
      name
      email
      address
      boughtProperties {
        items {
          id
          title
          shortDescription
          longDescription
          type
          price
          rentPerMonth
          rentPerDay
          mainImage
          images
          createdAt
          updatedAt
          userBoughtPropertiesId
          agentPropertiesId
          propertyOwnerId
          propertyAgentId
          propertyLocationId
          __typename
        }
        nextToken
        __typename
      }
      rentedProperties {
        items {
          id
          nights
          paidAmount
          createdAt
          updatedAt
          userRentedPropertiesId
          rentalPropertyId
          rentalUserId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
      id
      name
      email
      address
      boughtProperties {
        items {
          id
          title
          shortDescription
          longDescription
          type
          price
          rentPerMonth
          rentPerDay
          mainImage
          images
          createdAt
          updatedAt
          userBoughtPropertiesId
          agentPropertiesId
          propertyOwnerId
          propertyAgentId
          propertyLocationId
          __typename
        }
        nextToken
        __typename
      }
      rentedProperties {
        items {
          id
          nights
          paidAmount
          createdAt
          updatedAt
          userRentedPropertiesId
          rentalPropertyId
          rentalUserId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateAgent = /* GraphQL */ `
  subscription OnCreateAgent($filter: ModelSubscriptionAgentFilterInput) {
    onCreateAgent(filter: $filter) {
      id
      name
      properties {
        items {
          id
          title
          shortDescription
          longDescription
          type
          price
          rentPerMonth
          rentPerDay
          mainImage
          images
          createdAt
          updatedAt
          userBoughtPropertiesId
          agentPropertiesId
          propertyOwnerId
          propertyAgentId
          propertyLocationId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateAgent = /* GraphQL */ `
  subscription OnUpdateAgent($filter: ModelSubscriptionAgentFilterInput) {
    onUpdateAgent(filter: $filter) {
      id
      name
      properties {
        items {
          id
          title
          shortDescription
          longDescription
          type
          price
          rentPerMonth
          rentPerDay
          mainImage
          images
          createdAt
          updatedAt
          userBoughtPropertiesId
          agentPropertiesId
          propertyOwnerId
          propertyAgentId
          propertyLocationId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteAgent = /* GraphQL */ `
  subscription OnDeleteAgent($filter: ModelSubscriptionAgentFilterInput) {
    onDeleteAgent(filter: $filter) {
      id
      name
      properties {
        items {
          id
          title
          shortDescription
          longDescription
          type
          price
          rentPerMonth
          rentPerDay
          mainImage
          images
          createdAt
          updatedAt
          userBoughtPropertiesId
          agentPropertiesId
          propertyOwnerId
          propertyAgentId
          propertyLocationId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
