import React from 'react';
import logo from '../../Assets/Images/Logos/logo white bg.png';
import loginImg from '../../Assets/Images/login.png';
import '../Styles/style.css';

import Navigation from '../../ignitus-Navigation';
import Footer from '../../ignitus-Footer';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container _container-custom p-5">
          <div className="row shadow">
            <div className="col-md-6 p-0 container-image">
              <img className="img-fluid _img-login d-block" src={loginImg} />
              <div className="text-below-image text-center">
                <p className="mb-5 ">Let's get started</p>
                <p>Skyrocket your career with best global opportunities</p>
                <p>
                  <a href="/signup" className="text-center _link">
                    {' '}
                    I am a Professor
                  </a>
                </p>
              </div>
            </div>

            <div className="col-md-6  _container-form ">
              <div className="my-4">
                <img className="img-fluid _img mx-auto d-block" src={logo} />
              </div>
              <form>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-envelope-o fa-fw" />
                    </span>
                  </div>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-key fa-fw" />
                    </span>
                  </div>
                  <input
                    type="password"
                    id="pass"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-key fa-fw" />
                    </span>
                  </div>
                  <input
                    type="password"
                    id="pass"
                    className="form-control"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                <div className="text-center mb-3 mt-3">
                  <button type="submit" className="btn btn-success px-3 py-2">
                    <b>Sign up</b>
                  </button>
                </div>
                <div className="_or-seperator">
                  <i className="text-dark">or sign up with</i>
                </div>
                <div className="mb-4">
                  <button className="btn btn-primary mx-auto btn-block">
                    <i className="fa fa-linkedin mr-3" />
                    <b>LinkedIn</b>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Signup;
