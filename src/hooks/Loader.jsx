import React from "react";
import { PropagateLoader } from "react-loader-spinner";
import logo from "/MLogo.png";

const Loader = () => {
  return (
    <div className="flex flx-col justify-center items-center mt-72">
      <img src={logo} alt="" className="w-24 h-24" />
      <PropagateLoader
        height="200"
        width="200"
        radius="9"
        color="#07a8D1"
        ariaLabel="propagateLoader"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
