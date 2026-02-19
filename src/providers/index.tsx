import { getAxiosInstance } from "../Utils/axiosInstance";
import { INITIAL_STATE, IPet, PetActionContext, PetStateContext, updateFields } from "./context";
import { ReactNode, useContext, useReducer } from "react";
import axios from 'axios';
import { PetReducer } from "./reducer";
import { createPetError, createPetPending, createPetSuccess, deletePetError, deletePetPending, deletePetSuccess, getOnePetError, getOnePetPending, getOnePetSuccess, getPetsError, getPetsPending, getPetsSuccess, PetActionEnums, updatePetError, updatePetPending, updatePetSuccess } from "./actions";
import { error } from "console";
import { Descriptions } from "antd";

//make a pet provider
export const PetProvider = ({children} : {children : ReactNode}) => {
    const [state, dispatch] = useReducer(PetReducer, INITIAL_STATE); // will need the reducer
    const instance = getAxiosInstance(); // then the content

    const getPets = async () => {
        dispatch(getPetsPending());
        const endpoint = `/pets`
        await instance.get(endpoint)
        .then( response => {
            console.log(`i have the pets setting them`);
            const item = response.data;
            console.log(item);
            dispatch(getPetsSuccess(response.data))})
        .catch( error => {
            console.log(error);
            dispatch(getPetsError());
        });}

    const createPet = async (pet : IPet) =>{

        dispatch(createPetPending());
        const endpoint = `/pets`;
        const form = new FormData();
        //plotting the values    
 form.append("name", pet.name);
  form.append("breed_id", '15');
  form.append("date_of_birth", pet.date_of_birth.format("YYYY-MM-DD"));
  
form.append("sub_id", pet.sub_id ?? "my-user-123");
  form.append("microchip_id", pet.microchip_id ?? "");

  form.append("description", pet.description);
  //form.append("images", '...'); 

        await instance.post(endpoint,form).then(response => {
            console.log(response.data);
            dispatch(createPetSuccess(0));
        }).catch(error =>{
            console.log(error);
            dispatch(createPetError());
        })}

    
const getOnePet = async (id: string): Promise<void> => {
// to be implemented
dispatch(getOnePetPending());
const endpoint = `/pets/${id}`;

await instance.get(endpoint).then(response => {
    console.log(`updated`);
    console.log(response.data);
    dispatch(getOnePetSuccess(response.data));
}).catch(error => {
    console.log(error);
    dispatch(getOnePetError());
})
};

const updatePet = async (petid: string , val : string): Promise<void> => {
  dispatch(updatePetPending());
  const endpoint = `/pets/${petid}`;

  await instance.patch(endpoint,{description : val})
  .then(response => {
    console.log(`update complete`);
    console.log(response.data);
    dispatch(updatePetSuccess(0));
  })
  .catch(error=> {
    console.log(error);
    dispatch(updatePetError());
  })
};

const deletePet = async (id: string): Promise<void> => {
  // to be implemented
  dispatch(deletePetPending());
  const endpoint = `/pets/${id}`;

  await instance.delete(endpoint)
  .then(response=>{
    console.log(`deleted`);
    console.log('data is',response.data);
    dispatch(deletePetSuccess(id));
  })
  .catch(error=>{
    console.log(error);
    dispatch(deletePetError());
  })
};

    
        return(
            <PetStateContext.Provider value={state}>
                <PetActionContext.Provider value={{getPets, createPet,updatePet,getOnePet,deletePet}}>
                    {children}
                </PetActionContext.Provider>
            </PetStateContext.Provider>
        )

}

export const usePetState = () => {
    const context = useContext(PetStateContext);
    if(!context){
        throw new Error(' state context missing');
    }
    return context;
}


export const usePetAction = () => {
    const context = useContext(PetActionContext);
    if(!context){
        throw new Error(' Action context missing');
    }
    return context;
}