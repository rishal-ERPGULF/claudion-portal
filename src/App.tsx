import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div>
      <Button>
        <span className="text-lg">Click me</span>
      </Button>
    </div>
  );
}

export default App;
