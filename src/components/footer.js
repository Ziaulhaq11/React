import React, {Component} from 'react';

class Footer extends Component {

    state = {
        //name : 'Kryst',
        name : '',
        age : 35
    }

    componentDidMount() {
        this.setState({name : 'MyName'})
    }
    
    changed = (evt) => {
        //console.log(this.state.name)  
        //console.log('Changed', evt.target.value) Here it is showing the change but not below
        this.setState({name : evt.target.value})
        console.log(this.state.name) //Here it doesnt changes instantly it changes in the next cycle There in Render it will change
    }

    render() { 
        console.log(this.state.name)
        return (
            <div>
                <h1 onClick = {this.props.myAlert}>
                {this.props.trademark}
                </h1>
                <input value = {this.state.name}
                    onChange = {this.changed} //{this.changed.bind(this)} if we dont use arrow functions
                    type = 'text'/>
                {this.state.age == 36 ? 'yes' : 'no'}
            </div>
            )
            
    }
}

export default Footer;