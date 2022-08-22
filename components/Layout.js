import React from "react";

function Layout({ children }) {
  return (
    <main>
      <section>{children}</section>
    </main>
  );
}

export default Layout;
