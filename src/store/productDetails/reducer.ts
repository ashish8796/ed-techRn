import { SetCourse } from "../tsType";
import { SET_COURSE } from "./actionTypes";

export interface IProductState {
  id: number | null;
}


type MainAction = SetCourse

const initState: IProductState = {
  id: null
}

function productReducer(state = initState, { type, payload }: MainAction) {

  switch (type) {
    case SET_COURSE: {
      return { ...state, id: payload }
    }

    default:
      return state;
  }

}

export default productReducer;