var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

class LoginContainer extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGoogle = this.handleGoogle.bind(this);
    this.handleTwitter = this.handleTwitter.bind(this);
    this.handleFacebook = this.handleFacebook.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    var {dispatch} = this.props;
    var username = this.refs.username.value;
    var password = this.refs.password.value;



    if (username.length > 0 && password.length > 0) {
      this.refs.username.value = '';
      this.refs.password.value = '';
      dispatch(actions.startLoginUser(username, password));
    } else if (username.length == 0) {
      this.refs.username.focus();
    } else {
      this.refs.password.focus();
    }
  }

  handleGoogle() {
      var {dispatch} = this.props;

      dispatch(actions.googleLogin());
  }

  handleFacebook() {
      var {dispatch} = this.props;

      dispatch(actions.facebookLogin());
  }

  handleTwitter() {
      var {dispatch} = this.props;

      dispatch(actions.twitterLogin());
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="username"/>
          <br/>
          <input type="password" ref="password"/>
          <br/>
          <button type="submit">Submit</button>
        </form>
        <button type="button" onClick={this.handleGoogle}>Google</button>
        <button type="button" onClick={this.handleTwitter}>Twitter</button>
        <button type="button" onClick={this.handleFacebook}>Facebook</button>
      </div>
    );
  }
}

module.exports = connect()(LoginContainer);
