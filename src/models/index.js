// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ModelAttributeTypes = {
  "NULL": "_null",
  "BINARY": "binary",
  "BINARY_SET": "binarySet",
  "BOOL": "bool",
  "LIST": "list",
  "MAP": "map",
  "NUMBER": "number",
  "NUMBER_SET": "numberSet",
  "STRING": "string",
  "STRING_SET": "stringSet"
};

const ModelSortDirection = {
  "ASC": "ASC",
  "DESC": "DESC"
};

const PropertyType = {
  "APARTMENT": "APARTMENT",
  "CABIN": "CABIN",
  "HOUSE": "HOUSE",
  "RANCH": "RANCH"
};

const Amenities = {
  "AL": "al",
  "ASCENSOR": "ascensor",
  "GYM": "gym",
  "LOBY": "loby",
  "MAR": "mar",
  "PISCINA": "piscina",
  "ROOF": "roof",
  "VISTA": "vista"
};

const IdType = {
  "CEDULA": "cedula",
  "CONDUCIR": "conducir",
  "DE": "de",
  "LICENCIA": "licencia",
  "PASAPORTE": "pasaporte"
};

const { Agent, Location, ModelAgentConnection, ModelLocationConnection, ModelPropertyConnection, ModelRentalConnection, ModelUserConnection, Property, Rental, User } = initSchema(schema);

export {
  ModelAttributeTypes,
  ModelSortDirection,
  PropertyType,
  Amenities,
  IdType,
  Agent,
  Location,
  ModelAgentConnection,
  ModelLocationConnection,
  ModelPropertyConnection,
  ModelRentalConnection,
  ModelUserConnection,
  Property,
  Rental,
  User
};