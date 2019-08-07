import React, { useEffect } from "react";
import "../css/App.css";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Puzzle from "./Puzzle";
import { applicationLoaded } from "../actions";

export default function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(applicationLoaded());
  });

  return (
    <>
      <Route exact path="/" component={Puzzle} />
    </>
  );
}
