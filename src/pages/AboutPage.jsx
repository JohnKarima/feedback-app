import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a React app to give feedback for a product or service</p>
        <p>Verison 1.0.0</p>
        <Link to="/">Back Home</Link>
      </div>
    </Card>
  );
}

export default AboutPage;
