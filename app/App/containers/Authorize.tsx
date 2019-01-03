import * as React from "react"
import LoginComponent from '../components/Authorize'
import {Organization} from '../components/Organization'

type MyProps = {};
type MyState = {
    login: string,
    password: string,
    isLoggedIn: boolean,
    isLoading: boolean,
    error: {
      login: boolean,
      password: boolean
    },
    [x: number]: any
};

export class Login extends React.Component<MyProps, MyState> {
  constructor(props:any) {
    super(props);
    this.state = {
            login: '',
            password: '',
            isLoggedIn: false,
            isLoading: false,
            error: {
                login: false,
                password: false
            }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  handleChange(e: any){
      const {name, value} = e.target
      this.setState({
              [name]: value
      })
  }
  handleSubmit(e:any){
      this.setState({isLoading: true});
      
      e.preventDefault();
      this.logIn(this.state.login, this.state.password);
  }
  logIn(log: string, pass: string) {
      if(log === "admin" && pass === "1"){
          this.setState({
              error: {
                  login: false,
                  password: false
              }
          });
          alert('Получилось');
          this.setState({isLoggedIn: true});
      } else {
          alert('Неполучилось');
          this.setState({
              error: {
                  login: (log === 'admin') ? false : true,
                  password: (pass === '1') ? false : true
              }
          });
      }
      setTimeout(
        function() {
        this.setState({isLoading: false});
    }
    .bind(this),
    1500
);
  }
logOut(){
    this.setState({isLoggedIn: false});
}
  render() {
      if(this.state.isLoading){
        return (
          <h1 className='col-2 vcenter mx-auto' style={{marginTop: '42vh'}}>Loading...</h1>
    );
      }else{return (
      (this.state.isLoggedIn) ? <Organization logOut={this.logOut}/> : <LoginComponent handleChange={this.handleChange} handleSubmit={this.handleSubmit} logIn={this.logIn} data= {this.state}/>
      )}
      

  }
}