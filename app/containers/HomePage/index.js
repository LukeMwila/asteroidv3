/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { loginUser } from './actions';
import { makeSelectUsername } from './selectors';
var classNames = require('classnames'); 

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }
  
  render() {
	  
	let {isLoading, isLoggedIn, error, errorMessage} = this.props;
    
    var textInputClasses = classNames({
      'inputField': true,
      'inputError': error
    });

    var passwordInputClasses = classNames({
      'passwordField': true,
      'inputError': error
    });

    return (
      <article>
        <Helmet
          title="Login"
          meta={[
            { name: 'description', content: 'Auxcon' },
          ]}
        />
          <div className="loginContainer">
				<div className="floatLeft fullWidth loginContainerTopLayer center">
					<h3>Company Logo</h3>
				</div>
				<div className="floatLeft fullWidth loginContainerMiddleLayer roundedCorners">
					<div className="container">
						<div className="floatLeft fullWidth loginContainerMiddleLayer_top center">
							<span>Sign in to Auxon</span>
						</div>
						<div className="floatLeft fullWidth loginContainerMiddleLayer_middle">
							<div className="fullWidth fullHeight formContainer">
								<form onSubmit={this.onSubmit}>
									<div className="floatLeft fullWidth inputFieldContainer">
										<label htmlFor="username">Username</label><br />
										<input className={textInputClasses} type="text" id="username" onChange={e => this.setState({username: e.target.value})} value={this.state.username}  />
									</div>
									<div className="floatLeft fullWidth inputFieldContainer">
										<label htmlFor="password">Password</label><br />
										<input className={passwordInputClasses} type="password" id="password" onChange={e => this.setState({password: e.target.value})} value={this.state.password} />
									</div>
									<div className="floatLeft fullWidth buttonFieldContainer">
										<input type="checkbox" name ="" />
										<span>Remember me next time</span>
									</div>
									<div className="floatLeft fullWidth inputFieldContainer noTopPadding">
                    <button className="btn fullWidthBtn">Sign in</button>
                    <br /><br />
                    { isLoading && <div className="center">Please wait...</div> }
                    { isLoggedIn && <div className="center">Successful login!</div> }
                    { error && <div className="center">{errorMessage}</div> }
									</div>
								</form>
							</div>
            </div>
            
            <div className="floatLeft fullWidth loginContainerMiddleLayer_bottom center">
              <br />
							<a href="#">I have forgotten my username</a><br /><br />
							<a href="#">I have forgotten my password</a>
						</div>
					</div>
				</div>
				<div className="floatLeft fullWidth loginContainerBottomLayer center">
					Powered by<br /><br />
					<span>Auxcon Logo</span>
				</div>
			</div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => {
      dispatch(loginUser(username, password));
    }
  };
};

const mapStateToProps = (state) => {
  state = state.toJS()
  console.log(state);
  return{
    isLoading: state.home.isLoading,
    isLoggedIn: state.home.isLoggedIn,
    error: state.home.error,
    errorMessage: state.home.errorMessage
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
