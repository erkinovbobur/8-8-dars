import { SubmitHandler } from 'react-hook-form'; 
import { useLoginMutation } from '../../api/authApi';
import { useNotification } from '../../hooks/useNotification';
import AuthForm from './AuthForm';

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const notify = useNotification();
  const [login] = useLoginMutation();

  const handleLogin: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      await login(data).unwrap();
      notify('Login successful!', 'success');
    } catch (error: any) {
      notify('Login failed! Please check your credentials.', 'error');
    }
  };

  return <AuthForm onSubmit={handleLogin} title="Login" />;
};

export default Login;

