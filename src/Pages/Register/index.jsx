import React, { Component } from "react";
import Container from "../../Components/Container";
import Arrow from "../../Assets/images/arrow_back_ios_24px.png";
import * as Typography from "../../Components/Typography";
import Input from "../../Components/Input";
import Content from "../../Components/Content";
import Quotation from "../../Assets/images/“.png";
import Vector from "../../Assets/images/Vector.png";
import WhiteLogo from "../../Components/whiteLogo";
import Points from "../..//Assets/images/Points.png";
import Button from "../..//Components/Button";
import Icon from "../../Assets/images/flat-color-icons_google.png";
import PasswordStrength from "../../Components/PasswordStrength";
import Card from "../../Components/Card";

import "./style.css";

export default class Register extends Component {
  state = {
    email: "",
    password: "",
    password2: "",
    passwordStrength: 0,
    check: false,
    error: false,
    messageOfError: "",
    styleOfCard: {
      top: "-100%",
    },
  };

  handelChange = (e) => {
    let strength = 0;
    const { name, value } = e.target;
    if (name === "password") {
      if (value.length > 4) {
        strength = strength + 20;
      }
      if (value.length > 10) {
        strength = strength + 20;
      }
      if (value.match(/[a-z]/g)) {
        strength = strength + 20;
      }
      if (value.match(/[A-Z]/g)) {
        strength = strength + 20;
      }
      if (value.match(/[0-9]/g)) {
        strength = strength + 20;
      }
      if (value.match(/[^0-9a-zA-Z\s]/g)) {
        strength = strength + 20;
      }
      if (value.match(/(.)\1/g) > 0) {
        strength = strength - 40;
      }
      this.setState({ passwordStrength: strength });
    }
    this.setState({ [name]: value });
  };

  onCheck = () => {
    this.setState({ check: !this.state.check });
  };

  handleSubmit = (e) => {
    this.setState({
      styleOfCard: {
        top: "30%",
      },
    });
    e.preventDefault();
    if (
      this.state.email.length === 0 ||
      this.state.password.length === 0 ||
      this.state.password2 === 0
    ) {
      this.setState({
        error: true,
        messageOfError: "one of input fields is required",
      });
    } else if (this.state.password.length < 8) {
      this.setState({
        error: true,
        messageOfError: "your password should be at least 8 characters.",
      });
    } else if (this.state.password !== this.state.password2) {
      this.setState({
        error: true,
        messageOfError: "please make sure that passwords matches!",
      });
    } else if (this.state.passwordStrength < 60) {
      this.setState({
        error: true,
        messageOfError:
          "your password strength should be at lease Medium strength.",
      });
    } else if (!this.state.check) {
      this.setState({
        error: true,
        messageOfError: "Must Agree From Conditions ",
      });
    } else {
      this.setState({
        error: false,
        messageOfError: "successfully!",
        styleOfCard: {
          boxShadow: "inset 8px 0 green",
          top: "30%",
        },
      });
      this.setState({
        email: "",
        password: "",
        password2: "",
        trems: false,
        passwordStrength: 0,
      });
    }
  };
  render() {
    return (
      <div className="register">
        <div className="left">
          <div className="head">
            <WhiteLogo />
            <img className="points" src={Points} alt="Points" />
          </div>
          <Content
            quotation={Quotation}
            text="I always observe the people who
          pass by when I ride an escalator. I'll never see most of them again,
          so I imagine a lot of things about their lives... about the day ahead
          of them."
            anchor="Hideo Kojima"
            Vector={Vector}
          />
        </div>
        <div className="right">
          <div className="back">
            <img src={Arrow} alt="Arrow" />
            <span>Back</span>
          </div>
          <Container>
            <div className="text">
              <Typography.H1>Register Individual Account!</Typography.H1>
              <p>
                For the purpose of gamers regulation, your details are required.
              </p>
            </div>
            <div className="inputs">
              <Input
                label="Email address"
                type="email"
                placeholder="Enter email address"
                Name="email"
                value={this.state.email}
                Method={this.handelChange}
              />
              <Input
                label="Create password"
                type="password"
                placeholder="Password"
                Name="password"
                value={this.state.password}
                Method={this.handelChange}
              />
              <PasswordStrength strength={this.state.passwordStrength} />
              <Input
                label="Repeat password"
                type="password"
                placeholder="Repeat password"
                Name="password2"
                Method={this.handelChange}
                value={this.state.password2}
              />
            </div>
            <div className="form-checkbox">
              <input
                className="checkbox"
                type="checkbox"
                name="check"
                id="check"
                required
                onChange={this.onCheck}
              />
              I agree to terms & conditions
            </div>
            <Button
              Type="submit"
              textButton="Register Account"
              Method={this.handleSubmit}
            />
            <span className="or">Or</span>
            <Button
              textButton="login"
              Icon={Icon}
              Style={{
                color: "#000000",
                background: "#FFFFFF",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)",
                borderRadius: "6px",
              }}
            />
          </Container>
          <Card
            ErrorMassage={this.state.messageOfError}
            Type={this.state.error}
            Style={this.state.styleOfCard}
          />
          ;
        </div>
      </div>
    );
  }
}
