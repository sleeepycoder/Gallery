import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
function Register() {
  return (
    <Wrap>
<Image>
<img src='https://thumbs.dreamstime.com/b/portrait-photographer-covering-her-face-camera-86057698.jpg'/>

</Image>
<Form>
<Input placeholder='First Name'/>
<Input placeholder='Last Name'/>
<Input placeholder='Email'/>
<Input placeholder='PhoneNumber'/>
<Input placeholder='Password'/>
<Link to = {`/`} >
<Button>SignUp</Button>
              </Link>



</Form>

    </Wrap>

  )
}

export default Register;


const Wrap= styled.div`
display: grid;
grid-gap: 25px;
display: grid;
  grid-template-columns: auto auto auto;
padding: 30px 0px 26px;
` 
const Image =styled.div`

`

const Form =styled.div`
margin-top: 60px;
 display: flex;
  align-items: center;
  flex-direction: column;
    align-items: stretch;
 
`

const Input =styled.input`
vertical-align: middle;
  margin: 20px 10px 5px 0;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
`
const Button =styled.button`
  padding: 10px 20px;
  margin:20px 10px 5px 0;
  background-color: dodgerblue;
  border: 1px solid #ddd;
  color: white;
  cursor: pointer;

  &:hover {
  background-color: royalblue;
  }
`