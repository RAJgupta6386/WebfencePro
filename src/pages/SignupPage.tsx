
import { AuthLayout } from '@/components/auth/AuthLayout';
import { SignupForm } from '@/components/auth/SignupForm';

const SignupPage = () => {
  return (
    <AuthLayout 
      title="Create your account"
      subtitle="Get started with WebFencePro and secure your web applications"
    >
      <SignupForm />
    </AuthLayout>
  );
};

export default SignupPage;
