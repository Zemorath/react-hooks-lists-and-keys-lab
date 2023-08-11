import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const listLinks = links.map((link) => {
      return <a href={ '#' + link} key={link}>{link}</a>;
    });

  return <nav>{listLinks}</nav>;
}

export default NavBar;
