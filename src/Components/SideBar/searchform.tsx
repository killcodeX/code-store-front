import React, { useState } from "react";
import { CgSearch } from "react-icons/cg";
import {
  FormWrapper,
  InputWrapper,
  SearchIconWrapper,
  SearchSuggestion,
  SearchSuggestionItem,
} from "./style";
import {
  getSearchLang,
  clearSearchlang,
} from "../../Redux/Actions/postActions";
import { useDispatch, useSelector } from "react-redux";

export default function Searchform({ open }) {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const allPost = useSelector((state: any) => state.post.allPost);

  const handleChange = (e) => {
    const value = e.target.value;
    let matches = [];
    if (value.length >= 1) {
      const regex = new RegExp(`${value}`, "gi");
      matches = allPost.filter((item) => regex.test(item.title));
    }
    setSuggestions(matches);
    setSearchValue(value);
  };

  const handleSelect = (item) => {
    setSearchValue(item.title);
    dispatch(getSearchLang(item));
    setSuggestions([]);
  };

  const clearSearch = () => {
    dispatch(clearSearchlang())
    setSearchValue("");
  };

  return (
    <FormWrapper open={open}>
      <SearchIconWrapper open={open}>
        <CgSearch />
      </SearchIconWrapper>
      <InputWrapper
        open={open}
        placeholder="search..."
        value={searchValue}
        onChange={handleChange}
        onBlur={() => {
          setTimeout(() => {
            setSuggestions([]);
          }, 500);
        }}
      />
      {suggestions?.length > 0 ? (
        <SearchSuggestion>
          {suggestions.map((item: any) => {
            return (
              <SearchSuggestionItem
                key={item._id}
                onClick={() => handleSelect(item)}
              >
                {item.title}
              </SearchSuggestionItem>
            );
          })}
        </SearchSuggestion>
      ) : null}
    </FormWrapper>
  );
}
