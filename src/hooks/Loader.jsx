import React from "react";
import { PropagateLoader } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center mt-72">
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
