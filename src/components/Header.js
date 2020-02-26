import React from "react";

const styles = {
  headingStyle: {
    fontSize: 50
  }
};


function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Employee Directory</h1>
    </header>
  );
}

export default Header;
