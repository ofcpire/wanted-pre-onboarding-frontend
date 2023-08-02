import useInputRef from '../../hooks/useInputRef';

export default function SignupForm() {
  const { emailRef, emailChangeHandler, pwRef, pwChangeHandler, pass } =
    useInputRef();

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
        className={`${pass ? '' : 'disable'}`}>
        회원가입
      </button>
    </main>
  );
}
