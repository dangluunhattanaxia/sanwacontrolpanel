import React from 'react';
// import ChildComponent from './ChildComponent';
// import AddComponent from './AddComponent';
import './Login.scss'
// import React from 'react';
class Login extends React.Component {


    //key:value
    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Project managers', salary: '1000' }
        ]
    }

    addNewJob = (job) => {
        console.log('check job from parent: ', job)
        // let currenJobs = this.state.arrJobs;
        // currenJobs.push(job)

        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: currenJobs
        })
    }

    deleteAJob = (job) => {
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currenJobs
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('>> run didupdate: ', 'prev state: ', prevState, ' current state: ', this.state)
    }
    componentDidMount() {
        console.log('>>> run component did mount')
    }

    /* 
    JSX => return block
    fragment
    */

    //re-render
    render() {
        return (
            <>
                {/* <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                /> */}

                {/* <form className='center' style={{border:'1px solid black',width:"40%",alignContent:"center"}}>
                    <div className='login-title'>
                        <label style={{color:"white",background:"black"}}>遠隔操作システム　ログイン</label>
                    </div>
                    <div className='login-id'>
                        <label>ログインID：
                            <input type="text" />
                        </label>
                    </div>
                    <div className='login-pass'>
                        <label>パスワード：
                            <input type="text" />
                        </label>
                    </div>
                    
                </form> */}

                <form className="form-login">
                    <h3>Sign In</h3>
                    <div className="mb-3">
                        <label>
                            Email address:
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                        />
                        
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="mb-3">
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                            />
                            <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                            </label>
                        </div>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                        Submit
                        </button>
                    </div>
                    {/* <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                    </p> */}
                </form>
            </>
        )
    }
}

export default Login;
