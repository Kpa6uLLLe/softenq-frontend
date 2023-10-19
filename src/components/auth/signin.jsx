function showContent(token){
    let config = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    }
    fetch("http://localhost:3000/api/test/all", config)
    .then((res) => {
        return res.text();
    })
    .then((text) => {
        all.innerHTML = text;
    });
    fetch("http://localhost:3000/api/test/admin", config)
    .then((res) => {
        return res.text();
    })
    .then((text) => {
        admin.innerHTML = text;
    });
    fetch("http://localhost:3000/api/test/mod", config)
    .then((res) => {
        return res.text();
    })
    .then((text) => {
        mod.innerHTML = text;
    });
    fetch("http://localhost:3000/api/test/user", config)
    .then((res) => {
        return res.text();
    })
    .then((text) => {
        user.innerHTML = text;
    });
}

function SignIn() {
  return (
    <>
        <h3>signin</h3>
      <form onSubmit={async (event) => {
        event.preventDefault();
        let form = document.getElementById('signin');
        let dataJson = {
            username : form.querySelector('input[name="username"]').value,
            password : form.querySelector('input[name="password"]').value
        }
        console.log(dataJson);
        let response = await fetch("http://localhost:3000/api/auth/signin", {
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
                let token = data.accessToken;
                showContent(token);
            });
      }} id = "signin" method = "POST">
          <input className = "form-field" name='username' type="text" placeholder='username'/>
          <input className = "form-field" name='password' type="text" placeholder='password'/>
          <input type="submit" value = "Login and show content"/>
    </form>
    <div id="all">
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
