import React,{Component} from 'react';
 
class Header extends Component {
    // handleChange=()=> {
    //     this.props.onSubmit('Test');
    // }
    handleKeyUp =(event)=>{
        //console.log(event.keyCode)
        if(event.keyCode===13){
            //console.log('Test',this.InputElement);
            this.props.onSubmit(this.InputElement.value);
            console.log(this.props);
            this.InputElement.value='';

        }
    }

    render(){
        return (
            <header className="header">
            <h1>Todo headDER</h1>
                <input 
                    type ="text" 
                    className="new-todo"
                    //onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                    ref={node => this.InputElement = node  }
                 />
            </header>
        )
    }
}
export default Header;