import React, { useState, useEffect, FormEvent } from "react";
import styles from "./Search.module.scss";
import Input from "../Index";
import SearchIcon from "@/public/images/search.svg";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/redux/store";
import { setSearchValue } from "@/redux/filters/slice";
import { useSelector } from "react-redux";
import selectFilters from "@/redux/filters/selectMenu";

const Search = () => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");
  const navigate = useRouter();
  const dispatch = useAppDispatch();
  const { search } = useSelector(selectFilters);

  useEffect(() => {
    if (search) {
      setActive(true);
      setValue(search);
    }
  }, [search]);

  const searchClick = (e: FormEvent) => {
    e.preventDefault();
    if (value) {
      dispatch(setSearchValue(value));
      navigate.push(`/catalog?search=${value}`);
    } else {
      if (search) {
        dispatch(setSearchValue(value));
      }
      setActive(!active);
    }
  };
  return (
    <div className={`${styles.search} ${active && styles.active}`}>
      <div onClick={searchClick} className={styles.searchIcon}>
        <SearchIcon />
      </div>
      <form onSubmit={searchClick} className={styles.searchWrapper}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Поиск"
        />
      </form>
    </div>
  );
};

export default Search;
