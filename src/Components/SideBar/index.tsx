import React, { useState } from "react";
import { message } from "antd";
import { languages } from "../../Helpers/fakeData";
import {
  CgCode,
  CgFormatRight,
  CgMenu,
  CgMathPlus,
  CgMonday,
  CgLogOut,
  CgFolderAdd,
  CgAttachment,
} from "react-icons/cg";
import {
  SideBarWrapper,
  OpenIconWrapper,
  CloseIconWrapper,
  LogoDetails,
  LogoWrapper,
  SideMenuItems,
  AddPostWrapper,
  AddIconWrapper,
  FormWrapper,
  InputWrapper,
  SearchIconWrapper,
  LanguageWrapper,
  LanguageIconWrapper,
  LanguageHead,
  LanguageOptions,
  LanguageSelect,
  LangData,
  LogOutWrapper,
  LogIconWrapper,
  LogOutText,
  AddButton,
} from "./style";
import {
  getAddPostodal,
  filterbyLanguage,
  addLangauge,
} from "../../Redux/Actions/postActions";
import { receiveLogout } from "../../Redux/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Searchform from "./searchform";

export default function SideBar() {
  const dispatch = useDispatch();
  const allLang = useSelector((state: any) => state.post.allLang);
  const [open, setOpen] = useState(false);
  const [addLang, setAddLang] = useState("");

  const handleFilterLang = (e) => {
    let value = e.target.value;
    if (!value) {
      message.error("Please select language");
    } else {
      dispatch(filterbyLanguage(value));
    }
  };

  const handleAddLang = (e) => {
    e.preventDefault();
    if (addLang) {
      dispatch(addLangauge(addLang));
    } else {
      message.error("Please add language");
    }
    setAddLang("");
  };

  return (
    <SideBarWrapper open={open}>
      {!open ? (
        <OpenIconWrapper open={open} onClick={() => setOpen(!open)}>
          <CgMenu />
        </OpenIconWrapper>
      ) : (
        <LogoDetails open={open}>
          <LogoWrapper>
            <CgCode /> Code Store
          </LogoWrapper>
          <CloseIconWrapper onClick={() => setOpen(!open)}>
            <CgFormatRight />
          </CloseIconWrapper>
        </LogoDetails>
      )}

      <hr />
      <SideMenuItems>
        <AddPostWrapper onClick={() => dispatch(getAddPostodal())}>
          <AddIconWrapper>
            <CgMathPlus />
          </AddIconWrapper>
          <LanguageHead open={open}>Add New Snippet</LanguageHead>
        </AddPostWrapper>
        <hr />
        <Searchform open={open} />
        <hr />
        <LanguageWrapper>
          <LanguageIconWrapper>
            <CgMonday />
          </LanguageIconWrapper>
          <LanguageHead open={open}>Filter Languages</LanguageHead>
        </LanguageWrapper>
        <LanguageSelect open={open} onChange={handleFilterLang}>
          <option value="">Select Language</option>
          {allLang.map((item) => {
            return (
              <LangData key={item._id} value={item.language}>
                {item.language}
              </LangData>
            );
          })}
        </LanguageSelect>
        <hr />
        <form onSubmit={handleAddLang}>
          <LanguageWrapper>
            <LanguageIconWrapper>
              <CgFolderAdd />
            </LanguageIconWrapper>
            <LanguageHead open={open}>Add Language</LanguageHead>
          </LanguageWrapper>
          <FormWrapper open={open} className="mt-3">
            <SearchIconWrapper open={open}>
              <CgAttachment />
            </SearchIconWrapper>
            <InputWrapper
              open={open}
              placeholder="add..."
              value={addLang}
              onChange={(e) => setAddLang(e.target.value)}
            />
          </FormWrapper>
          <AddButton type="submit" open={open}>
            Add
          </AddButton>
        </form>
        <hr />
        <LogOutWrapper>
          <LogIconWrapper onClick={() => dispatch(receiveLogout())}>
            <CgLogOut />
          </LogIconWrapper>
        </LogOutWrapper>
      </SideMenuItems>
    </SideBarWrapper>
  );
}

{
  /* <LanguageOptions open={open}>
          
        </LanguageOptions> */
}
