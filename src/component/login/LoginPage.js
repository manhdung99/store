import React from "react";
import "./login.scss";
import { useState ,useEffect,useRef} from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
 const Login = ({updateIsLogin,isLogin}) => {

    const [error,setError] = useState(false)
    const [isUserEmpty,setIsUserEmpty] = useState(false)
    const [isPassEmpty,setIsPassEmpty] = useState(false)
    const [accout,setAccout] =  useState({
        username:'',
        password :''
    });
    const hidePassRef = useRef()
    const showPassRef = useRef()
    const passInput = useRef()
    const history = useHistory()
    const userAccout = {
        username: 'DungNM25',
        password : "123456"
    }
    
    useEffect(()=>{
      if(isLogin === true){
        history.push('/store/')
      }
    })
    const handleLogin = () =>{
        if(accout.username === ''){
            setIsUserEmpty(true)
        }else{
            setIsUserEmpty(false)
        } 

        if(accout.password === ''){
            setIsPassEmpty(true)
        } else{
            setIsPassEmpty(false)
        }
        if(accout.password !== '' && accout.username !== ''){
            if(accout.username === userAccout.username && accout.password === userAccout.password){
               updateIsLogin(true)
               history.push('/store/')
           }else{
               setError(true)
           }
        }
    } 
    const handleChangeUser = (e) =>{
        setError(false)
        setAccout({...accout,username:e.target.value})
    }
    const handleChangePassWord = (e) =>{
        setError(false)
        setAccout({...accout,password:e.target.value})
    }
    document.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
       event.preventDefault();
       handleLogin();
      }
    })
    const handleShowPass = () =>{
      showPassRef.current.style.display = 'none'
      hidePassRef.current.style.display = 'block'
      passInput.current.type = 'text'
    }
    const handleHidePass = () =>{
      showPassRef.current.style.display = 'block'
      hidePassRef.current.style.display = 'none'
      passInput.current.type = 'password'
    }
  return (
      <div className = "login-page">
        <div className = "user-and-pass">
        <span>User:DungNM25</span>
        <span>Pass:123456</span>
        </div>
    <div className="login-container">
      <h1 className="login-title">Accout Login</h1>
      <div className="login-form">
        <label className="login-label" htmlFor=" ">
          UserName
        </label>
        <input className="login-input"
         value = {accout.username} onChange = {e =>handleChangeUser(e)}  />
         {error && <span className = "login-invalid">username or password is wrong!</span>}
         {isUserEmpty && <span className = "login-invalid">User is empty!</span>}
      </div>
      <div className="login-form">
        <label className="login-label" htmlFor=" ">
          PassWord
        </label>
        <span onClick = {()=> handleShowPass()} className = "showPassIcon" ref = {showPassRef} ><FontAwesomeIcon icon = {faEye} /> </span>
        <span onClick = {()=> handleHidePass()} className = "hidePassIcon" ref = {hidePassRef} ><FontAwesomeIcon icon = {faEyeSlash} /></span>
        <input className="login-input" type = "password" ref = {passInput}
         value = {accout.password} onChange = {e =>handleChangePassWord(e)}   />
         {error && <span className = "login-invalid">username or password is wrong!</span>}
         {isPassEmpty && <span className = "login-invalid">Password is empty!</span>}
      </div>
      <div className="login-selection">
        <div className="login-remember">
          <input className="remember-input" type="checkbox" />
          <label className="remember-label"> Remember Me</label>
        </div>
        <label className="forgot-label"> Forgot PassWord?</label>
      </div>
      <button className="login-btn" onClick = {() => handleLogin()}>Log in</button>
    </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isLogin :state.isLogin
  };
};

const mapDispatchToProps  = (dispatch) =>{
    return {
        updateIsLogin : (value) => dispatch({type:'UPDATE_LOGIN',payload:value})
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Login)

