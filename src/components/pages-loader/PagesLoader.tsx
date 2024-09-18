"use client";
import React, { useEffect, useState } from "react";
import Router from "next/router";
import Loader from "../loader/Loader";
import { LinearProgress } from "@mui/material";
import "./PagesLoader.css";

const PagesLoader = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));
    Router.events.on("routeChangeError", () => setLoading(false));
    return () => {
      Router.events.off("routeChangeStart", () => setLoading(true));
      Router.events.off("routeChangeComplete", () => setLoading(false));
      Router.events.off("routeChangeError", () => setLoading(false));
    };
  }, []);

  if (loading) {
    return (
      <>
        <div className={"loaderContainer"}>
          <div className={"loaderContainer"}>
            <LinearProgress color="success" />
            <Loader />
          </div>
        </div>
      </>
    );
  }

  return null;
};

export default PagesLoader;
