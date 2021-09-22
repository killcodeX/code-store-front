import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useSelector } from "react-redux";
import Modal from "../../Components/Modal";
import { getDisplayPostModal } from "../../Redux/Actions/postActions";
import { ModalHead, PostTitle, PostDesc, PostTag } from "./style";

export default function DisplayPost() {
  const display = useSelector((state: any) => state.post.displayP);
  const data = useSelector((state: any) => state.post.postId);
  const theme = useSelector((state : any) =>  state.post.theme);

  return (
    <Modal display={display} close={getDisplayPostModal}>
      <ModalHead>Display Post</ModalHead>
      <PostTitle>{data?.title}</PostTitle>
      <PostDesc>{data?.description}</PostDesc>
      <PostTag>{data?.language}</PostTag>
      <SyntaxHighlighter
        className="mt-3 p-2"
        showLineNumbers={true}
        language={data?.langauge}
        style={theme? dracula : docco} //docco
        wrapLines={true}
      >
        {data?.code || 'hi'}
      </SyntaxHighlighter>
    </Modal>
  );
}
