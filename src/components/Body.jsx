import React, {Component} from "react";
import Nav from "./Nav";

class Body extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    render(){
        const increment = () => {
            let currentCount = this.state.count + 1
            this.setState({count: currentCount})
        }
        return(
            <React.Fragment>
                <button type="button" class="btn btn-dark" onClick={increment}>
                    {this.state.count}
                </button>
                <Nav count={this.state.count} incrementFunc={increment} />
            </React.Fragment>
        )
    }

}
export default Body;