import React from 'react';

//Class Component
class ChildComponent extends React.Component{

    state = {
        showJobs:false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    //JSX
    render()  {
        // let name = this.props.name;
        // let age = this.props.age;

        //定義名称はPropsのKeyと合わないと動けない。
        let {name,age,arr} = this.props;
        let {showJobs}= this.state;
        return (
            <>
                {/* {!showJobs &&
                    <div><button onClick={() => this.handleShowHide()}>Show</button></div>
                }
                {showJobs && 
                    <>
                        <div className='job-lists'>
                        {
                            arr.map((item,index) => {
                                return (
                                    //更新ターゲット特定するため、Keyが必要です。スペース最適化の為。
                                    <div key={item.id}>{item.title} - {item.salary}</div>
                                )
                            })
                        }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()} >Hide</button></div>
                    </>
                } */}

                {showJobs?
                <div><button onClick={() => this.handleShowHide()}>Show</button></div>
                :
                <>
                    <div className='job-lists'>
                    {
                        arr.map((item,index) => {
                            return (
                                //更新ターゲット特定するため、Keyが必要です。スペース最適化の為。
                                <div key={item.id}>{item.title} - {item.salary}</div>
                            )
                        })
                    }
                    </div>
                    <div><button onClick={() => this.handleShowHide()} >Hide</button></div>
                </>
                }
            </>
        )
    }
}

//Function Component
// const ChildComponent = (props) => {
//     let {arr} = props;
//     return (
//         <>
//             <div className='job-lists'>
//                 {
//                     arr.map((item,index) => {
//                         return (
//                             //更新ターゲット特定するため、Keyが必要です。スペース最適化の為。
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;
// export {ChildComponent};