import {handleActions} from 'redux-actions';
import { INITIAL_STATE, IPetStateContext } from './context';
import { PetActionEnums } from './actions';




export const PetReducer = handleActions<IPetStateContext, IPetStateContext>(
  {
    // -------- GET ALL --------
    [PetActionEnums.getPetsPending]: (state, actions) => ({
      ...state,
      ...actions.payload,
    }),
    [PetActionEnums.getPetsSuccess]: (state, actions) => ({
      ...state,
      ...actions.payload,
    }),
    [PetActionEnums.getPetsError]: (state, actions) => ({
      ...state,
      ...actions.payload,
    }),

    // -------- CREATE --------
    [PetActionEnums.createPetPending]: (state, actions) => ({
      ...state,
      ...actions.payload,
    }),
    [PetActionEnums.createPetSuccess]: (state, actions) => ({
      ...state,
      ...actions.payload,
    }),
    [PetActionEnums.createPetError]: (state, actions) => ({
      ...state,
      ...actions.payload,
    }),

    // -------- UPDATE --------
    [PetActionEnums.updatePetPending]: (state, actions) => ({
      ...state,
      ...actions.payload,
    }),
    [PetActionEnums.updatePetSuccess]: (state, actions) => ({
      ...state,
      ...actions.payload,
    }),
    [PetActionEnums.updatePetError]: (state, actions) => ({
      ...state,
      ...actions.payload,
    }),

    // -------- DELETE --------
    [PetActionEnums.deletePetPending]: (state, actions) => ({
      ...state,
      ...actions.payload,
    }),
    [PetActionEnums.deletePetSuccess]: (state, actions) => ({
      ...state,
      ...actions.payload,
    }),
    [PetActionEnums.deletePetError]: (state, actions) => ({
      ...state,
      ...actions.payload,
    }),

    // -------- GET ONE --------
    [PetActionEnums.getOnePetPending]: (state, actions) => ({
      ...state,
      ...actions.payload,
    }),
    [PetActionEnums.getOnePetSuccess]: (state, actions) => ({
      ...state,
      ...actions.payload,
    }),
    [PetActionEnums.getOnePetError]: (state, actions) => ({
      ...state,
      ...actions.payload,
    }),
  },
  INITIAL_STATE
);