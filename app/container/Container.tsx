import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-w-[1200px] mx-auto h-full">{children}</div>;
};

export default Container;
