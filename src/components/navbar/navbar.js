import React from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { BsSearch } from "react-icons/bs";

import "./navbar.css";
import Container from "../container";

const Navbar = () => {
  // finish navbar with input field and other functionalities
  return (
    <div className="navbar">
      <Container>
        <div className="navbarLayout">
          <div className="logo">CATURDAY</div>
          <div className="search">
            {/* the style needs to be sort out */}
            <BsSearch
              style={{ width: 24, height: 24, transform: "rotate(90deg)" }}
            />
          </div>
          <div className="signoutButton">
            <AmplifySignOut />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
