import { useState, useEffect, ChangeEvent,useRef } from 'react';

export default function useInputRef () {
  const emailRef=useRef<HTMLInputElement | null>(null);
  const pwRef=useRef<HTMLInputElement | null>(null);
  const [emailvalid,setEmailvalid]=useState(false);
  const [pwValid,setPwValid]=useState(false);
  const [pass,setPass]=useState(false);

  const emailChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
    if(emailRef.current) {
      if(emailRef.current.value.includes('@')) setEmailvalid(true);
      else setEmailvalid(false);
    }
  }
  const pwChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
    if(pwRef.current) {
      if(pwRef.current.value.length>=8) setPwValid(true);
      else setPwValid(false);
    }
  }

  useEffect(()=>{
    setPass(emailvalid&&pwValid);
  },[emailvalid,pwValid])

  return {emailRef,emailChangeHandler,pwRef,pwChangeHandler,pass};
}

