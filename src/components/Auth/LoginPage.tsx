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
      navigate('/arbitrage-tracker');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 flex flex-col">
      {/* Navigation */}
      <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-bold text-gray-900 hover:text-primary transition-colors">
              Bettor-IQ
            </Link>
          </div>
        </div>
      </nav>

      {/* Auth Container */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="bg-white px-8 py-10 shadow-lg rounded-2xl border border-gray-100">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Welcome to Bettor-IQ
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Sign in or create an account to access powerful betting tools
              </p>
            </div>

            {/* Auth UI */}
            <Auth
              supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: '#1edb95',
                      brandAccent: '#1bc585',
                    },
                  },
                },
                style: {
                  button: {
                    background: '#1edb95',
                    color: 'white',
                    borderRadius: '0.5rem',
                  },
                  anchor: {
                    color: '#1edb95',
                    textDecoration: 'none',
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

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-600">
            By signing up, you agree to our{' '}
            <a href="#" className="text-primary hover:text-primary-hover no-underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-primary hover:text-primary-hover no-underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;