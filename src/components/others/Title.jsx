import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <div className="text-2xl lg:text-4xl text-center text-gray-800 my-4">
        {title}
      </div>
    </div>
  );
};

export default Title;
