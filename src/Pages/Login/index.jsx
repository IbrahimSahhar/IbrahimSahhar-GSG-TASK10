import React, { Component } from "react";
import BlueLogo from "../../Components/BlueLogo";
import Content from "../../Components/Content";
import Quotation from "../../Assets/images/“ (1).png";
import Vector from "../../Assets/images/supersede.png";
import Container from "../../Components/Container";
import * as Typography from "../../Components/Typography";
import IconButton from "../../Components/IconButton";
import Icon1 from "../../Assets/images/flat-color-icons_google.png";
import Icon2 from "../../Assets/images/Vector (4).png";
import Icon3 from "../../Assets/images/Vector (1).png";
import Icon4 from "../../Assets/images/Vector (2).png";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Card from "../../Components/Card";

import "./style.css";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    error: false,
    messageOfError: "",
    styleOfCard: {
      top: "-100%",
    },
  };
  handelChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    this.setState({
      styleOfCard: {
        top: "30%",
      },
    });
    e.preventDefault();
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      this.setState({
        error: true,
        messageOfError: "one of input fields is required",
      });
    } else if (this.state.password.length < 8) {
      this.setState({
        error: true,
        messageOfError: "your password should be at least 8 characters.",
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
      <div className="login">
        <div className="left">
          <BlueLogo />
          <Content
            quotation={Quotation}
            text="I always observe the people who
          pass by when I ride an escalator. I'll never see most of them again,
          so I imagine a lot of things about their lives... about the day ahead
          of them."
            anchor="Hideo Kojima"
            Vector={Vector}
            Style={{
              color: "black",
            }}
          />
        </div>
        <div className="right">
          <Container
            style={{
              width: "60%",
              marginLeft: "30%",
              marginRight: "10%",
            }}
          >
            <div className="text">
              <Typography.H1>Join the game!</Typography.H1>
              <p>Go inside the best gamers social network!</p>
            </div>
            <div className="icons">
              <IconButton icon={Icon1} />
              <IconButton icon={Icon2} />
              <IconButton icon={Icon3} />
              <IconButton icon={Icon4} />
            </div>
            <span className="or">Or</span>
            <div className="inputs">
              <Input
                label="Your email"
                type="email"
                placeholder="Write your email"
                Name="email"
                value={this.state.email}
                Method={this.handelChange}
              />
              <Input
                label="Enter your password"
                type="password"
                placeholder="************"
                Name="password"
                value={this.state.password}
                Method={this.handelChange}
              />
            </div>
            <Button
              Type="submit"
              textButton="Login"
              Method={this.handleSubmit}
            />
            <p className="registerAccount">
              Don’t have an account? <a>Register</a>
            </p>
          </Container>
          <Card
            ErrorMassage={this.state.messageOfError}
            Type={this.state.error}
            Style={this.state.styleOfCard}
          />
        </div>
      </div>
    );
  }
}
