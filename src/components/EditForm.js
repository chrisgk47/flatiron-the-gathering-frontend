// import React, {Component} from 'react'

// class EditForm extends Component {
//     state = {
//         description: ''
//       }
    
    
//       handleSubmit = (e) => {
//         e.preventDefault()
//         this.props.addToCollection({...this.state})
//         this.setState({ 
//             description: ''
//         })
//       }
    
//       handleChange = (e) => {
//         this.setState({ [e.target.name]: e.target.value })
//       }
//     render() {
//         return (
//             <div className="edit">
//                 <form className="add-collection-form" onSubmit={this.handleSubmit}>
//                     <input 
//                     type="text" 
//                     name="description" 
//                     onChange={this.handleChange}
//                     placeholder="change description" 
//                     className="input-text"/>
//                     <br/>
//                     <input type="submit" name="submit" value="Create New Card" className="submit"/>
//                 </form>
//         )
//     }
// }
// export default EditForm;