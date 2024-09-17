import { Button } from "@/components/ui/button";
import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center mx-[180px] mt-4 ">
      <h1>Navbar</h1>

      <Button>Learn</Button>
    </div>
  );
}

export default Navbar;
