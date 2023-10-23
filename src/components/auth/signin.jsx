import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
function showContent(token){
    let config = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    }
    fetch("api/test/all", config)
    .then((res) => {
        return res.text();
    })
    .then((text) => {
        all.innerHTML = text;
    });
    fetch("api/test/admin", config)
    .then((res) => {
        return res.text();
    })
    .then((text) => {
        admin.innerHTML = text;
    });
    fetch("api/test/mod", config)
    .then((res) => {
        return res.text();
    })
    .then((text) => {
        mod.innerHTML = text;
    });
    fetch("api/test/user", config)
    .then((res) => {
        return res.text();
    })
    .then((text) => {
        user.innerHTML = text;
    });
}
let count = 0;
const max_count = 3;
function SignIn() {
  return (
    <>
        <h3>signin</h3>
      <div className="form">
        <form onSubmit={async (event) => {
            event.preventDefault();
            if(count >= max_count){
                return;
            }
            let form = document.getElementById('signin');
            let dataJson = {
                username : form.querySelector('input[name="username"]').value,
                password : form.querySelector('input[name="password"]').value
            }
            console.log(dataJson);
            let response = await fetch("api/auth/signin", {
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
                    if(data.accessToken != null){
                        window.location.assign('/login_succeed');
                    }
                    else {
                        count++;
                        if(max_count - count > 0){
                            all.innerHTML = "Invalid password or username. Attempts remained: " + (max_count - count);
                        }
                        else{
                            all.innerHTML = "Too many unsuccessful attempts. Please try again later ";
                        }
                        
                    }
                });
        }} id = "signin" method = "POST">
            <input className = "form-field" name='username' type="text" placeholder='username'/>
            <input className = "form-field" name='password' type="text" placeholder='password'/>
            <input type="submit" value = "Login"/>
        </form>
      </div>
    <div  id="all">
    </div>
    <div id="user">

    </div>
    <div id="mod">

    </div>
    <div id="admin">

    </div>
    
    </>
  )
}

export default SignIn
