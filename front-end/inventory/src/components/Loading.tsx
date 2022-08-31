import React from "react";
import { useSelector } from "react-redux";
import "../sass/components/_loading.scss";

export const Loading = () => {
  const userLoading = useSelector((store: any) => store.user.isLoading);

  const condition = userLoading;

  return (
    <div className={condition ? "loading-wrapper active" : "loading-wrapper"}>
      <div className="loading">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
