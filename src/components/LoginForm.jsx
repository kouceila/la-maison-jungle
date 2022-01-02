import React , {Component} from 'react';
import $ from 'jquery';

class LoginForm extends Component{
    constructor (props){
        super(props);
        this.state = {
            servletGetResponse: '',
            servletPostResponse : ''
        };

        this.sendHttpPostRequest = this.sendHttpPostRequest.bind(this);
        this.sendHttpGetRequest = this.sendHttpGetRequest.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log("Mounted");
        console.log("Props name" + this.props.name);
    }

    sendHttpPostRequest(){
        var self = this;
        var urlEndPoint = 'http://localhost:8080/J2EEE/call';
        $.ajax({
            type : "POST",
            url : urlEndPoint,
            success : function(response){
                console.log(response)
                //this.setState({servletPostResponse:response});
            },
            error: function(response){
                console.log(response)
                //self.setState({servletPostResponse : response});
            }
        });
    }

    sendHttpGetRequest(){
        var self = this;
        var urlEndPoint = 'http://localhost:8080/J2EEE/call';
        $.ajax({
            type : "GET",
            url : urlEndPoint,
            success : function(response){
                console.log(response);
                //this.setState({servletGetResponse:response});
            },
            error: function(response){
                console.log(response);
                //self.setState({servletGetResponse : response});
            }
        });
    }

   
    handleSubmit(event) {
        console.log( "a name was submitted :" + event.target.value+ "-" + event.target.name);
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <h1>Login Form</h1>
                <form>
                    <input type="submit" name="post-request" value="Http Post Request" onClick={() => {this.sendHttpPostRequest()}}  />
                    <textarea value={this.state.servletPostResponse} onChange={this.handleSubmit}   />

                    <input type="submit" name="get-request" value="Http Get Request" onClick={() => {this.sendHttpGetRequest()}}  />
                    <textarea value={this.state.servletGetResponse} onChange={this.handleSubmit}   />

                    <label name="testLabel"></label>
                </form>
            </div>
        );
    }
}

export default LoginForm;