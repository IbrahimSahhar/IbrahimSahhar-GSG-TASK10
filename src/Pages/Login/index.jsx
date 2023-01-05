import BlueLogo from "../../Components/BlueLogo";
import Content from "../../Components/Content";
import Quotation from "../../Assets/images/“ (1).png";
import Vector from "../../Assets/images/supersede.png";
import Container from "../../Components/Container";
import IconButton from "../../Components/IconButton";
import Icon1 from "../../Assets/images/flat-color-icons_google.png";
import Icon2 from "../../Assets/images/Vector (4).png";
import Icon3 from "../../Assets/images/Vector (1).png";
import Icon4 from "../../Assets/images/Vector (2).png";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Card from "../../Components/Card";
import Or from "../../Components/Or";
import * as Typography from "../../Components/Typography";
import ScrollToTop from "../../Components/ScrollToTop";

import React, { Component } from "react";
import * as yup from "yup";
import { NavLink } from "react-router-dom";
import "./style.css";

// Build a Yup schema from a JSON Schema
let schema = yup.object().shape({
  email: yup.string().email().required("email input is required"),
  password: yup
    .string()
    .required("password input is required")
    .min(8, "your password should be at least 8 characters")
    .max(30, "your password should be at most 30 characters")
    .matches('^[a-zA-Z0-9!@#$&()-`.+,/"]*$'),
});

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    error: false,
    messageOfError: "",
    classnames: "",
    styleOfCard: {
      top: "-100%",
    },
  };
  handelChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  //  validation with Yup library
  handleSubmit = (e) => {
    window.scrollTo({
      top: 200,
      left: 0,
      behavior: "smooth",
    });
    e.preventDefault();
    this.setState({
      styleOfCard: {
        top: "700px",
      },
      classnames: "",
    });
    schema
      .validate(
        {
          email: this.state.email,
          password: this.state.password,
        },
        { abortEarly: false }
      )
      .then((valid) => {
        if (valid) {
          this.setState({
            email: "",
            password: "",
          });
          this.setState({
            error: false,
            messageOfError: "successfully!",
          });
        }
      })
      .catch((err) => {
        console.log(err); // => false
        this.setState({
          error: true,
          messageOfError: `You have ${err.errors.length} errors 
              ${err.errors[0]}`,
        });
      });
  };

  // function to scale the card from the page
  scale = () => {
    this.setState({
      classnames: "scale-out",
    });
    window.setTimeout(() => {
      window.scrollTo({
        top: 200,
        left: 0,
        behavior: "smooth",
      });
      this.setState({
        styleOfCard: {
          top: "-100%",
        },
      });
    }, 200);
  };

  render() {
    return (
      // Start Login
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
            styleOfVector={{
              float: "right",
              marginRight: "-10px",
              marginTop: "-90px",
            }}
            Style={{
              color: "black",
              marginTop: "-90px",
              marginBottom: "10px",
            }}
          />
        </div>
        <div className="right">
          <Container
            style={{
              width: "62%",
              marginLeft: "29%",
              marginRight: "9%",
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
            <Or />
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
                placeholder="•••••••••"
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
            <ScrollToTop>
              <p className="registerAccount">
                Don’t have an account? <NavLink to={"/"}>Register</NavLink>
              </p>
            </ScrollToTop>
          </Container>
          <Card
            Clasess={this.state.classnames}
            Method={this.scale}
            ErrorMassage={this.state.messageOfError}
            Type={this.state.error}
            Style={this.state.styleOfCard}
            Href="/PcGames"
          />
        </div>
      </div>
      // End Login
    );
  }
}
