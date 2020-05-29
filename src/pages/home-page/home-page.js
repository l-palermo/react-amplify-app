import React from "react";

import "./home-page.css";
import Container from "../../components/container";
import Navbar from "../../components/navbar";

const HomePage = () => {
  return (
    <div data-qa="home-page">
      <Navbar />
      <Container>
        <div className="div0">
          <div className="div1" />
          <div className="div2" />
          <div className="div3" />
          <div className="div4" />
          <div className="div5" />
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
