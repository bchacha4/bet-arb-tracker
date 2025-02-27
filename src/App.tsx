
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "sonner";
import { queryClient } from "@/lib/react-query";
import { AuthProvider, useAuth } from '@/components/Auth/AuthProvider';
import LoginPage from '@/components/Auth/LoginPage';
import LandingPage from '@/pages/LandingPage';
import Index from '@/pages/Index';
import OddsScout from '@/pages/OddsScout';
import PoliciesPage from '@/pages/PoliciesPage';
import ArbitrageCalculator from '@/pages/ArbitrageCalculator';
import OddsConverter from '@/pages/OddsConverter';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

const App = () => {
  React.useEffect(() => {
    document.body.className = 'bg-background text-foreground';
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/policies" element={<PoliciesPage />} />
              <Route path="/arbitrage-calculator" element={<ArbitrageCalculator />} />
              <Route path="/odds-converter" element={<OddsConverter />} />
              <Route 
                path="/arbitrage-finder" 
                element={
                  <ProtectedRoute>
                    <Index />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/odds-scout" 
                element={
                  <ProtectedRoute>
                    <OddsScout />
                  </ProtectedRoute>
                } 
              />
              {/* Redirect old route to new route */}
              <Route path="/arbitrage-tracker" element={<Navigate to="/arbitrage-finder" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
