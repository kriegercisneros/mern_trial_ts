import React, { useState } from 'react'
import getConfig from 'next/config'
import Router from 'next/router'

//below: we are declaring a constant that represents a functional component (FC) 
//-- generic type in TS
const Login: React.FC = ()=>{
    //invokes the useState function with an intial value of an empty string ('')
    //<string> is a ts annotation that indicates we are expeciting the state value of 
    //email to always be a string
    const [email, setEmail] = useState<string>('') 
    const [password, setPassword] = useState<string>('');
    //signifies that error state can either hold an error or null, initialized to null
    const [error, setError] = useState<Error | null>(null)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value } = event.target;
        if (name === 'email'){
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };
    //void is the typescript way to specify's the function's return type, so void doen't return 
    //a value
    const handleLogin = (): void  => {
        //below is object destructuring -- it extracts the publicRuntimeConfig property from
        //the object that gitConfig() returns.  after this line, you can use publicRuntimeConfig 
        //as a constant
        const { publicRuntimeConfig } = getConfig();
        const apiUrl = publicRuntimeConfig.apiUrl;

        //the fetch is simply like react.JS
        fetch(`${apiUrl}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then((resp) => resp.json())
        //again, below is the reason for type script: we are specifying the type of object to leverage 
        //type-checking capabilities.  this way code is more predictable with ability to get compile-
        //time errors for type mismatches and make the code more self-documenting
        .then((data: {message:string }) => {
            if(data.message.includes("Login successful")){
                Router.push('/logout');
            } else {
                throw new Error(data.message || 'Login failed');
            }
        })
        .catch((error: Error) => {
            setError(error)
        });
    };
    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
            <h2>Login</h2>
            <input
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={handleInputChange}
            />
            <input
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={handleInputChange}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;