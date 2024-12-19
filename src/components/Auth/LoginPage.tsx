import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const LoginPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <Dialog open={!user} modal>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Welcome to Arbitrage Tracker
          </DialogTitle>
        </DialogHeader>
        <div className="px-4 py-6">
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#3b82f6',
                    brandAccent: '#2563eb',
                  },
                },
              },
              style: {
                button: {
                  background: '#3b82f6',
                  color: 'white',
                  borderRadius: '0.5rem',
                },
                anchor: {
                  color: '#3b82f6',
                },
                container: {
                  color: '#333',
                },
                label: {
                  color: '#4b5563',
                },
                input: {
                  backgroundColor: 'white',
                  borderColor: '#e5e7eb',
                  color: '#1f2937',
                },
              },
            }}
            providers={[]}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginPage;