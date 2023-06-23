import React from 'react';
import './Auth.scss'
class Auth extends React.Component {
    /* 
    JSX => return block
    fragment
    */
    render() {
        return (
            <>
            <div class="container d-flex justify-content-center login_base_container">
                <form className="form-auth align-self-center border">
                    <div class="container-fluid justify-content-md-center form_header">
                        遠隔操作システム ログイン
                    </div>

                    <div class="container form_inner_container">
                        <h1>LOGIN</h1>
                        <div class="alert alert-secondary" role="alert">
                            入力したログインIDに認証コードを送信しました。<br/>メールに記載された認証コードを入力してください。
                        </div>

                        <div class="row d-flex align-items-center form_auth_row">
                            <h4 class="col-3">認証コード:</h4>
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

export default Auth;
