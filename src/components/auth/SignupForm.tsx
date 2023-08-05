import useInputRef from '../../hooks/useInputRef';
import { sendData } from '../../lib/api/api';
import { AuthForm } from '../../styles/authStyle';
import { Section, Button, Input } from '../../styles/mainStyle';
import { useNavigate } from 'react-router-dom';

export default function SignupForm() {
  const { emailRef, emailChangeHandler, pwRef, pwChangeHandler, pass } =
    useInputRef();
  const navigate = useNavigate();

  const signupHanlder = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (emailRef.current && pwRef.current) {
      const data = {
        email: emailRef.current.value,
        password: pwRef.current.value,
      };
      sendData('auth/signup', 'post', data)
        .then(() => {
          alert('회원가입 되었습니다.');
        })
        .catch(() => console.log('signup failed'));
    }
  };

  const returnHandler = () => {
    navigate('/');
  };

  return (
    <Section>
      <div className='section-title'>
        <h1>회원가입</h1>
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
          data-testid='signup-button'
          disabled={!pass}
          className={`${pass ? '' : 'disable'}`}
          onClick={signupHanlder}>
          회원가입
        </Button>
      </AuthForm>
    </Section>
  );
}
