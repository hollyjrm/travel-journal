import React from "react";
import MainContent from "./MainContent";
import Navbar from "./Navbar";
import data from "./data";

export default function App() {
  const places = data.map((place) => {
    return <MainContent {...place} />;
  });
  console.log(data);
  return (
    <div>
      <Navbar />
      {places}
    </div>
  );
}
