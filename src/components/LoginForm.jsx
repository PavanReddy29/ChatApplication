import { useState } from 'react';
import axios from 'axios';

const projectID = 'b94397cc-5385-4223-a22e-d0ba0e4df10c';

const LoginForm = () => {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const authObject = {'project-ID':projectID, 'user-name':username, 'user-secret':password};

        try{
            await axios.get('https://api.chatengine.io/chats',{headers:authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            setError('');
        }
        catch(err){
            setError("Incorret login crendentials");
        }

    };

    return(
        <div className ="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit = {handleSubmit}>
                    <input type="text" value={username} onChange ={(e) => setUsername(e.target.value)} 
                    className="input" placeholder="Username" required/>

                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    className="input" placeholder="Password" required />

                    <div align="center">
                        <button className="button">
                            <span>Start Chatting....</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    );

};

export default LoginForm;