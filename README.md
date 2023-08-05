# 원티드 프리온보딩 프론트엔드 사전과제
## 개요
create-react-app을 통해 제작한 Todo 사이트입니다. 로그인, 회원가입, CRUD 기능이 있습니다.
## 지원자 명
이세환입니다.
## 배포 주소
데모 영상은 배포 주소로 대체합니다.
[todo-app-ofcpire.netlify.app](todo-app-ofcpire.netlify.app)
## 프로젝트 실행 방법
```
git clone https://github.com/ofcpire/wanted-pre-onboarding-frontend.git
npm install
npm start
```
## 프로젝트 구조
```
src  
 ┣ @types  
 ┃ ┗ index.d.ts  
 ┣ components  
 ┃ ┣ auth  
 ┃ ┃ ┣ SigninForm.tsx  
 ┃ ┃ ┗ SignupForm.tsx  
 ┃ ┗ todo  
 ┃ ┃ ┣ TodoItem.tsx  
 ┃ ┃ ┗ TodoMain.tsx  
 ┣ hooks  
 ┃ ┗ useInputRef.tsx  
 ┣ lib  
 ┃ ┣ api  
 ┃ ┃ ┗ api.tsx  
 ┃ ┗ utils  
 ┃ ┃ ┗ token.tsx  
 ┣ pages  
 ┃ ┣ IndexPage.tsx  
 ┃ ┣ SigninPage.tsx  
 ┃ ┣ SignupPage.tsx  
 ┃ ┗ TodoPage.tsx  
 ┣ styles  
 ┃ ┣ authStyle.tsx  
 ┃ ┣ globalStyle.tsx  
 ┃ ┣ mainStyle.tsx  
 ┃ ┗ todoStyle.tsx  
 ┣ App.tsx  
 ┗ index.tsx
```
@types : 프로젝트 전반에 사용되는 type, interface를 정리합니다.
components : 각 페이지에 사용될 하위 컴포넌트들입니다.
hooks : React custom hook을 위한 폴더입니다.
lib : 프로젝트에서 사용되는 함수들을 정리합니다.
┗api : API 요청용 함수 폴더입니다.
┗utils : 일반 함수 폴더입니다.
pages : 라우터에서 직접적으로 호출되는 페이지 컴포넌트들입니다.
styles : styled-components들을 정리합니다.

## 프로젝트 가이드라인
커밋에는 gitmoji를 사용합니다.

## 프로젝트 기술 스택
- React
- Typescript
- HTML
- CSS
- Axios
- React-router-dom
- styled-components