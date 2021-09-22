import React from "react";
import { CgMoon, CgSun } from "react-icons/cg";
import { getThemeChange } from "../../Redux/Actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import {
  HeaderWrapper,
  ThemeMode,
  ThemeIconWrapper,
  UserProfile,
} from "./style";

export default function Header() {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.post.theme);
  const user = useSelector((state: any) => state.auth.user)

  return (
    <HeaderWrapper>
      <ThemeMode>
        <ThemeIconWrapper onClick={() => dispatch(getThemeChange())}>
          {theme ? <CgMoon /> : <CgSun />}
        </ThemeIconWrapper>
      </ThemeMode>
      <UserProfile>{`Hi, ${user.fname}`}</UserProfile>
    </HeaderWrapper>
  );
}
