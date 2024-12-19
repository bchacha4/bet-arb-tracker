import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const LoginPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Welcome to Arbitrage Tracker
        </h2>
        <div className="mt-2 text-center">
          <Link to="/" className="text-sm text-blue-600 hover:text-blue-500">
            ← Back to Homepage
          </Link>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
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
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;