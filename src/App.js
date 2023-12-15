import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Profile from "./profiles/Profile";
function App() {
  return (
    <>
      <Profile
        size={100}
        person={{
          name: "duy",
        }}
      />
      <Profile
        person={{
          name: "duynd",
        }}
      />
      <Profile
        size={50}
        person={{
          name: "nguyen duy",
        }}
      />
    </>
  );
}

export default App;
