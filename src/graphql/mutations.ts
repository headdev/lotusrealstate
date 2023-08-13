/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
export const createRental = /* GraphQL */ `
  mutation CreateRental(
    $input: CreateRentalInput!
    $condition: ModelRentalConditionInput
  ) {
    createRental(input: $input, condition: $condition) {
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
        amenities
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
        username
        name
        email
        address
        idType
        idNumber
        images
        perfilfoto
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
export const updateRental = /* GraphQL */ `
  mutation UpdateRental(
    $input: UpdateRentalInput!
    $condition: ModelRentalConditionInput
  ) {
    updateRental(input: $input, condition: $condition) {
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
        amenities
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
        username
        name
        email
        address
        idType
        idNumber
        images
        perfilfoto
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
export const deleteRental = /* GraphQL */ `
  mutation DeleteRental(
    $input: DeleteRentalInput!
    $condition: ModelRentalConditionInput
  ) {
    deleteRental(input: $input, condition: $condition) {
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
        amenities
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
        username
        name
        email
        address
        idType
        idNumber
        images
        perfilfoto
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
export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
      id
      title
      shortDescription
      longDescription
      type
      price
      rentPerMonth
      rentPerDay
      amenities
      owner {
        id
        username
        name
        email
        address
        idType
        idNumber
        images
        perfilfoto
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
  }
`;
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
      id
      title
      shortDescription
      longDescription
      type
      price
      rentPerMonth
      rentPerDay
      amenities
      owner {
        id
        username
        name
        email
        address
        idType
        idNumber
        images
        perfilfoto
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
  }
`;
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
      id
      title
      shortDescription
      longDescription
      type
      price
      rentPerMonth
      rentPerDay
      amenities
      owner {
        id
        username
        name
        email
        address
        idType
        idNumber
        images
        perfilfoto
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
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      name
      email
      address
      idType
      idNumber
      images
      perfilfoto
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
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      name
      email
      address
      idType
      idNumber
      images
      perfilfoto
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
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      name
      email
      address
      idType
      idNumber
      images
      perfilfoto
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
  }
`;
export const createAgent = /* GraphQL */ `
  mutation CreateAgent(
    $input: CreateAgentInput!
    $condition: ModelAgentConditionInput
  ) {
    createAgent(input: $input, condition: $condition) {
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
  }
`;
export const updateAgent = /* GraphQL */ `
  mutation UpdateAgent(
    $input: UpdateAgentInput!
    $condition: ModelAgentConditionInput
  ) {
    updateAgent(input: $input, condition: $condition) {
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
  }
`;
export const deleteAgent = /* GraphQL */ `
  mutation DeleteAgent(
    $input: DeleteAgentInput!
    $condition: ModelAgentConditionInput
  ) {
    deleteAgent(input: $input, condition: $condition) {
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
  }
`;
