import {
  ThemeChange,
  AddPostModal,
  CloseEditModal,
  DisplayPostModal,
  EditPostModal,
  GetAllPosts,
  CreatePost,
  EditPost,
  DeletePost,
  SearchLang,
  ClearSearchLang,
  FilterLanguage,
  ClearFilterLang,
  Alllang,
  AddLang,
} from "../Actions/actionConstant";

import { languages } from "../../Helpers/fakeData";

const initialState = {
  theme: false,
  displayP: false,
  addP: false,
  editP: false,
  searchP: false,
  filterp: false,
  filterPost: [],
  searchPost: [],
  allPost: [],
  allLang: [...languages],
  postId: "",
};

// Reducers
export const CodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ThemeChange:
      return {
        ...state,
        theme: !state.theme,
      };

    case AddPostModal:
      return {
        ...state,
        addP: !state.addP,
      };

    case CloseEditModal:
      return {
        ...state,
        editP: false,
      };

    case DisplayPostModal:
      //postId: action.payload,
      return {
        ...state,
        postId: state.allPost.filter(
          (state: any) => state._id == action.payload
        )[0],
        displayP: !state.displayP,
      };

    case EditPostModal:
      return {
        ...state,
        editP: !state.editP,
        postId: state.allPost.filter(
          (state: any) => state._id == action.payload
        )[0],
        displayP: !state.displayP,
      };

    case GetAllPosts:
      return {
        ...state,
        allPost: action.payload,
      };

    case CreatePost:
      return {
        ...state,
        allPost: [action.payload, ...state.allPost],
      };

    case EditPost:
      const newAllPost: any = [...state.allPost];
      const postIndex = newAllPost.findIndex(
        (post) => post._id == action.payload._id
      );
      newAllPost[postIndex] = action.payload;

      return {
        ...state,
        allPost: newAllPost,
      };

    case DeletePost:
      return {
        ...state,
        allPost: state.allPost.filter(
          (item: any) => item._id !== action.payload
        ),
      };

    case SearchLang:
      return {
        ...state,
        searchP: true,
        searchPost: action.payload,
      };

    case ClearSearchLang:
      return {
        ...state,
        searchP: false,
        searchPost: [],
      };

    case FilterLanguage:
      return {
        ...state,
        filterP: true,
        filterPost: action.payload,
      };

    case ClearFilterLang:
      return {
        ...state,
        filterP: false,
        filterPost: [],
      };

    case Alllang:
      return {
        ...state,
        allLang: [...state.allLang, ...action.payload],
      };

    case AddLang:
      return {
        ...state,
        allLang: [...state.allLang, action.payload],
      };
    default:
      return state;
  }
};
