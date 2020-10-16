import React, { Component } from "react";
import  "../shared/stylesheets/signup-style.css";
import Axios from "axios";
import { serverUrl } from "../shared/baseUrl";
import { withRouter, Link } from "react-router-dom";

class SignUp extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            user_mail : '',
            user_pass : '',
            user_username : '',
            user_name : '',
            user_weight: '',
            user_height: '',
            user_age: '',
            user_sex: '',
            user_goal: ''
        }
        this.handleChangeField = this.handleChangeField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeField(key, event) {
        this.setState({
          [key]: event.target.value,
        });
    }
    handleSubmit(event){
        event.preventDefault();
        const { user_mail,user_pass,user_username,user_name,user_weight,user_height,user_age,user_sex,user_goal} = this.state;
        console.log(user_mail,user_pass,user_username,user_name,user_weight,user_height,user_age,user_sex,user_goal);
        Axios.post(serverUrl+"auth/signup", {
            user_mail,
            user_pass,
            user_username,
            user_name,
            user_weight,
            user_height,
            user_age,
            user_sex,
            user_goal,
        }).then(res => {
            this.props.handleAccount(res.data[0]["id"],res.data[0]["email"],res.data[0]["username"],res.data[0]["username"],true);  
        })        
        .then(()=>{
            this.props.history.push('/');
            console.log("user created successfully");
        })
        .catch(err=>{
            console.log("Error ",err)
        });
        

    }
    render() {
        const { user_mail,user_pass,user_username,user_name,user_weight,user_height,user_age,user_sex,user_goal} = this.state;
        return (
        <div className="wrapper" style={{}}>
        <div className="inner">
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input required onChange={(ev) => this.handleChangeField('user_username', ev)} value={user_username} type="text" className="form-control" placeholder="username" />
                </div>

                <div className="form-group">
                    <label>Name</label>
                    <input required onChange={(ev) => this.handleChangeField('user_name', ev)} value={user_name} type="text" className="form-control" placeholder="Name" />
                </div>

                
                <div className="form-group">
                    <label>Email address</label>
                    <input required onChange={(ev) => this.handleChangeField('user_mail', ev)} value={user_mail} type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input required onChange={(ev) => this.handleChangeField('user_pass', ev)} value={user_pass} type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input required onChange={(ev) => this.handleChangeField('user_age', ev)} value={user_age} type="number" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Height</label>
                    <input required onChange={(ev) => this.handleChangeField('user_height', ev)} value={user_height} type="number" className="form-control" placeholder="Enter Height" />
                </div>

                <div className="form-group">
                    <label>Weight</label>
                    <input required onChange={(ev) => this.handleChangeField('user_weight', ev)} value={user_weight} type="number" className="form-control" placeholder="Enter Weight" />
                </div>

        

                <div className="form-group">
                    <label>Gender</label>
                    <select className = "form-control" onChange={(ev) => this.handleChangeField('user_sex', ev)} value={user_sex} >
                        <option value = "Male">Male</option>
                        <option value = "Female">Female</option>
                    </select>
                </div>
                
              
                <div className="form-group">
                    <label>Goals</label>
                    <select className = "form-control" onChange={(ev) => this.handleChangeField('user_goal', ev)} value={user_goal} >
                        <option value="loseOne">Lose 1 Pound per Week</option>
                        <option value="loseTwo">Lose 2 Pounds per Week</option>
                        <option value="maintain">Maintain Weight</option>
                        <option value="gainOne">Gain 1 Pound per Week</option>
                        <option value="gainTwo">Gain 2 Pounds per Week</option>
                    </select>
                </div>

                <button type="submit" onClick = {this.handleSubmit} className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/sign-in">sign in?</Link>
                </p>
            </form>
            </div>
        </div>
        );
    }
}
export default withRouter(SignUp);