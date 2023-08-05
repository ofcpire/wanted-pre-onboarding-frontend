import styled from "styled-components";

export const AuthForm=styled.form`
width: 100%;
display: flex;
flex-direction: column;
color:#0261a6;
label {
  margin:10px 5px 5px;
}
input {
  box-sizing: border-box;
  padding:5px;
  color:#0261a6;
  border-radius: 5px;
  margin: 5px 5px 0px;
  border:1px solid #0261a6;
  &:focus {
    box-shadow: 0px 0px 0px 1px #0261a6;
  }
}

`