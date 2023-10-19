import React, {Component} from "react";

export default class SignUp extends Component{
    constructor(){
        super();
    }

    render(){
        return <>
        <h3>signup</h3>
        <form onSubmit={async (event) => {
            event.preventDefault();
            let form = document.getElementById('signup');
            let dataJson = {
                username : form.querySelector('input[name="username"]').value,
                password : form.querySelector('input[name="password"]').value,
                email : form.querySelector('input[name="email"]').value,
                roles: ["user"]
            }
            console.log(dataJson);
            let response = await fetch("http://localhost:3000/api/auth/signup", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataJson)
                })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data.message);
                    message.innerHTML = data.message;
                });
        }} id = "signup">
            <input className = "form-field" name='username' type="text" placeholder='username'/>
            <input className = "form-field" name='email' type="text" placeholder='email'/>
            <input className = "form-field" name='password' type="text" placeholder='password'/>
            <input type="submit" value = "Sign Up"/>
        </form>
        <div id="message"></div>
        </>
    }
}