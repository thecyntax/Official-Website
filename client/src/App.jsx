import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout";
import Home from "./components/Home";
import GradualBlur from "./animation/GradualBlur";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <GradualBlur
        target="page"
        position="bottom"
        height="8rem"
        strength={1.5}
        divCount={3}
        curve="bezier"
        opacity={0.8}
        zIndex={50}
        grain
        grainOpacity={0.06}
        grainSize="3px"
        className="pointer-events-none"
      />

      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
