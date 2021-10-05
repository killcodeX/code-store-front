import React, { useEffect } from "react";
import { CgClose } from "react-icons/cg";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar";
import CodeCard from "../../Components/CodeCards";
import DisplayPost from "../DisplayPost";
import AddPost from "../AddPost";
import EditPost from "../EditPost";
import { Post } from "../../Interface/interface";
import {
  HomeSectionWrapper,
  NoDataBanner,
  ClearSearch,
  ClearIconwrapper,
  ClearText,
} from "./style";
import {
  getAllPost,
  getAllLangauge,
  clearSearchlang,
  clearFilterlang,
} from "../../Redux/Actions/postActions";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const filter = useSelector((state: any) => state.post.filterP);
  const filterData = useSelector((state: any) => state.post.filterPost);
  const search = useSelector((state: any) => state.post.searchP);
  const searchData = useSelector((state: any) => state.post.searchPost);
  const posts = useSelector((state: any) => state.post.allPost);
  const firstTimeUser = useSelector((state: any) => state.auth.firstTimeUser);

  useEffect(() => {
    dispatch(getAllPost());
    dispatch(getAllLangauge());
    //console.log("called");
  }, []);

  if (filter) {
    return (
      <div>
        <Header />
        <SideBar />
        <HomeSectionWrapper>
          <ClearSearch onClick={() => dispatch(clearFilterlang())}>
            <ClearIconwrapper>
              <CgClose />
            </ClearIconwrapper>
            <ClearText>Clear filter</ClearText>
          </ClearSearch>
          <div className="row">
            {filterData?.length == 0 ? (
              <NoDataBanner>
                <img
                  src={process.env.PUBLIC_URL + "/assets/start-soon.png"}
                  alt="nodata"
                />
              </NoDataBanner>
            ) : (
              filterData.map((item: Post) => {
                return (
                  <div key={item._id} className="col-sm-4 mb-4">
                    <CodeCard item={item} />
                  </div>
                );
              })
            )}
          </div>
        </HomeSectionWrapper>
        <DisplayPost />
        <AddPost />
        <EditPost />
      </div>
    );
  }

  if (search) {
    return (
      <div>
        <Header />
        <SideBar />
        <HomeSectionWrapper>
          <ClearSearch onClick={() => dispatch(clearSearchlang())}>
            <ClearIconwrapper>
              <CgClose />
            </ClearIconwrapper>
            <ClearText>Clear search</ClearText>
          </ClearSearch>
          <div className="row">
            {searchData?.length == 0 ? (
              <NoDataBanner>
                <img
                  src={process.env.PUBLIC_URL + "/assets/start-soon.png"}
                  alt="nodata"
                />
              </NoDataBanner>
            ) : (
              searchData.map((item: Post) => {
                return (
                  <div key={item._id} className="col-sm-4 mb-4">
                    <CodeCard item={item} />
                  </div>
                );
              })
            )}
          </div>
        </HomeSectionWrapper>
        <DisplayPost />
        <AddPost />
        <EditPost />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <SideBar />
      <HomeSectionWrapper>
        <div className="row">
          {posts?.length == 0 ? (
            <NoDataBanner>
              <img
                src={process.env.PUBLIC_URL + "/assets/start-soon.png"}
                alt="nodata"
              />
            </NoDataBanner>
          ) : (
            posts.map((item: Post) => {
              return (
                <div key={item._id} className="col-sm-4 mb-4">
                  <CodeCard item={item} />
                </div>
              );
            })
          )}
        </div>
      </HomeSectionWrapper>
      <DisplayPost />
      <AddPost />
      <EditPost />
    </div>
  );
}
