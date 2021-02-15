// import React, { Component } from 'react'
// import Axios from 'axios'
// import Courses from './Courses'

// class Insidecourse extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             inside:''
//         }
//     }
//     // componentDidMount() {
//     //     console.log(this.props)
//     //     Axios.get(`https://saral.navgurukul.org/api/courses/ ${this.props.location.state.id} /exercise/getBySlug?slug= ${slug}`)
//     //         .then(posRes => {
//     //             console.log(posRes, 'lllll');

//     //             this.setState({ inside: posRes.data })
//     //         })
//     //         .catch(errRes => {
//     //             console.log(errRes)

//     //         })
//     // }
// handleMove(slug){
//     console.log(slug);
//     Axios.get(`https://saral.navgurukul.org/api/courses/ ${this.props.location.state.id} /exercise/getBySlug?slug= ${slug}`)
//             .then(posRes => {
//                 // console.log(posRes, 'lllll');
//                 const Inside= posRes.data;

//                 // this.setState({ inside: posRes.data })
//                 this.setState({ inside: Inside })

//             })
//             .catch(errRes => {
//                 console.log(errRes)

//             })
// }

//     render() {
//         const { inside } = this.state

//         return (

//             <div>
//                 {/* <Courses/> */}
//                 <p onClick={()=>this.handleMove(inside.slug)}>
//                     {this.state.inside.content}
//                 </p>

//             </div>
//         )
//     }
// }
// export default Insidecourse;