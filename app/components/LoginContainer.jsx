var React = require('react');

class LoginContainer extends React.Component {
  render() {
    return (
      <form>
        <input type="text"/>
        <br/>
        <input type="password"/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

module.exports = LoginContainer;
