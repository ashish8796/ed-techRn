import { IProductState } from "./productDetails/reducer"

export type SetCourse = {
  type: string;
  payload: number;
}

export type State = {
  product: IProductState
}