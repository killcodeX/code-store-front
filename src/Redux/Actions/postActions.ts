import {
  ThemeChange,
  AddPostModal,
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
  AddLang
} from "./actionConstant";

import {
  getAllPostApi,
  createPostApi,
  EditPostApi,
  deletePostApi,
  filterPostApi,
  getAllLangApi,
  addLangApi
} from "../../Api/postApi";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getThemeChange = () => {
  return {
    type: ThemeChange,
  };
};

export const getDisplayPostModal = (id) => {
  return {
    type: DisplayPostModal,
    payload: id,
  };
};

export const getEditPostodal = (id) => {
  return {
    type: EditPostModal,
    payload: id,
  };
};

export const getAddPostodal = () => {
  return {
    type: AddPostModal,
  };
};

export const getAllPost = () => async (dispatch) => {
  const result = await getAllPostApi();
  dispatch({
    type: GetAllPosts,
    payload: result,
  });
};

export const createPost = (body) => async (dispatch) => {
  const result = await createPostApi(body);
  dispatch({
    type: CreatePost,
    payload: result,
  });
};

export const editPost = (body) => async (dispatch) => {
  const result = await EditPostApi(body)
  dispatch({
    type: EditPost,
    payload: result,
  });
};

export const deletePost = (id) => async (dispatch) => {
  await deletePostApi(id);
  dispatch({
    type: DeletePost,
    payload: id,
  });
};

export const getSearchLang = (data) => {
  return {
    type: SearchLang,
    payload: [data],
  };
};

export const clearSearchlang = () => {
  return {
    type: ClearSearchLang,
  };
};

export const filterbyLanguage = (lang) => async (dispatch) => {
  const result = await filterPostApi({ language: lang });
  dispatch({
    type: FilterLanguage,
    payload: result,
  });
};

export const clearFilterlang = () => {
  return {
    type: ClearFilterLang,
  };
};

export const getAllLangauge = () => async (dispatch) => {
  const result = await getAllLangApi();
  dispatch({
    type: Alllang,
    payload: result,
  });
}

export const addLangauge = (body) => async (dispatch) => {
  let data = capitalizeFirstLetter(body)
  const result = await addLangApi({language:data});
  dispatch({
    type: AddLang,
    payload: result,
  });
}