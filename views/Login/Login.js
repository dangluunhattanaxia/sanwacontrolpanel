import React from 'react';
import './Login.scss'
class Login extends React.Component {
    /* 
    JSX => return block
    fragment
    */
    render() {
        return (
            <>
            <div class="container d-flex justify-content-center login_base_container">
                <form className="form-login align-self-center border">
                    <div class="container-fluid justify-content-md-center form_header">
                        遠隔操作システム ログイン
                    </div>

                    <div class="container form_inner_container">
                        <h1>LOGIN</h1>
                        <div class="alert alert-danger" role="alert">
                            ID、パスワードが正しくないため、<br/>ログインできませんでした!
                        </div>
                        
                        <div class="row d-flex align-items-center form_row">
                            <h4 class="col-3">ログインID:</h4>
                            <div class="col-9">
                                <input type="email" className="form-control"/>
                            </div>
                        </div>

                        <div class="row d-flex align-items-center form_row">
                            <h4 class="col-3">パスワード:</h4>
                            <div class="col-9">
                                <input type="password" className="form-control"/>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div class="col-3"> </div>
                            <button type="submit" className="col-2 btn btn-primary btn-lg fw-bold">Login</button>
                        </div>
                    </div>
                </form>
            </div>
                
            </>
        )
    }
}

export default Login;
