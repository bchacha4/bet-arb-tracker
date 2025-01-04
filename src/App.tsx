import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./components/Auth/AuthProvider";
import Index from "./pages/Index";
import LoginPage from "./components/Auth/LoginPage";
import OddsScout from "./pages/OddsScout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

// Protected route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  console.log("ProtectedRoute - Loading:", isLoading, "User status:", !!user);
  
  if (isLoading) {
    console.log("ProtectedRoute - Still loading");
    return null; // Or a loading spinner component
  }
  
  if (!user) {
    console.log("ProtectedRoute - Redirecting to login");
    return <Navigate to="/login" replace />;
  }
  
  console.log("ProtectedRoute - Rendering protected content");
  return children;
};

const App = () => {
  console.log("App component rendering");
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route 
                path="/" 
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
              <Route 
                path="*" 
                element={
                  <Navigate to="/" replace />
                } 
              />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;