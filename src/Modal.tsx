import React from "react";

type Props = {
  //Insert Props Here
  children: React.ReactNode;
};

const Modal: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="fixed left-0 right-0 top-0 bottom-0 bg-gray-400 opacity-80 z-40"></div>
      <div className="fixed left-0 right-0 top-0 bottom-0 z-50 flex items-center justify-center">
        <div className="w-1/2">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
