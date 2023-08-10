/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        address
        lat
        lon
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRental = /* GraphQL */ `
  query GetRental($id: ID!) {
    getRental(id: $id) {
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
export const listRentals = /* GraphQL */ `
  query ListRentals(
    $filter: ModelRentalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRentals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        user {
          id
          name
          email
          address
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
      nextToken
      __typename
    }
  }
`;
export const getProperty = /* GraphQL */ `
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
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
export const listProperties = /* GraphQL */ `
  query ListProperties(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProperties(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getAgent = /* GraphQL */ `
  query GetAgent($id: ID!) {
    getAgent(id: $id) {
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
export const listAgents = /* GraphQL */ `
  query ListAgents(
    $filter: ModelAgentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAgents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
