import React from 'react';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component{

    //State
    state = {
        firstName:'',
        lastName:'',
        arrJobs:[
            {id:"Job1", title:"Developer", salary:"500"},
            {id:"Job2", title:"Tester", salary:"400"},
            {id:"Job3", title:"Manager", salary:"1000"}
        ]
    }

    handleChangeFirstName = (event) =>{
        this.setState  ({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) =>{
        this.setState  ({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        //フォームRefresh抑止
        event.preventDefault()
        alert()
    }

    //JSX
    render()  {
        console.log('Console State: ',this.state)
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input type="text" value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    /><br/>

                    <label htmlFor="lname">Last name:</label><br/>
                    <input type="text" value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    /><br/><br/>
                    <input type="submit" value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form> 
                <ChildComponent 
                    name={this.state.firstName} 
                    age="28"
                    arr={this.state.arrJobs}
                />
            </>
        )
    }
}

// export default MyComponent;
export {MyComponent};