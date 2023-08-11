import React, { FC, useState } from "react";
import facebookSvg from "images/Facebook.svg";
import { Amplify, Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { Link } from "react-router-dom";
import { Storage } from 'aws-amplify';



Amplify.configure({
  Auth: {
    identityPoolId: '67b391e2-2946-48a1-b64d-ca48b9200f9d', 
    region: 'us-east-1',
    userPoolId: 'us-east-1_xeNkO3wS7',
    userPoolWebClientId: '6ad3n0ge5lchobrihaam32q4i2',
  },
  Storage: {
    region: 'us-east-1', // Región de S3
  },
  
  aws_appsync_graphqlEndpoint: 'https://4hu2gcdusfb7xpsm525ae27hvu.appsync-api.us-east-1.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-1',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'da2-7hwxsaicjrcppeht4lk7d5itrq'
  
});

Storage.configure({
  region: 'us-east-1'
})
interface FormData {
  username: string;  
  password: string;
  name: string;  
  idType: string;    
  idNumber: string;  
  address: string;
  email: string;    
  perfilfoto: File | null | undefined 
}

export interface PageSignUpProps {
  className?: string;
}

const loginSocials = [
  {
    name: "Continue with Facebook",
    href: "#",
    icon: facebookSvg,
  },
  {
    name: "Continue with Twitter",
    href: "#",
    icon: twitterSvg,
  },
  {
    name: "Continue with Google",
    href: "#",
    icon: googleSvg,
  },
];

const PageSignUp: FC<PageSignUpProps> = ({ className = "" }) => {

  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',    
    name: '',
    idType: '',
    idNumber: '',
    address: '',
    email:'',
    perfilfoto: null  // change undefined to null, and update the type to File | null
});


  const handleSubmit = async (event: React.FormEvent) => {
     // Validar que haya un archivo
  if(!formData.perfilfoto) {
    alert('Debes seleccionar una imagen');
    return;
  }
    event.preventDefault();
    const photoKey = formData.perfilfoto 
    ? await Storage.put(formData.perfilfoto.name, formData.perfilfoto)
    : null;

    const { username, password, email, name, idType, idNumber, address,perfilfoto  } = formData;
    if (!validateEmail(email)) {
      console.log('Correo electrónico no válido');
      return;
    }
    
    try {
      const signUpResult = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          name,
          'custom:id_type': idType,
          'custom:id_number': idNumber,
          'custom:address': address,
          'custom:perfilfoto': photoKey
        },
        clientMetadata: {
          signupAttributes: 'email, name, custom:perfilfoto, custom:id_type, custom:id_number, custom:address'
        }
      });
      
      console.log('Usuario registrado!');

      // Enviamos el correo electrónico de confirmación al usuario
      await Auth.confirmSignUp(email, signUpResult.userSub);
      console.log('Correo electrónico de confirmación enviado!');

    } catch (error) {
      console.log('Error al registrar usuario', error);
    }
  }

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFormData({
      ...formData,  
      perfilfoto: file ? file : null    
    });   
  };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = (email: string) => {
    return emailRegex.test(email);
  };

  return (
    <div className={`nc-PageSignUp  ${className}`} data-nc-id="PageSignUp">
      <Helmet>
        <title>Registro | Lotus real state</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Registro de usuario
        </h2>
        <div className="max-w-md mx-auto space-y-6 ">
          <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              >
                <img
                  className="flex-shrink-0"
                  src={item.icon}
                  alt={item.name}
                />
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                  {item.name}
                </h3>
              </a>
            ))}
          </div>
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          {/* FORM */}
          <form className="grid grid-cols-1 gap-3" onSubmit={handleSubmit}>
            <Input
              name="username"
              type="text"
              placeholder="Ingresa tu nombre de usuario"
              onChange={handleInputChange}
              required
            />
            <Input
           name="password"    
           type="password"
           placeholder="inserte su contraseña"
           onChange={handleInputChange}                
         />
            <Input
              name="name"
              type="text"
              placeholder="Ingresa tu nombre completo"
              onChange={handleInputChange}
              required
            />
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Tipo de identificación</label>
              <select name="idType" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-neutral-300 dark:bg-neutral-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md" onChange={handleInputChange} required>
                <option value="">Selecciona una opción</option>
                <option value="cc">Cédula de ciudadanía</option>
                <option value="ce">Cédula de extranjería</option>
                <option value="ti">Tarjeta de identidad</option>
              </select>
            </div>
            <Input
              name="idNumber"
              type="text"
              placeholder="Ingresa tu número de identificación"
              onChange={handleInputChange}
              required
            />
            <Input
              
              name="address"
              type="text"
              placeholder="Ingresa tu dirección"
              onChange={handleInputChange}
              required
            />
            <Input
              
              name="email"
              type="email"
              placeholder="Ingresa tu correo electrónico"
              onChange={handleInputChange}
              required
            />

            {/* Nuevo campo para cargar imagen de perfil */}
            <div>
              <label htmlFor="perfilfoto" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Foto de perfil</label>
              <input type="file" name="perfilfoto" id="perfilfoto" accept="image/*" onChange={handleFileInputChange} />
            </div>

            <ButtonPrimary type="submit" className="w-full">
              Registrarse
            </ButtonPrimary>
          </form>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            ¿Ya tienes una cuenta?{" "}
            <Link
              to="/login"
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageSignUp;  