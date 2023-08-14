import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum ModelAttributeTypes {
  NULL = "_null",
  BINARY = "binary",
  BINARY_SET = "binarySet",
  BOOL = "bool",
  LIST = "list",
  MAP = "map",
  NUMBER = "number",
  NUMBER_SET = "numberSet",
  STRING = "string",
  STRING_SET = "stringSet"
}

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export enum PropertyType {
  APARTMENT = "APARTMENT",
  CABIN = "CABIN",
  HOUSE = "HOUSE",
  RANCH = "RANCH"
}

export enum Amenities {
  AL = "al",
  ASCENSOR = "ascensor",
  GYM = "gym",
  LOBY = "loby",
  MAR = "mar",
  PISCINA = "piscina",
  ROOF = "roof",
  VISTA = "vista"
}

export enum IdType {
  CEDULA = "cedula",
  CONDUCIR = "conducir",
  DE = "de",
  LICENCIA = "licencia",
  PASAPORTE = "pasaporte"
}

type EagerAgent = {
  readonly createdAt: string;
  readonly id: string;
  readonly name: string;
  readonly properties?: ModelPropertyConnection | null;
  readonly updatedAt?: string | null;
}

type LazyAgent = {
  readonly createdAt: string;
  readonly id: string;
  readonly name: string;
  readonly properties?: ModelPropertyConnection | null;
  readonly updatedAt?: string | null;
}

export declare type Agent = LazyLoading extends LazyLoadingDisabled ? EagerAgent : LazyAgent

export declare const Agent: (new (init: ModelInit<Agent>) => Agent)

type EagerLocation = {
  readonly address: string;
  readonly createdAt: string;
  readonly id: string;
  readonly lat: number;
  readonly lon: number;
  readonly updatedAt: string;
}

type LazyLocation = {
  readonly address: string;
  readonly createdAt: string;
  readonly id: string;
  readonly lat: number;
  readonly lon: number;
  readonly updatedAt: string;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location)

type EagerModelAgentConnection = {
  readonly items: (Agent | null)[];
  readonly nextToken?: string | null;
}

type LazyModelAgentConnection = {
  readonly items: (Agent | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelAgentConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelAgentConnection : LazyModelAgentConnection

export declare const ModelAgentConnection: (new (init: ModelInit<ModelAgentConnection>) => ModelAgentConnection)

type EagerModelLocationConnection = {
  readonly items: (Location | null)[];
  readonly nextToken?: string | null;
}

type LazyModelLocationConnection = {
  readonly items: (Location | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelLocationConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelLocationConnection : LazyModelLocationConnection

export declare const ModelLocationConnection: (new (init: ModelInit<ModelLocationConnection>) => ModelLocationConnection)

type EagerModelPropertyConnection = {
  readonly items: (Property | null)[];
  readonly nextToken?: string | null;
}

type LazyModelPropertyConnection = {
  readonly items: (Property | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelPropertyConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelPropertyConnection : LazyModelPropertyConnection

export declare const ModelPropertyConnection: (new (init: ModelInit<ModelPropertyConnection>) => ModelPropertyConnection)

type EagerModelRentalConnection = {
  readonly items: (Rental | null)[];
  readonly nextToken?: string | null;
}

type LazyModelRentalConnection = {
  readonly items: (Rental | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelRentalConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelRentalConnection : LazyModelRentalConnection

export declare const ModelRentalConnection: (new (init: ModelInit<ModelRentalConnection>) => ModelRentalConnection)

type EagerModelUserConnection = {
  readonly items: (User | null)[];
  readonly nextToken?: string | null;
}

type LazyModelUserConnection = {
  readonly items: (User | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelUserConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelUserConnection : LazyModelUserConnection

export declare const ModelUserConnection: (new (init: ModelInit<ModelUserConnection>) => ModelUserConnection)

type EagerProperty = {
  readonly agent?: Agent | null;
  readonly agentPropertiesId?: string | null;
  readonly amenities?: (Amenities | null)[] | keyof typeof Amenities | null;
  readonly createdAt: string;
  readonly id: string;
  readonly images?: (string | null)[] | null;
  readonly location?: Location | null;
  readonly longDescription?: string | null;
  readonly mainImage?: string | null;
  readonly owner?: User | null;
  readonly price: number;
  readonly propertyAgentId?: string | null;
  readonly propertyLocationId?: string | null;
  readonly propertyOwnerId?: string | null;
  readonly rentPerDay?: number | null;
  readonly rentPerMonth?: number | null;
  readonly shortDescription: string;
  readonly title: string;
  readonly type: PropertyType | keyof typeof PropertyType;
  readonly updatedAt?: string | null;
  readonly userBoughtPropertiesId?: string | null;
}

type LazyProperty = {
  readonly agent?: Agent | null;
  readonly agentPropertiesId?: string | null;
  readonly amenities?: (Amenities | null)[] | keyof typeof Amenities | null;
  readonly createdAt: string;
  readonly id: string;
  readonly images?: (string | null)[] | null;
  readonly location?: Location | null;
  readonly longDescription?: string | null;
  readonly mainImage?: string | null;
  readonly owner?: User | null;
  readonly price: number;
  readonly propertyAgentId?: string | null;
  readonly propertyLocationId?: string | null;
  readonly propertyOwnerId?: string | null;
  readonly rentPerDay?: number | null;
  readonly rentPerMonth?: number | null;
  readonly shortDescription: string;
  readonly title: string;
  readonly type: PropertyType | keyof typeof PropertyType;
  readonly updatedAt?: string | null;
  readonly userBoughtPropertiesId?: string | null;
}

export declare type Property = LazyLoading extends LazyLoadingDisabled ? EagerProperty : LazyProperty

export declare const Property: (new (init: ModelInit<Property>) => Property)

type EagerRental = {
  readonly createdAt: string;
  readonly id: string;
  readonly nights: number;
  readonly paidAmount: number;
  readonly property?: Property | null;
  readonly rentalPropertyId?: string | null;
  readonly rentalUserId?: string | null;
  readonly updatedAt?: string | null;
  readonly user?: User | null;
  readonly userRentedPropertiesId?: string | null;
}

type LazyRental = {
  readonly createdAt: string;
  readonly id: string;
  readonly nights: number;
  readonly paidAmount: number;
  readonly property?: Property | null;
  readonly rentalPropertyId?: string | null;
  readonly rentalUserId?: string | null;
  readonly updatedAt?: string | null;
  readonly user?: User | null;
  readonly userRentedPropertiesId?: string | null;
}

export declare type Rental = LazyLoading extends LazyLoadingDisabled ? EagerRental : LazyRental

export declare const Rental: (new (init: ModelInit<Rental>) => Rental)

type EagerUser = {
  readonly address?: string | null;
  readonly boughtProperties?: ModelPropertyConnection | null;
  readonly createdAt: string;
  readonly email: string;
  readonly id: string;
  readonly idNumber?: string | null;
  readonly idType?: (IdType | null)[] | keyof typeof IdType | null;
  readonly images?: string | null;
  readonly name: string;
  readonly owner?: string | null;
  readonly perfilfoto?: string | null;
  readonly rentedProperties?: ModelRentalConnection | null;
  readonly updatedAt?: string | null;
  readonly username?: string | null;
}

type LazyUser = {
  readonly address?: string | null;
  readonly boughtProperties?: ModelPropertyConnection | null;
  readonly createdAt: string;
  readonly email: string;
  readonly id: string;
  readonly idNumber?: string | null;
  readonly idType?: (IdType | null)[] | keyof typeof IdType | null;
  readonly images?: string | null;
  readonly name: string;
  readonly owner?: string | null;
  readonly perfilfoto?: string | null;
  readonly rentedProperties?: ModelRentalConnection | null;
  readonly updatedAt?: string | null;
  readonly username?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User)

