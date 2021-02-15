import React, { Component } from 'react'
import Axios from 'axios'
import ReactMarkdown  from 'react-markdown';
class Courses extends Component {

    constructor(props) {
        super(props)

        this.state = {
            allcorse: [],
            inside:''
        }
    }
    componentDidMount() {
        console.log(this.props,"this.props this.props")
        Axios.get(`https://saral.navgurukul.org/api/courses/${this.props.location.state.id}/exercises`)
            .then(posRes => {
                console.log(posRes, 'lllll');
                // const allCourses = posRes.data.availableCourses;
                // console.log(posRes.data.data, "poooooooo")
                // this.setState({ allCourses:posRes.data.availableCourses});
                this.setState({ allcorse: posRes.data.data })
            })
            .catch(errRes => {
                console.log(errRes)

            })
    }
    handleMove(slug){
        console.log(slug,"hdfjsdjh");
        Axios.get(`https://saral.navgurukul.org/api/courses/${this.props.location.state.id}/exercise/getBySlug?slug=${slug}`)
                .then(posRes => {
                    console.log(posRes, 'ccccccccccccccc');
                    const Inside= posRes.data;

                    // this.setState({ inside: posRes.data })
                    this.setState({ inside: Inside })
    
                })
                .catch(errRes => {
                    console.log(errRes)
    
                })
    }

    render() {
    console.log(this.state.inside);
        const { allcorse } = this.state

        return (
            <div className="umesh">
               
                <div className='coursestext container-fluid' style={{ paddingTop:'100px'}}>
                    <div className="row">
                    <div className="col">
                    {allcorse.map(data =>
                        <div className=" card col-md-6" style={{ cursor:'pointer', width: '50rem',height:'80px',paddingTop:'30px' }} 
                        onClick={()=>this.handleMove(data.slug)}>
                                 {data.name}
                        </div>
                    )}
                    </div>
                    
                    <div className="col">
                        {this.state.inside.content ? <p><ReactMarkdown source={this.state.inside.content}>{this.state.inside.content }</ReactMarkdown></p>:null}
                    </div>
                </div>
                </div>

            </div>




        )
    }
}
export default Courses;









 {/* <div className="coloumn"> */}
                            {/* <ul className="list-group list-group-flush">
                                <li className="list-group-item"  */}
                                {/* style={{ fontFamily: "cursive", fontSize: "20px", border: '1px solid black',cursor:"pointer" }}>
                                    {data.name} */}
                                    {/* </li>
                            </ul> */}
                            {/* </div> */}
