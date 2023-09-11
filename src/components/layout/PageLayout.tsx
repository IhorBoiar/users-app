import React from "react";
import {useNavigate} from "react-router-dom";
import {IPageLayout} from "../../interfaces/common.interface";

const PageLayout = ({ title, children }: IPageLayout) => {
  const navigate = useNavigate();
  const goBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/', { replace: true });
    }
  };
  return (
    <div className="page">
      <div className="head">
        <button onClick={goBack}>Go back</button>
        <h2>{title}</h2>
      </div>
      <div className="content">{children}</div>
    </div>
  )
}

export default PageLayout
