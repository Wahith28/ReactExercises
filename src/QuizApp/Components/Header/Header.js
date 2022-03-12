import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";

const QHeader = () => {
  return (
    <div className="header">
      <Link style={{ textDecoration: "none" }} to="/" className="title">
        Intuitive Quiz Hub
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default QHeader;
