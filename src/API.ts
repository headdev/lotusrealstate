/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLocationInput = {
  id?: string | null,
  address: string,
  lat: number,
  lon: number,
};

export type ModelLocationConditionInput = {
  address?: ModelStringInput | null,
  lat?: ModelFloatInput | null,
  lon?: ModelFloatInput | null,
  and?: Array< ModelLocationConditionInput | null > | null,
  or?: Array< ModelLocationConditionInput | null > | null,
  not?: ModelLocationConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Location = {
  __typename: "Location",
  id: string,
  address: string,
  lat: number,
  lon: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLocationInput = {
  id: string,
  address?: string | null,
  lat?: number | null,
  lon?: number | null,
};

export type DeleteLocationInput = {
  id: string,
};

export type CreateRentalInput = {
  id?: string | null,
  nights: number,
  paidAmount: number,
  createdAt?: string | null,
  updatedAt?: string | null,
  userRentedPropertiesId?: string | null,
  rentalPropertyId?: string | null,
  rentalUserId?: string | null,
};

export type ModelRentalConditionInput = {
  nights?: ModelIntInput | null,
  paidAmount?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRentalConditionInput | null > | null,
  or?: Array< ModelRentalConditionInput | null > | null,
  not?: ModelRentalConditionInput | null,
  userRentedPropertiesId?: ModelIDInput | null,
  rentalPropertyId?: ModelIDInput | null,
  rentalUserId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Rental = {
  __typename: "Rental",
  id: string,
  property?: Property | null,
  user?: User | null,
  nights: number,
  paidAmount: number,
  createdAt: string,
  updatedAt?: string | null,
  userRentedPropertiesId?: string | null,
  rentalPropertyId?: string | null,
  rentalUserId?: string | null,
};

export type Property = {
  __typename: "Property",
  id: string,
  title: string,
  shortDescription: string,
  longDescription?: string | null,
  type: PropertyType,
  price: number,
  rentPerMonth?: number | null,
  rentPerDay?: number | null,
  amenities?: Array< amenities | null > | null,
  owner?: User | null,
  agent?: Agent | null,
  mainImage?: string | null,
  images?: Array< string | null > | null,
  location?: Location | null,
  createdAt: string,
  updatedAt?: string | null,
  userBoughtPropertiesId?: string | null,
  agentPropertiesId?: string | null,
  propertyOwnerId?: string | null,
  propertyAgentId?: string | null,
  propertyLocationId?: string | null,
};

export enum PropertyType {
  HOUSE = "HOUSE",
  CABIN = "CABIN",
  RANCH = "RANCH",
  APARTMENT = "APARTMENT",
}


export enum amenities {
  gym = "gym",
  piscina = "piscina",
  roof = "roof",
  loby = "loby",
  ascensor = "ascensor",
  vista = "vista",
  al = "al",
  mar = "mar",
}


export type User = {
  __typename: "User",
  id: string,
  username?: string | null,
  name: string,
  email: string,
  address?: string | null,
  idType?: Array< idType | null > | null,
  idNumber?: string | null,
  images?: string | null,
  perfilfoto?: string | null,
  boughtProperties?: ModelPropertyConnection | null,
  rentedProperties?: ModelRentalConnection | null,
  createdAt: string,
  updatedAt?: string | null,
  owner?: string | null,
};

export enum idType {
  cedula = "cedula",
  pasaporte = "pasaporte",
  licencia = "licencia",
  de = "de",
  conducir = "conducir",
}


export type ModelPropertyConnection = {
  __typename: "ModelPropertyConnection",
  items:  Array<Property | null >,
  nextToken?: string | null,
};

export type ModelRentalConnection = {
  __typename: "ModelRentalConnection",
  items:  Array<Rental | null >,
  nextToken?: string | null,
};

export type Agent = {
  __typename: "Agent",
  id: string,
  name: string,
  properties?: ModelPropertyConnection | null,
  createdAt: string,
  updatedAt?: string | null,
};

export type UpdateRentalInput = {
  id: string,
  nights?: number | null,
  paidAmount?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  userRentedPropertiesId?: string | null,
  rentalPropertyId?: string | null,
  rentalUserId?: string | null,
};

export type DeleteRentalInput = {
  id: string,
};

export type CreatePropertyInput = {
  id?: string | null,
  title: string,
  shortDescription: string,
  longDescription?: string | null,
  type: PropertyType,
  price: number,
  rentPerMonth?: number | null,
  rentPerDay?: number | null,
  amenities?: Array< amenities | null > | null,
  mainImage?: string | null,
  images?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  userBoughtPropertiesId?: string | null,
  agentPropertiesId?: string | null,
  propertyOwnerId?: string | null,
  propertyAgentId?: string | null,
  propertyLocationId?: string | null,
};

export type ModelPropertyConditionInput = {
  title?: ModelStringInput | null,
  shortDescription?: ModelStringInput | null,
  longDescription?: ModelStringInput | null,
  type?: ModelPropertyTypeInput | null,
  price?: ModelFloatInput | null,
  rentPerMonth?: ModelFloatInput | null,
  rentPerDay?: ModelFloatInput | null,
  amenities?: ModelamenitiesListInput | null,
  mainImage?: ModelStringInput | null,
  images?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPropertyConditionInput | null > | null,
  or?: Array< ModelPropertyConditionInput | null > | null,
  not?: ModelPropertyConditionInput | null,
  userBoughtPropertiesId?: ModelIDInput | null,
  agentPropertiesId?: ModelIDInput | null,
  propertyOwnerId?: ModelIDInput | null,
  propertyAgentId?: ModelIDInput | null,
  propertyLocationId?: ModelIDInput | null,
};

export type ModelPropertyTypeInput = {
  eq?: PropertyType | null,
  ne?: PropertyType | null,
};

export type ModelamenitiesListInput = {
  eq?: Array< amenities | null > | null,
  ne?: Array< amenities | null > | null,
  contains?: amenities | null,
  notContains?: amenities | null,
};

export type UpdatePropertyInput = {
  id: string,
  title?: string | null,
  shortDescription?: string | null,
  longDescription?: string | null,
  type?: PropertyType | null,
  price?: number | null,
  rentPerMonth?: number | null,
  rentPerDay?: number | null,
  amenities?: Array< amenities | null > | null,
  mainImage?: string | null,
  images?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  userBoughtPropertiesId?: string | null,
  agentPropertiesId?: string | null,
  propertyOwnerId?: string | null,
  propertyAgentId?: string | null,
  propertyLocationId?: string | null,
};

export type DeletePropertyInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  username?: string | null,
  name: string,
  email: string,
  address?: string | null,
  idType?: Array< idType | null > | null,
  idNumber?: string | null,
  images?: string | null,
  perfilfoto?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  address?: ModelStringInput | null,
  idType?: ModelidTypeListInput | null,
  idNumber?: ModelStringInput | null,
  images?: ModelStringInput | null,
  perfilfoto?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelidTypeListInput = {
  eq?: Array< idType | null > | null,
  ne?: Array< idType | null > | null,
  contains?: idType | null,
  notContains?: idType | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  name?: string | null,
  email?: string | null,
  address?: string | null,
  idType?: Array< idType | null > | null,
  idNumber?: string | null,
  images?: string | null,
  perfilfoto?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateAgentInput = {
  id?: string | null,
  name: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelAgentConditionInput = {
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAgentConditionInput | null > | null,
  or?: Array< ModelAgentConditionInput | null > | null,
  not?: ModelAgentConditionInput | null,
};

export type UpdateAgentInput = {
  id: string,
  name?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteAgentInput = {
  id: string,
};

export type ModelLocationFilterInput = {
  id?: ModelIDInput | null,
  address?: ModelStringInput | null,
  lat?: ModelFloatInput | null,
  lon?: ModelFloatInput | null,
  and?: Array< ModelLocationFilterInput | null > | null,
  or?: Array< ModelLocationFilterInput | null > | null,
  not?: ModelLocationFilterInput | null,
};

export type ModelLocationConnection = {
  __typename: "ModelLocationConnection",
  items:  Array<Location | null >,
  nextToken?: string | null,
};

export type ModelRentalFilterInput = {
  id?: ModelIDInput | null,
  nights?: ModelIntInput | null,
  paidAmount?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRentalFilterInput | null > | null,
  or?: Array< ModelRentalFilterInput | null > | null,
  not?: ModelRentalFilterInput | null,
  userRentedPropertiesId?: ModelIDInput | null,
  rentalPropertyId?: ModelIDInput | null,
  rentalUserId?: ModelIDInput | null,
};

export type ModelPropertyFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  shortDescription?: ModelStringInput | null,
  longDescription?: ModelStringInput | null,
  type?: ModelPropertyTypeInput | null,
  price?: ModelFloatInput | null,
  rentPerMonth?: ModelFloatInput | null,
  rentPerDay?: ModelFloatInput | null,
  amenities?: ModelamenitiesListInput | null,
  mainImage?: ModelStringInput | null,
  images?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPropertyFilterInput | null > | null,
  or?: Array< ModelPropertyFilterInput | null > | null,
  not?: ModelPropertyFilterInput | null,
  userBoughtPropertiesId?: ModelIDInput | null,
  agentPropertiesId?: ModelIDInput | null,
  propertyOwnerId?: ModelIDInput | null,
  propertyAgentId?: ModelIDInput | null,
  propertyLocationId?: ModelIDInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  address?: ModelStringInput | null,
  idType?: ModelidTypeListInput | null,
  idNumber?: ModelStringInput | null,
  images?: ModelStringInput | null,
  perfilfoto?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelAgentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAgentFilterInput | null > | null,
  or?: Array< ModelAgentFilterInput | null > | null,
  not?: ModelAgentFilterInput | null,
};

export type ModelAgentConnection = {
  __typename: "ModelAgentConnection",
  items:  Array<Agent | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionLocationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  address?: ModelSubscriptionStringInput | null,
  lat?: ModelSubscriptionFloatInput | null,
  lon?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionLocationFilterInput | null > | null,
  or?: Array< ModelSubscriptionLocationFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionRentalFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  nights?: ModelSubscriptionIntInput | null,
  paidAmount?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRentalFilterInput | null > | null,
  or?: Array< ModelSubscriptionRentalFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionPropertyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  shortDescription?: ModelSubscriptionStringInput | null,
  longDescription?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  rentPerMonth?: ModelSubscriptionFloatInput | null,
  rentPerDay?: ModelSubscriptionFloatInput | null,
  amenities?: ModelSubscriptionStringInput | null,
  mainImage?: ModelSubscriptionStringInput | null,
  images?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPropertyFilterInput | null > | null,
  or?: Array< ModelSubscriptionPropertyFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  idType?: ModelSubscriptionStringInput | null,
  idNumber?: ModelSubscriptionStringInput | null,
  images?: ModelSubscriptionStringInput | null,
  perfilfoto?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionAgentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAgentFilterInput | null > | null,
  or?: Array< ModelSubscriptionAgentFilterInput | null > | null,
};

export type CreateLocationMutationVariables = {
  input: CreateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type CreateLocationMutation = {
  createLocation?:  {
    __typename: "Location",
    id: string,
    address: string,
    lat: number,
    lon: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLocationMutationVariables = {
  input: UpdateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type UpdateLocationMutation = {
  updateLocation?:  {
    __typename: "Location",
    id: string,
    address: string,
    lat: number,
    lon: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLocationMutationVariables = {
  input: DeleteLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type DeleteLocationMutation = {
  deleteLocation?:  {
    __typename: "Location",
    id: string,
    address: string,
    lat: number,
    lon: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRentalMutationVariables = {
  input: CreateRentalInput,
  condition?: ModelRentalConditionInput | null,
};

export type CreateRentalMutation = {
  createRental?:  {
    __typename: "Rental",
    id: string,
    property?:  {
      __typename: "Property",
      id: string,
      title: string,
      shortDescription: string,
      longDescription?: string | null,
      type: PropertyType,
      price: number,
      rentPerMonth?: number | null,
      rentPerDay?: number | null,
      amenities?: Array< amenities | null > | null,
      mainImage?: string | null,
      images?: Array< string | null > | null,
      createdAt: string,
      updatedAt?: string | null,
      userBoughtPropertiesId?: string | null,
      agentPropertiesId?: string | null,
      propertyOwnerId?: string | null,
      propertyAgentId?: string | null,
      propertyLocationId?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      name: string,
      email: string,
      address?: string | null,
      idType?: Array< idType | null > | null,
      idNumber?: string | null,
      images?: string | null,
      perfilfoto?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    nights: number,
    paidAmount: number,
    createdAt: string,
    updatedAt?: string | null,
    userRentedPropertiesId?: string | null,
    rentalPropertyId?: string | null,
    rentalUserId?: string | null,
  } | null,
};

export type UpdateRentalMutationVariables = {
  input: UpdateRentalInput,
  condition?: ModelRentalConditionInput | null,
};

export type UpdateRentalMutation = {
  updateRental?:  {
    __typename: "Rental",
    id: string,
    property?:  {
      __typename: "Property",
      id: string,
      title: string,
      shortDescription: string,
      longDescription?: string | null,
      type: PropertyType,
      price: number,
      rentPerMonth?: number | null,
      rentPerDay?: number | null,
      amenities?: Array< amenities | null > | null,
      mainImage?: string | null,
      images?: Array< string | null > | null,
      createdAt: string,
      updatedAt?: string | null,
      userBoughtPropertiesId?: string | null,
      agentPropertiesId?: string | null,
      propertyOwnerId?: string | null,
      propertyAgentId?: string | null,
      propertyLocationId?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      name: string,
      email: string,
      address?: string | null,
      idType?: Array< idType | null > | null,
      idNumber?: string | null,
      images?: string | null,
      perfilfoto?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    nights: number,
    paidAmount: number,
    createdAt: string,
    updatedAt?: string | null,
    userRentedPropertiesId?: string | null,
    rentalPropertyId?: string | null,
    rentalUserId?: string | null,
  } | null,
};

export type DeleteRentalMutationVariables = {
  input: DeleteRentalInput,
  condition?: ModelRentalConditionInput | null,
};

export type DeleteRentalMutation = {
  deleteRental?:  {
    __typename: "Rental",
    id: string,
    property?:  {
      __typename: "Property",
      id: string,
      title: string,
      shortDescription: string,
      longDescription?: string | null,
      type: PropertyType,
      price: number,
      rentPerMonth?: number | null,
      rentPerDay?: number | null,
      amenities?: Array< amenities | null > | null,
      mainImage?: string | null,
      images?: Array< string | null > | null,
      createdAt: string,
      updatedAt?: string | null,
      userBoughtPropertiesId?: string | null,
      agentPropertiesId?: string | null,
      propertyOwnerId?: string | null,
      propertyAgentId?: string | null,
      propertyLocationId?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      name: string,
      email: string,
      address?: string | null,
      idType?: Array< idType | null > | null,
      idNumber?: string | null,
      images?: string | null,
      perfilfoto?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    nights: number,
    paidAmount: number,
    createdAt: string,
    updatedAt?: string | null,
    userRentedPropertiesId?: string | null,
    rentalPropertyId?: string | null,
    rentalUserId?: string | null,
  } | null,
};

export type CreatePropertyMutationVariables = {
  input: CreatePropertyInput,
  condition?: ModelPropertyConditionInput | null,
};

export type CreatePropertyMutation = {
  createProperty?:  {
    __typename: "Property",
    id: string,
    title: string,
    shortDescription: string,
    longDescription?: string | null,
    type: PropertyType,
    price: number,
    rentPerMonth?: number | null,
    rentPerDay?: number | null,
    amenities?: Array< amenities | null > | null,
    owner?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      name: string,
      email: string,
      address?: string | null,
      idType?: Array< idType | null > | null,
      idNumber?: string | null,
      images?: string | null,
      perfilfoto?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    agent?:  {
      __typename: "Agent",
      id: string,
      name: string,
      createdAt: string,
      updatedAt?: string | null,
    } | null,
    mainImage?: string | null,
    images?: Array< string | null > | null,
    location?:  {
      __typename: "Location",
      id: string,
      address: string,
      lat: number,
      lon: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
    userBoughtPropertiesId?: string | null,
    agentPropertiesId?: string | null,
    propertyOwnerId?: string | null,
    propertyAgentId?: string | null,
    propertyLocationId?: string | null,
  } | null,
};

export type UpdatePropertyMutationVariables = {
  input: UpdatePropertyInput,
  condition?: ModelPropertyConditionInput | null,
};

export type UpdatePropertyMutation = {
  updateProperty?:  {
    __typename: "Property",
    id: string,
    title: string,
    shortDescription: string,
    longDescription?: string | null,
    type: PropertyType,
    price: number,
    rentPerMonth?: number | null,
    rentPerDay?: number | null,
    amenities?: Array< amenities | null > | null,
    owner?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      name: string,
      email: string,
      address?: string | null,
      idType?: Array< idType | null > | null,
      idNumber?: string | null,
      images?: string | null,
      perfilfoto?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    agent?:  {
      __typename: "Agent",
      id: string,
      name: string,
      createdAt: string,
      updatedAt?: string | null,
    } | null,
    mainImage?: string | null,
    images?: Array< string | null > | null,
    location?:  {
      __typename: "Location",
      id: string,
      address: string,
      lat: number,
      lon: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
    userBoughtPropertiesId?: string | null,
    agentPropertiesId?: string | null,
    propertyOwnerId?: string | null,
    propertyAgentId?: string | null,
    propertyLocationId?: string | null,
  } | null,
};

export type DeletePropertyMutationVariables = {
  input: DeletePropertyInput,
  condition?: ModelPropertyConditionInput | null,
};

export type DeletePropertyMutation = {
  deleteProperty?:  {
    __typename: "Property",
    id: string,
    title: string,
    shortDescription: string,
    longDescription?: string | null,
    type: PropertyType,
    price: number,
    rentPerMonth?: number | null,
    rentPerDay?: number | null,
    amenities?: Array< amenities | null > | null,
    owner?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      name: string,
      email: string,
      address?: string | null,
      idType?: Array< idType | null > | null,
      idNumber?: string | null,
      images?: string | null,
      perfilfoto?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    agent?:  {
      __typename: "Agent",
      id: string,
      name: string,
      createdAt: string,
      updatedAt?: string | null,
    } | null,
    mainImage?: string | null,
    images?: Array< string | null > | null,
    location?:  {
      __typename: "Location",
      id: string,
      address: string,
      lat: number,
      lon: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
    userBoughtPropertiesId?: string | null,
    agentPropertiesId?: string | null,
    propertyOwnerId?: string | null,
    propertyAgentId?: string | null,
    propertyLocationId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    name: string,
    email: string,
    address?: string | null,
    idType?: Array< idType | null > | null,
    idNumber?: string | null,
    images?: string | null,
    perfilfoto?: string | null,
    boughtProperties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    rentedProperties?:  {
      __typename: "ModelRentalConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    name: string,
    email: string,
    address?: string | null,
    idType?: Array< idType | null > | null,
    idNumber?: string | null,
    images?: string | null,
    perfilfoto?: string | null,
    boughtProperties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    rentedProperties?:  {
      __typename: "ModelRentalConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    name: string,
    email: string,
    address?: string | null,
    idType?: Array< idType | null > | null,
    idNumber?: string | null,
    images?: string | null,
    perfilfoto?: string | null,
    boughtProperties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    rentedProperties?:  {
      __typename: "ModelRentalConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateAgentMutationVariables = {
  input: CreateAgentInput,
  condition?: ModelAgentConditionInput | null,
};

export type CreateAgentMutation = {
  createAgent?:  {
    __typename: "Agent",
    id: string,
    name: string,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type UpdateAgentMutationVariables = {
  input: UpdateAgentInput,
  condition?: ModelAgentConditionInput | null,
};

export type UpdateAgentMutation = {
  updateAgent?:  {
    __typename: "Agent",
    id: string,
    name: string,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type DeleteAgentMutationVariables = {
  input: DeleteAgentInput,
  condition?: ModelAgentConditionInput | null,
};

export type DeleteAgentMutation = {
  deleteAgent?:  {
    __typename: "Agent",
    id: string,
    name: string,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type GetLocationQueryVariables = {
  id: string,
};

export type GetLocationQuery = {
  getLocation?:  {
    __typename: "Location",
    id: string,
    address: string,
    lat: number,
    lon: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLocationsQueryVariables = {
  filter?: ModelLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLocationsQuery = {
  listLocations?:  {
    __typename: "ModelLocationConnection",
    items:  Array< {
      __typename: "Location",
      id: string,
      address: string,
      lat: number,
      lon: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRentalQueryVariables = {
  id: string,
};

export type GetRentalQuery = {
  getRental?:  {
    __typename: "Rental",
    id: string,
    property?:  {
      __typename: "Property",
      id: string,
      title: string,
      shortDescription: string,
      longDescription?: string | null,
      type: PropertyType,
      price: number,
      rentPerMonth?: number | null,
      rentPerDay?: number | null,
      amenities?: Array< amenities | null > | null,
      mainImage?: string | null,
      images?: Array< string | null > | null,
      createdAt: string,
      updatedAt?: string | null,
      userBoughtPropertiesId?: string | null,
      agentPropertiesId?: string | null,
      propertyOwnerId?: string | null,
      propertyAgentId?: string | null,
      propertyLocationId?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      name: string,
      email: string,
      address?: string | null,
      idType?: Array< idType | null > | null,
      idNumber?: string | null,
      images?: string | null,
      perfilfoto?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    nights: number,
    paidAmount: number,
    createdAt: string,
    updatedAt?: string | null,
    userRentedPropertiesId?: string | null,
    rentalPropertyId?: string | null,
    rentalUserId?: string | null,
  } | null,
};

export type ListRentalsQueryVariables = {
  filter?: ModelRentalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRentalsQuery = {
  listRentals?:  {
    __typename: "ModelRentalConnection",
    items:  Array< {
      __typename: "Rental",
      id: string,
      nights: number,
      paidAmount: number,
      createdAt: string,
      updatedAt?: string | null,
      userRentedPropertiesId?: string | null,
      rentalPropertyId?: string | null,
      rentalUserId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPropertyQueryVariables = {
  id: string,
};

export type GetPropertyQuery = {
  getProperty?:  {
    __typename: "Property",
    id: string,
    title: string,
    shortDescription: string,
    longDescription?: string | null,
    type: PropertyType,
    price: number,
    rentPerMonth?: number | null,
    rentPerDay?: number | null,
    amenities?: Array< amenities | null > | null,
    owner?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      name: string,
      email: string,
      address?: string | null,
      idType?: Array< idType | null > | null,
      idNumber?: string | null,
      images?: string | null,
      perfilfoto?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    agent?:  {
      __typename: "Agent",
      id: string,
      name: string,
      createdAt: string,
      updatedAt?: string | null,
    } | null,
    mainImage?: string | null,
    images?: Array< string | null > | null,
    location?:  {
      __typename: "Location",
      id: string,
      address: string,
      lat: number,
      lon: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
    userBoughtPropertiesId?: string | null,
    agentPropertiesId?: string | null,
    propertyOwnerId?: string | null,
    propertyAgentId?: string | null,
    propertyLocationId?: string | null,
  } | null,
};

export type ListPropertiesQueryVariables = {
  filter?: ModelPropertyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPropertiesQuery = {
  listProperties?:  {
    __typename: "ModelPropertyConnection",
    items:  Array< {
      __typename: "Property",
      id: string,
      title: string,
      shortDescription: string,
      longDescription?: string | null,
      type: PropertyType,
      price: number,
      rentPerMonth?: number | null,
      rentPerDay?: number | null,
      amenities?: Array< amenities | null > | null,
      mainImage?: string | null,
      images?: Array< string | null > | null,
      createdAt: string,
      updatedAt?: string | null,
      userBoughtPropertiesId?: string | null,
      agentPropertiesId?: string | null,
      propertyOwnerId?: string | null,
      propertyAgentId?: string | null,
      propertyLocationId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    name: string,
    email: string,
    address?: string | null,
    idType?: Array< idType | null > | null,
    idNumber?: string | null,
    images?: string | null,
    perfilfoto?: string | null,
    boughtProperties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    rentedProperties?:  {
      __typename: "ModelRentalConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username?: string | null,
      name: string,
      email: string,
      address?: string | null,
      idType?: Array< idType | null > | null,
      idNumber?: string | null,
      images?: string | null,
      perfilfoto?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAgentQueryVariables = {
  id: string,
};

export type GetAgentQuery = {
  getAgent?:  {
    __typename: "Agent",
    id: string,
    name: string,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type ListAgentsQueryVariables = {
  filter?: ModelAgentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAgentsQuery = {
  listAgents?:  {
    __typename: "ModelAgentConnection",
    items:  Array< {
      __typename: "Agent",
      id: string,
      name: string,
      createdAt: string,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
};

export type OnCreateLocationSubscription = {
  onCreateLocation?:  {
    __typename: "Location",
    id: string,
    address: string,
    lat: number,
    lon: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
};

export type OnUpdateLocationSubscription = {
  onUpdateLocation?:  {
    __typename: "Location",
    id: string,
    address: string,
    lat: number,
    lon: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
};

export type OnDeleteLocationSubscription = {
  onDeleteLocation?:  {
    __typename: "Location",
    id: string,
    address: string,
    lat: number,
    lon: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRentalSubscriptionVariables = {
  filter?: ModelSubscriptionRentalFilterInput | null,
};

export type OnCreateRentalSubscription = {
  onCreateRental?:  {
    __typename: "Rental",
    id: string,
    property?:  {
      __typename: "Property",
      id: string,
      title: string,
      shortDescription: string,
      longDescription?: string | null,
      type: PropertyType,
      price: number,
      rentPerMonth?: number | null,
      rentPerDay?: number | null,
      amenities?: Array< amenities | null > | null,
      mainImage?: string | null,
      images?: Array< string | null > | null,
      createdAt: string,
      updatedAt?: string | null,
      userBoughtPropertiesId?: string | null,
      agentPropertiesId?: string | null,
      propertyOwnerId?: string | null,
      propertyAgentId?: string | null,
      propertyLocationId?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      name: string,
      email: string,
      address?: string | null,
      idType?: Array< idType | null > | null,
      idNumber?: string | null,
      images?: string | null,
      perfilfoto?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    nights: number,
    paidAmount: number,
    createdAt: string,
    updatedAt?: string | null,
    userRentedPropertiesId?: string | null,
    rentalPropertyId?: string | null,
    rentalUserId?: string | null,
  } | null,
};

export type OnUpdateRentalSubscriptionVariables = {
  filter?: ModelSubscriptionRentalFilterInput | null,
};

export type OnUpdateRentalSubscription = {
  onUpdateRental?:  {
    __typename: "Rental",
    id: string,
    property?:  {
      __typename: "Property",
      id: string,
      title: string,
      shortDescription: string,
      longDescription?: string | null,
      type: PropertyType,
      price: number,
      rentPerMonth?: number | null,
      rentPerDay?: number | null,
      amenities?: Array< amenities | null > | null,
      mainImage?: string | null,
      images?: Array< string | null > | null,
      createdAt: string,
      updatedAt?: string | null,
      userBoughtPropertiesId?: string | null,
      agentPropertiesId?: string | null,
      propertyOwnerId?: string | null,
      propertyAgentId?: string | null,
      propertyLocationId?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      name: string,
      email: string,
      address?: string | null,
      idType?: Array< idType | null > | null,
      idNumber?: string | null,
      images?: string | null,
      perfilfoto?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    nights: number,
    paidAmount: number,
    createdAt: string,
    updatedAt?: string | null,
    userRentedPropertiesId?: string | null,
    rentalPropertyId?: string | null,
    rentalUserId?: string | null,
  } | null,
};

export type OnDeleteRentalSubscriptionVariables = {
  filter?: ModelSubscriptionRentalFilterInput | null,
};

export type OnDeleteRentalSubscription = {
  onDeleteRental?:  {
    __typename: "Rental",
    id: string,
    property?:  {
      __typename: "Property",
      id: string,
      title: string,
      shortDescription: string,
      longDescription?: string | null,
      type: PropertyType,
      price: number,
      rentPerMonth?: number | null,
      rentPerDay?: number | null,
      amenities?: Array< amenities | null > | null,
      mainImage?: string | null,
      images?: Array< string | null > | null,
      createdAt: string,
      updatedAt?: string | null,
      userBoughtPropertiesId?: string | null,
      agentPropertiesId?: string | null,
      propertyOwnerId?: string | null,
      propertyAgentId?: string | null,
      propertyLocationId?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      name: string,
      email: string,
      address?: string | null,
      idType?: Array< idType | null > | null,
      idNumber?: string | null,
      images?: string | null,
      perfilfoto?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    nights: number,
    paidAmount: number,
    createdAt: string,
    updatedAt?: string | null,
    userRentedPropertiesId?: string | null,
    rentalPropertyId?: string | null,
    rentalUserId?: string | null,
  } | null,
};

export type OnCreatePropertySubscriptionVariables = {
  filter?: ModelSubscriptionPropertyFilterInput | null,
  owner?: string | null,
};

export type OnCreatePropertySubscription = {
  onCreateProperty?:  {
    __typename: "Property",
    id: string,
    title: string,
    shortDescription: string,
    longDescription?: string | null,
    type: PropertyType,
    price: number,
    rentPerMonth?: number | null,
    rentPerDay?: number | null,
    amenities?: Array< amenities | null > | null,
    owner?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      name: string,
      email: string,
      address?: string | null,
      idType?: Array< idType | null > | null,
      idNumber?: string | null,
      images?: string | null,
      perfilfoto?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    agent?:  {
      __typename: "Agent",
      id: string,
      name: string,
      createdAt: string,
      updatedAt?: string | null,
    } | null,
    mainImage?: string | null,
    images?: Array< string | null > | null,
    location?:  {
      __typename: "Location",
      id: string,
      address: string,
      lat: number,
      lon: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
    userBoughtPropertiesId?: string | null,
    agentPropertiesId?: string | null,
    propertyOwnerId?: string | null,
    propertyAgentId?: string | null,
    propertyLocationId?: string | null,
  } | null,
};

export type OnUpdatePropertySubscriptionVariables = {
  filter?: ModelSubscriptionPropertyFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePropertySubscription = {
  onUpdateProperty?:  {
    __typename: "Property",
    id: string,
    title: string,
    shortDescription: string,
    longDescription?: string | null,
    type: PropertyType,
    price: number,
    rentPerMonth?: number | null,
    rentPerDay?: number | null,
    amenities?: Array< amenities | null > | null,
    owner?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      name: string,
      email: string,
      address?: string | null,
      idType?: Array< idType | null > | null,
      idNumber?: string | null,
      images?: string | null,
      perfilfoto?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    agent?:  {
      __typename: "Agent",
      id: string,
      name: string,
      createdAt: string,
      updatedAt?: string | null,
    } | null,
    mainImage?: string | null,
    images?: Array< string | null > | null,
    location?:  {
      __typename: "Location",
      id: string,
      address: string,
      lat: number,
      lon: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
    userBoughtPropertiesId?: string | null,
    agentPropertiesId?: string | null,
    propertyOwnerId?: string | null,
    propertyAgentId?: string | null,
    propertyLocationId?: string | null,
  } | null,
};

export type OnDeletePropertySubscriptionVariables = {
  filter?: ModelSubscriptionPropertyFilterInput | null,
  owner?: string | null,
};

export type OnDeletePropertySubscription = {
  onDeleteProperty?:  {
    __typename: "Property",
    id: string,
    title: string,
    shortDescription: string,
    longDescription?: string | null,
    type: PropertyType,
    price: number,
    rentPerMonth?: number | null,
    rentPerDay?: number | null,
    amenities?: Array< amenities | null > | null,
    owner?:  {
      __typename: "User",
      id: string,
      username?: string | null,
      name: string,
      email: string,
      address?: string | null,
      idType?: Array< idType | null > | null,
      idNumber?: string | null,
      images?: string | null,
      perfilfoto?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    agent?:  {
      __typename: "Agent",
      id: string,
      name: string,
      createdAt: string,
      updatedAt?: string | null,
    } | null,
    mainImage?: string | null,
    images?: Array< string | null > | null,
    location?:  {
      __typename: "Location",
      id: string,
      address: string,
      lat: number,
      lon: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
    userBoughtPropertiesId?: string | null,
    agentPropertiesId?: string | null,
    propertyOwnerId?: string | null,
    propertyAgentId?: string | null,
    propertyLocationId?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    name: string,
    email: string,
    address?: string | null,
    idType?: Array< idType | null > | null,
    idNumber?: string | null,
    images?: string | null,
    perfilfoto?: string | null,
    boughtProperties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    rentedProperties?:  {
      __typename: "ModelRentalConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    name: string,
    email: string,
    address?: string | null,
    idType?: Array< idType | null > | null,
    idNumber?: string | null,
    images?: string | null,
    perfilfoto?: string | null,
    boughtProperties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    rentedProperties?:  {
      __typename: "ModelRentalConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    name: string,
    email: string,
    address?: string | null,
    idType?: Array< idType | null > | null,
    idNumber?: string | null,
    images?: string | null,
    perfilfoto?: string | null,
    boughtProperties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    rentedProperties?:  {
      __typename: "ModelRentalConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateAgentSubscriptionVariables = {
  filter?: ModelSubscriptionAgentFilterInput | null,
};

export type OnCreateAgentSubscription = {
  onCreateAgent?:  {
    __typename: "Agent",
    id: string,
    name: string,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateAgentSubscriptionVariables = {
  filter?: ModelSubscriptionAgentFilterInput | null,
};

export type OnUpdateAgentSubscription = {
  onUpdateAgent?:  {
    __typename: "Agent",
    id: string,
    name: string,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteAgentSubscriptionVariables = {
  filter?: ModelSubscriptionAgentFilterInput | null,
};

export type OnDeleteAgentSubscription = {
  onDeleteAgent?:  {
    __typename: "Agent",
    id: string,
    name: string,
    properties?:  {
      __typename: "ModelPropertyConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};
