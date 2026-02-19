import { createAction } from "redux-actions";
import { IPet, IPetStateContext } from "./context";

//enum for the type of action
//only will do get so just 3 constants

export enum PetActionEnums {
  getPetsPending = 'GET_PETS_PENDING',
  getPetsSuccess = 'GET_PETS_SUCCESS',
  getPetsError   = 'GET_PETS_ERROR',

  createPetPending = 'CREATE_PET_PENDING',
  createPetSuccess = 'CREATE_PET_SUCCESS',
  createPetError   = 'CREATE_PET_ERROR',

  updatePetPending = 'UPDATE_PET_PENDING',
  updatePetSuccess = 'UPDATE_PET_SUCCESS',
  updatePetError   = 'UPDATE_PET_ERROR',

  deletePetPending = 'DELETE_PET_PENDING',
  deletePetSuccess = 'DELETE_PET_SUCCESS',
  deletePetError   = 'DELETE_PET_ERROR',

  getOnePetPending = 'GET_ONE_PET_PENDING',
  getOnePetSuccess = 'GET_ONE_PET_SUCCESS',
  getOnePetError   = 'GET_ONE_PET_ERROR',
}

//now here you define the actions that will manipulate the state
export const getPetsPending = createAction<IPetStateContext>(
    PetActionEnums.getPetsPending, ()=>({isPending : true, isSuccess : false, isError : false})
);

export const getPetsSuccess = createAction<IPetStateContext, IPet[]>(
    PetActionEnums.getPetsSuccess, (pets : IPet[])=>({isPending : false, isSuccess : true, isError : false, pets})
);


export const getPetsError= createAction<IPetStateContext>(
    PetActionEnums.getPetsError, ()=>({isPending : false, isSuccess : false, isError : true})
);


//create pet 
export const createPetPending = createAction<IPetStateContext>(
  PetActionEnums.createPetPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const createPetSuccess = createAction<IPetStateContext, any>(
  PetActionEnums.createPetSuccess,
  () => ({
    isPending: false,
    isSuccess: true,
    isError: false,
 // <- reducer can insert into pets list
  })
);

export const createPetError = createAction<IPetStateContext>(
  PetActionEnums.createPetError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

//update pet 
export const updatePetPending = createAction<IPetStateContext>(
  PetActionEnums.updatePetPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const updatePetSuccess = createAction<IPetStateContext, any>(
  PetActionEnums.updatePetSuccess,
  () => ({
    isPending: false,
    isSuccess: true,
    isError: false,
     // <- reducer can replace item in pets list
  })
);

export const updatePetError = createAction<IPetStateContext>(
  PetActionEnums.updatePetError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

//delete pet
export const deletePetPending = createAction<IPetStateContext>(
  PetActionEnums.deletePetPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const deletePetSuccess = createAction<IPetStateContext, string>(
  PetActionEnums.deletePetSuccess,
  (id : string) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
     deltedID : id// <- reducer can replace item in pets list
  })
);

export const deletePetError = createAction<IPetStateContext>(
  PetActionEnums.deletePetError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

//getting a single pet
export const getOnePetPending = createAction<IPetStateContext>(
  PetActionEnums.getOnePetPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getOnePetSuccess = createAction<IPetStateContext, IPet>(
  PetActionEnums.getOnePetSuccess,
  (pet: IPet) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    pet, // <- store the fetched item
  })
);

export const getOnePetError = createAction<IPetStateContext>(
  PetActionEnums.getOnePetError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);