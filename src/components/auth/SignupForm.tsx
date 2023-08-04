import useInputRef from '../../hooks/useInputRef';
import { sendData } from '../../lib/api/api';

export default function SignupForm() {
  const { emailRef, emailChangeHandler, pwRef, pwChangeHandler, pass } =
    useInputRef();

    const signupHanlder=()=>{
      if(emailRef.current&&pwRef.current){
        const data={'email':emailRef.current.value,'password':pwRef.current.value};
        sendData('auth/signup','post',data)
        .then((data)=>{})
        .catch(()=>console.log('signup failed'))
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
        data-testid='signup-button'
        disabled={!pass}
        className={`${pass ? '' : 'disable'}`}
        onClick={signupHanlder}
        >
        회원가입
      </button>
    </main>
  );
}
