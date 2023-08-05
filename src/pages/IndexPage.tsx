import { Main, Section, Button } from '../styles/mainStyle';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../lib/utils/token';

export default function IndexPage() {
  const navigate = useNavigate();
  useEffect(()=>{
    if(getToken()) navigate('/todo');
  },[])

  return (
    <Main>
      <Section>
        <div className='section-title'>TODO APP</div>
        <div className='content-wrapper'>
          <Button onClick={() => navigate('/signin')}>로그인</Button>
          <Button onClick={() => navigate('/signup')}>회원가입</Button>
        </div>
      </Section>
    </Main>
  );
}
