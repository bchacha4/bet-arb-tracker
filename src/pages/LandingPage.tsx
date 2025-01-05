import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation Bar */}
      <nav className="w-full bg-white border-b border-gray-200 px-6 py-4 fixed top-0 z-50">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900 whitespace-nowrap">Bettor-IQ</h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline" className="font-medium">
                Log in
              </Button>
            </Link>
            <Link to="/login">
              <Button className="bg-primary hover:bg-primary-hover text-white font-medium">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content with proper spacing from fixed navbar */}
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center py-20 px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center">
            Welcome to Bettor-IQ
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl">
            Maximize your sports betting profits with our platform.
          </p>
        </div>

        {/* Additional Landing Page Content */}
        <div className="max-w-[1400px] mx-auto px-6 pb-20">
          <h3 className="text-2xl font-bold text-gray-900">Get Started</h3>
          <p className="mt-2 text-gray-600">
            Join us today and start finding the best arbitrage opportunities!
          </p>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;