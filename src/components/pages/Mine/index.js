import React,{Component} from "react"
import "./index.scss"
import Login from "./Login"
import User from "./User"
import {Route} from "react-router-dom"

class Mine extends Component{
    render(){
        return (
            <div>
                <Route path="/mine/login" component={Login} />
                <Route path="/mine/user" component={User} />
                Mine
            </div>
        )
    }
}
export default Mine