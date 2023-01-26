import React from 'react'

interface IProps {
  children: React.ReactNode;
}

const WrapperDiv: React.FC<IProps> = ({ children }) => {
  return <div className="w-full flex flex-col justify-center items-center">{children}</div>;
};

export default WrapperDiv;
