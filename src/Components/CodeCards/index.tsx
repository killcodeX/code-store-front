import React, { useState } from "react";
import { CgShutterstock, CgPen, CgTrashEmpty } from "react-icons/cg";
import {
  CardWrapper,
  CardTitle,
  CardDescription,
  CardCategory,
  OptionWrapper,
  DisplayIconWrapper,
  EditIconWrapper,
  DeleteIconWrapper,
} from "./style";
import { Post } from "../../Interface/interface";
import {
  getDisplayPostModal,
  getEditPostodal,
  deletePost,
} from "./../../Redux/Actions/postActions";
import { useDispatch } from "react-redux";
import { Popconfirm } from "antd";

export default function CodeCard({ item }) {
  const dispatch = useDispatch();

  function confirm(e) {
    dispatch(deletePost(item._id));
  }

  function cancel(e) {
    console.log("Post not removed");
  }

  return (
    <CardWrapper>
      <CardTitle>{item.title}</CardTitle>
      <CardDescription>
        {item.description.slice(0, 120) + "..."}
      </CardDescription>
      <CardCategory>{item.language}</CardCategory>
      <OptionWrapper>
        <DisplayIconWrapper
          onClick={() => dispatch(getDisplayPostModal(item._id))}
        >
          <CgShutterstock />
        </DisplayIconWrapper>
        <EditIconWrapper onClick={() => dispatch(getEditPostodal(item._id))}>
          <CgPen />
        </EditIconWrapper>
        <Popconfirm
          title="Are you sure to delete this task?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <DeleteIconWrapper>
            <CgTrashEmpty />
          </DeleteIconWrapper>
        </Popconfirm>
      </OptionWrapper>
    </CardWrapper>
  );
}
