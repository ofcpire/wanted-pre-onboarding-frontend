import { useEffect } from 'react';
import { getToken } from '../lib/utils/token';
import { useNavigate } from 'react-router-dom';
import SigninForm from '../components/auth/SigninForm';
import { Main } from '../styles/mainStyle';

export default function SigninPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken()) navigate('/todo');
  }, []);

  return (
    <Main>
      <SigninForm />
    </Main>
  );
}
