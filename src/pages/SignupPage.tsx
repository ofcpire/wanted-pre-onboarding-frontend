import { useEffect } from 'react';
import { getToken } from '../lib/utils/token';
import { useNavigate } from 'react-router-dom';
import SignupForm from '../components/auth/SignupForm';
import { Main } from '../styles/mainStyle';

export default function SignupPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken()) navigate('/todo');
  }, []);

  return (
    <Main>
      <SignupForm />
    </Main>
  );
}
