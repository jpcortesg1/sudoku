"use client";

import { getCookie } from "cookies-next";
import { useDispatch } from "react-redux";

import { getValidTheme } from "@/enum/Theme";
import { setTheme } from "@/features/configuration/configurationSlice";
import { useEffect } from "react";

export default function useLoadCurrentTheme() {
  const themeCookie = getCookie("theme");
  const currentTheme = getValidTheme(themeCookie as String);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTheme(currentTheme));
  }, [dispatch, currentTheme]);

  return currentTheme;
}
