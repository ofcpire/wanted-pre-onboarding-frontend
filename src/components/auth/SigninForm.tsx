import useInputRef from '../../hooks/useInputRef';
import { sendData } from '../../lib/api/api';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../lib/utils/token';
import { AuthForm } from '../../styles/authStyle';
import { Section, Button, Input } from '../../styles/mainStyle';

export default function SigninForm() {
  const navigate = useNavigate();
  const { emailRef, emailChangeHandler, pwRef, pwChangeHandler, pass } =
    useInputRef();

  const loginHanlder = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (emailRef.current && pwRef.current) {
      const data = {
        email: emailRef.current.value,
        password: pwRef.current.value,
      };
      sendData('auth/signin', 'post', data)
        .then((data) => {
          setToken(data.access_token);
          navigate('/todo');
        })
        .catch(() => console.log('login failed'));
    }
  };

  const returnHandler = () => {
    navigate('/');
  };

  return (
    <Section>
      <div className='section-title'>
        <h1>로그인</h1>
        <button onClick={returnHandler}>↶</button>
      </div>
      <AuthForm>
        <label htmlFor='email'>이메일</label>
        <Input
          data-testid='email-input'
          id='email'
          ref={emailRef}
          onChange={emailChangeHandler}
        />
        <label htmlFor='password'>패스워드</label>
        <Input
          data-testid='password-input'
          id='password'
          ref={pwRef}
          onChange={pwChangeHandler}
        />
        <Button
          data-testid='signin-button'
          disabled={!pass}
          className={`${pass ? '' : 'disable'}`}
          onClick={loginHanlder}>
          로그인
        </Button>
      </AuthForm>
    </Section>
  );
}
