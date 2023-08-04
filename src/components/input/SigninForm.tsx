import useInputRef from '../../hooks/useInputRef';
import { sendData } from '../../lib/api/api';
import { useNavigate} from 'react-router-dom';
import { setToken } from '../../lib/utils/token';

export default function SigninForm() {
  const navigate=useNavigate();
  const { emailRef, emailChangeHandler, pwRef, pwChangeHandler, pass } =
    useInputRef();

    const loginHanlder=()=>{
      if(emailRef.current&&pwRef.current){
        const data={'email':emailRef.current.value,'password':pwRef.current.value};
        sendData('auth/signin','post',data)
        .then((data)=>{
          setToken(data.access_token);
          navigate('/todo');
        })
        .catch(()=>console.log('login failed'))
      }
    }

  return (
    <main>
      <label htmlFor='email'>이메일</label>
      <input
        data-testid='email-input'
        id='email'
        ref={emailRef}
        onChange={emailChangeHandler}
      />
      <label htmlFor='password'>패스워드</label>
      <input
        data-testid='password-input'
        id='password'
        ref={pwRef}
        onChange={pwChangeHandler}
      />
      <button
        data-testid='signin-button'
        disabled={!pass}
        className={`${pass ? '' : 'disable'}`}
        onClick={loginHanlder}
        >
        로그인
      </button>
    </main>
  );
}
