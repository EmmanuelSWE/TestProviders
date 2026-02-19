import { createContext } from "react";
import dayjs, { Dayjs } from 'dayjs';

//interface for the pets 

export interface IPetImage {
  id: string;
  url: string;
  pet_id: string;
  width: number;
  height: number;
  pose: string;
  pet_age_months: number;
  created_at: string; // ISO date string
}

//type for the fields that can be changed
export type updateFields ="name" | "description";

//the pet interface

export interface IPet {
  id?: string;
  name: string;
  breed_id?: string;
  species_id?: string;
  description: string;
  sub_id?: string;
  microchip_id?: string;
  date_of_birth: Dayjs; // ISO date daysjs
  images?: IPetImage[];     // <-- uses the image interface
  created_at?: string;
  updated_at?: string;
}

//state interface
export interface IPetStateContext{
    isPending: boolean,
    isSuccess: boolean,
    isError: boolean,
    pet?: IPet,
    pets?: IPet[]
}


//acitons interface
export interface IPetActionsContext{
    getPets: ()=> void;
      createPet: (pet : IPet)=> void;
    getOnePet: (id: string)=> void;
  
    updatePet: (petid: string, val : string)=> void;
    deletePet: (id: string) => void;

}

//initial state
export const INITIAL_STATE: IPetStateContext ={
    isPending : false,
    isSuccess: false,
    isError: false
}

//creating the context
export const PetStateContext =createContext<IPetStateContext>(INITIAL_STATE);

export const PetActionContext = createContext<IPetActionsContext>(null);



