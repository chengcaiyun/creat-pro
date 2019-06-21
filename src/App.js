import React,{Component} from 'react';
 import {
  Home,Buycar, List, Mine
} from "./components/pages"
import {Route,Switch,withRouter} from "react-router-dom"
import AppFooter from "./components/commons/AppFooter"
class App extends Component{
  renderNavs(){
    let {navs} = this.props;
    return (
        <Switch>
          {
            navs.map(item=>{
              return (
                <Route key={item.id} path={item.path} component={item.component} exact={item.exact}/>
              )
            })
          }
        </Switch>
    )
  }
  renderFooter(){
    let {pathname} = this.props.location;
    if(pathname === "/mine/login") return ""
    return <AppFooter />
  }
  render(){
    return (
      <div>
       {this.renderNavs()}
       {this.renderFooter()}
      </div>
    )
  }
}
App.defaultProps = {
  navs:[
    {id:1,path:"/",component:Home,exact:true},
    {id:2,path:"/list",component:List,exact:false},
    {id:3,path:"/buycar",component:Buycar,exact:false},
    {id:4,path:"/mine",component:Mine,exact:false},
  ]
}
export default withRouter(App);
