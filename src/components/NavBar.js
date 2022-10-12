import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const renderLinks = links.map((link => {
    return <a key={link} href={"#" + link}>{link}</a>
  }))

  return <nav>
    {/* display an <a> tag for each link here */}
      {renderLinks}
    </nav>;
}

export default NavBar;
