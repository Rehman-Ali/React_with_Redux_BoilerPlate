import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { changeName } from "../store/action/action";
class Home extends Component {
constructor(props){
    super(props);
    this.state={
        username:''
    }
}
    _changeData(){
        this.props.mapChangeStateToProps(this.state.username)
        this.setState({
            username:''
        })
    }

_onchange(event){
    this.setState({
        username: event.target.value
    })
}


    render() {
        return (
            <div>
                <h1>Hello World {this.props.abc}</h1>
                <button onClick={this._changeData.bind(this)}>Change</button>
                <input type="text" value={this.state.username} onChange={this._onchange.bind(this)}/>

                <Link to='/about'>Go to About</Link>
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
          mapChangeStateToProps: (updatedUserName) =>{
              dispatch(changeName(updatedUserName))
          }
    })

}

export default connect(mapStatesToProps, mapDispatchToProps) (Home);

