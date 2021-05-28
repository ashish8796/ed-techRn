import { SetCourse } from "../tsType"
import { SET_COURSE } from "./actionTypes"

export const setCourse = (id: number): SetCourse => {
  return {
    type: SET_COURSE,
    payload: id
  }
}