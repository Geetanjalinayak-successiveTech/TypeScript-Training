"use client";
import { FC, useEffect } from "react";

const WithLogger = <P extends object>(Components: FC) => {
  return () => {
    useEffect(() => {
      console.log("Mount");
      return () => {
        console.log("unmount");
      };
    }, []);

    useEffect(() => {
      console.log("Update");
    }, []);
    return <Components />;
  };
};

export default WithLogger;
