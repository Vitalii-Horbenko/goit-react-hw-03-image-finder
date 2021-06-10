import React from "react";
import LoaderSpin from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <LoaderSpin
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default Loader;
