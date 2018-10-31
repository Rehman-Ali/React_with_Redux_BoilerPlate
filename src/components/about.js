import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
class About extends Component {
    render() {
        return (
            <div>
                <h1>Hello About {this.props.abc}</h1>
                <Link to='/'>Go to Home</Link>
            </div>
        )
    }
}


function mapStatesToProps(state){
    return({
        abc:state.rootReducer.name
    })

}
function mapDispatchToProps(dispatch){
    return({

    })

}

export default connect(mapStatesToProps, mapDispatchToProps) (About);

