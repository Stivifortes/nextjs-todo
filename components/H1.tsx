import React from 'react'

interface IProps {
  children: React.ReactNode;
}

const H1: React.FC<IProps> = ({ children }) => {
  return <h1 className="text-3xl font-bold underline flex justify-center m-10">{children}</h1>;
};

export default H1;

