import useInputRef from '../../hooks/useInputRef';

export default function SigninForm() {
  const { emailRef, emailChangeHandler, pwRef, pwChangeHandler, pass } =
    useInputRef();

    const loginHanlder=()=>{
      if(emailRef.current&&pwRef.current){
        const data={'email':emailRef.current.value,'password':pwRef.current.value}
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
        className={`${pass ? '' : 'disable'}`}
        onClick={loginHanlder}
        >
        로그인
      </button>
    </main>
  );
}
