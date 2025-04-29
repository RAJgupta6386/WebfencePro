
import { AuthLayout } from '@/components/auth/AuthLayout';
import { LoginForm } from '@/components/auth/LoginForm';

const LoginPage = () => {
  return (
    <AuthLayout 
      title="Sign in to your account"
      subtitle="Enter your credentials to access your WebFencePro dashboard"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
