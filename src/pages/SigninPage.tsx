import {useEffect} from 'react';
import { getToken } from '../lib/utils/token';
import { useNavigate } from 'react-router-dom';
import SigninForm from "../components/auth/SigninForm";

export default function SigninPage() {
  const navigate=useNavigate();

  useEffect(()=>{
    if(getToken()) navigate('/todo');
  },[])

  return (
    <SigninForm/>
  );
}
