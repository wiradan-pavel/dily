import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* header */}
      {children}
      {/* footer */}
    </>
  );
};

export default Layout;
