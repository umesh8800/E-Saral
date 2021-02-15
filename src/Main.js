import React, { Component } from 'react';
import axios from 'axios';
import {Link,Redirect} from 'react-router-dom';



class Main extends Component {



    constructor(props) {
        super(props)

        this.state = {
            allCourses: [],
            id:''


        }
    }

    componentDidMount() {
        axios.get('https://saral.navgurukul.org/api/courses')
            .then(posRes => {
                // const allCourses = posRes.data.availableCourses;
                console.log(posRes.data.availableCourses, "poooooooo")
                // this.setState({ allCourses:posRes.data.availableCourses});
                this.setState({ allCourses: posRes.data.availableCourses })
            })
            .catch(errRes => {
                console.log(errRes)

            })
    }
handleMove(id){
    console.log(id)
    this.setState({id:id})
}


    render() {
        // console.log(this.state.allCourses,"dsahkjfasdkjfkjash")
        console.log(this.state.allCourses, "rtyuiop");
        const { allCourses } = this.state
        return (
            <>


            <div className="container" style={{paddingTop:100}}>
                <div className="row">
                {allCourses.map(each =>
                    <div className="col-md-4">
                        <div className="card mb-3" style={{maxwidth:'50rem'}}>
                            <div className="row no-gutters" style={{cursor:'pointer'}} onClick={() =>this.handleMove(each.id)}>
                                <div className="col-md-4">
                                    <img src={each.logo} className="card-img" alt="..."></img>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{each.name}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
                </div>
            </div>
            {this.state.id ? <Redirect
            to={{
            pathname: "/course",
            state: { id: this.state.id}
          }}
        />:null}

            </>
            
        )
    }
}
export default Main;