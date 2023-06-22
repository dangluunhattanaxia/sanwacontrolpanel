import React from 'react';
import './Auth.scss'
class Auth extends React.Component {


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

        this.setState({
            arrJobs: [...this.state.arrJobs, job]
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
                </form>
            </>
        )
    }
}

export default Auth;
