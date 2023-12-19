import React,{useState} from "react";

const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');


    const handleLogin = async () => {
        // ログインリクエストの送信
        const response = await fetch('/login',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({username,password})
        })
        const data = await response.json()
        console.log(data);
    }

    return (
        <div>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;
