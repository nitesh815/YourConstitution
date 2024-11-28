import React from 'react';
// import './App.css'; // If you want to move the styles to a CSS file
import './login.css'


const Login = () => {
    return (
        <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", margin: 0 }}>
           
            <div>
                <form className="login-form" action="/login" method="POST">
                    <div className="text-center mb-6">
                        <i className="fas fa-users fa-3x text-white"></i>
                    </div>
                    <div className="mb-4">
                        <i className="fas fa-user text-white"></i>
                        <input type="text" name="username" placeholder="Username" className="bg-white bg-opacity-20 text-white placeholder-white" />
                    </div>
                    <div className="mb-4">
                        <i className="fas fa-lock text-white"></i>
                        <input type="password" name="password" placeholder="Password" className="bg-white bg-opacity-20 text-white placeholder-white" />
                    </div>
                    <div className="options mb-4">
                        <label className="text-white">
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#" className="text-white"><i className="fas fa-envelope"></i> Forget Password</a>
                    </div>
                    <button type="submit">LOGIN</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
