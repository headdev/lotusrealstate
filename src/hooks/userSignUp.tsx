import { useState } from 'react';
import { Auth } from 'aws-amplify';
import {  API, graphqlOperation } from 'aws-amplify';
import { CreateUserInput } from "API";
import { Storage } from 'aws-amplify';



import { createUser } from '../graphql/mutations';

interface Inputs {
  name: string;
  email: string;
  password: string;
  imageFile: File;
  idType: string; 
  idNumber: string;
  address: string;  // imagen desde input type="file"
}
interface SignUpAttrs {
    name: string;
    email: string;
    address: string;
    idNumber: string | number; // permitir número
  }

  interface UserPersonalInfo {
    name: string;
    email: string;
  }
  
  interface UserLocation {
    address: string; 
  }
  
  interface UserIdentity {
    idNumber: string | number;
  }

  // Juntar en la interfaz de atributos
interface UserAttributes {
    personalInfo: UserPersonalInfo;
    location: UserLocation;
    identity: UserIdentity;
  }


interface UploadFileResponse {
    key: string;
  }
  
  interface User {
    username: string;
    attributes: {
      email: string;
      // ...otros atributos 
    }
  }
  interface SignUpResponse {
    user: User;
  userConfirmed: boolean;
  userSub: string;
  }

 
  
 


export default function useRegisterUser() {
    const [imageUrl, setImageUrl] = useState('');

    async function uploadImage(imageFile: File) {
        const fileName = `${Date.now()}-${imageFile.name}`;
        const uploadedFile: UploadFileResponse = await Storage.put(fileName, imageFile); 
        setImageUrl(uploadedFile.key);
    }


    const [error, setError] = useState<string | null>(null);

  async function registerUser(inputs: Inputs,userAttributes: SignUpAttrs) {
    const signUpResponse = await Auth.signUp({
        username: inputs.email,
        password: inputs.password
      });
    
    const userSub = signUpResponse.userSub; 

      const user = signUpResponse.user;
      const attributes = userAttributes;
      const email = inputs.email;


      const password = 'password123';  
    const result = await Auth.signUp({
        username: 'example@email.com',
        password: 'password123'
    });
  

    try {
        const {imageFile} = inputs; 
        await uploadImage(inputs.imageFile);
        const fileName = `${Date.now()}-${imageFile.name}`;
        const uploadedFile = await Storage.put(fileName, imageFile);
      const user: any = await Auth.signUp({
        username: email,
        password,
        attributes: { name, email }  
      });
      
      const id = user.username;

      const input = { 
        id,
        name,
        email
      };
      const userImage = uploadedFile.key; // URL de la imagen
      await API.graphql(graphqlOperation(createUser, { input }));
      const [error, setError] = useState<string | null>(null);


    }    catch (error) {

        const getErrorMsg = (error: unknown): string => {
          if (error instanceof Error) {
             return error.message;
          }
          
          return 'Ocurrió un error';  
        }
  
        setError(prevError => getErrorMsg(error));
  
      }
  
    }
  
    return {
      registerUser,
      error  
    }
  
  }