import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">Arbitrage Tracker</h1>
        <div className="flex gap-4">
          <Button variant="outline">Login</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;