import React, {Component} from 'react';
import {CtxConsumer} from '../index'


class Footer extends Component {

    state = {
        //name : 'Kryst',
        name : '',
        age : 35,
        isLoggedIn : false
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

        //const animals = ['cat', 'dog', 'horse']

        return (
            <CtxConsumer>
                {(context) => {
                    <div>
                        {context.animals.map(animal => { 
                                        return (
                                            <div key= {animal}> 
                                                <h2>{animal}</h2>
                                            </div>
                                        )
                                    })}
                    </div>
                }}
            </CtxConsumer>
        )

        // return (
        //     <div>
        //         {animals.map(animal => { 
        //             return (
        //                 <div key= {animal}> {/**animal.id if the data is not unique */}
        //                     <h2>{animal}</h2>
        //                     <h2>{animal}</h2>
        //                 </div>
        //             )
        //         })}
        //     </div>
        // )




        //console.log(this.state.name)
        /* 
        return (
            <div>
                {this.state.isLoggedIn === true ? (
                    <React.Fragment>
                    <h1 onClick = {this.props.myAlert}>
                    {this.props.trademark}
                    </h1>
                    <input value = {this.state.name}
                        onChange = {this.changed} //{this.changed.bind(this)} if we dont use arrow functions
                        type = 'text'/>
                    {this.state.age == 35 ? 'yes' : 'no'}
                </React.Fragment>
                ) : 
                (
                    <React.Fragment>
                        <h2>You cant see this Content</h2>
                        <h2>You must be login</h2>
                    </React.Fragment>
                )}
                
            </div>
            )
          */  
    }
}

export default Footer;