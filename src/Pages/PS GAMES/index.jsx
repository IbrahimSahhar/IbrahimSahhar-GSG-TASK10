import SunOne from "../../Assets/images/PC Images/Sun-one.svg";
import like from "../../Assets/images/PC Images/like.svg";
import logo from "../../Assets/images/PC Images/logo.svg";
import Puzzle from "../../Assets/images/PC Images/Puzzle.svg";
import Settings from "../../Assets/images/PC Images/Settings.svg";
import Moon from "../../Assets/images/PC Images/Moon.svg";
import SUPERMAN from "../../Assets/images/PC Images/SPIDERMAN.png";
import SUPERMAN2 from "../../Assets/images/PC Images/SUPERMAN-2.png";
import GODOFWAR from "../../Assets/images/PC Images/GODOFWAR.png";
import personalImage from "../../Assets/images/PC Images/personalImage.png";
import Ellipse1 from "../../Assets/images/PC Images/Ellipse1.png";
import Ellipse2 from "../../Assets/images/PC Images/Ellipse2.png";
import Ellipse3 from "../../Assets/images/PC Images/Ellipse3.png";
import Ellipse4 from "../../Assets/images/PC Images/Ellipse4.png";
import Rectangle1 from "../../Assets/images/PC Images/Rectangle1.png";
import FRIENDS from "../../Assets/images/PC Images/FRIENDS.png";
import Kass from "../../Assets/images/PC Images/kass.png";
import winframe from "../../Assets/images/PC Images/winframe.png";
import Icon from "../../Components/Icon";
import Slider from "../../Components/Slider";
import LastGame from "../../Components/lastGame";

import React, { Component } from "react";
import "./style.css";

export default class PcGames extends Component {
  render() {
    return (
      // Start Games Section
      <div className="games">
        <div className="left-side">
          <div className="top">
            <Icon Src={logo} Alt={"logo"} />
          </div>
          <div className="center">
            <Icon Src={like} Alt={"like"} />
            <Icon Src={Settings} Alt={"Settings"} />
            <Icon Src={Puzzle} Alt={"Puzzle"} />
          </div>
          <div className="bottom">
            <Icon Class="moon" Src={Moon} Alt={"Moon"} />
            <Icon Class="sun" Src={SunOne} Alt={"SunOne"} />
          </div>
        </div>
        <div className="right-side">
          <div className="row-1-personInfo">
            <div className="text-personInfo">
              <p>
                Welcome back, <span>Jenny!</span>
              </p>
            </div>
            <img src={personalImage} alt="personal_image"></img>
          </div>
          <div className="row-2-newGames">
            <div className="text-newGames">
              <span>NEW GAMES</span>
            </div>
            <div className="sliders">
              <Slider
                Src={GODOFWAR}
                Alt={"new_game"}
                Description={
                  "Join in the new DLC with Kratos to learn more about him andhis future."
                }
                Style={{ width: "72%" }}
              />

              <Slider
                Src={SUPERMAN2}
                Alt={"new_game"}
                Description={
                  "Be part of the Suicide Squad and kill the Justice League!-Amanda Waller"
                }
                Style={{
                  textAlign: "right",
                  width: "53.5%",
                  marginRight: "15px",
                }}
              />

              <Slider
                Src={SUPERMAN}
                Alt={"new_game"}
                Description={
                  " Miles Morales discovers powers from his mentor, Peter Parker.Master his unique, bio-electric venom blast attacks."
                }
                Style={{ left: "0" }}
              />
            </div>
          </div>
          <div className="row-3-friends-lastPlayer">
            <div className="col-1-lastPlayed">
              <span className="title">last played</span>
              <LastGame
                Src={Ellipse1}
                Alt={"game"}
                Text={"Hogwarts Legacy 50%"}
              />

              <LastGame
                Src={Ellipse2}
                Alt={"game"}
                Text={"God Of War: Ragnarök 72.5%"}
              />

              <LastGame
                Src={Ellipse3}
                Alt={"game"}
                Text={"Crash Bandicoot N. Sane Trilogy 34%"}
              />

              <LastGame
                Src={Ellipse4}
                Alt={"game"}
                Text={"Dying Light 2 Stay Human 100%"}
              />
            </div>
            <div className="col-2-recentTrophy">
              <span className="title">most recent trophy</span>
              <div className="trophy">
                <img src={Rectangle1} alt="trophy" className="trophy_img" />
                <img src={Kass} alt="win" className="win" />
                <img src={winframe} alt="winframe" className="win_shadow" />
                <p className="trophy_desc">
                  perfect KILL streak
                  <span className="trophy_desc_2">You are in the 0.5%</span>
                </p>
                <p className="last_time">
                  assassin's creed odyssey
                  <span className="last_time_2">last played: 34 hours ago</span>
                </p>
              </div>
            </div>
            <div className="col-3-friends">
              <span className="title">friends</span>
              <img src={FRIENDS} alt="FRIENDS" />
            </div>
          </div>
        </div>
      </div>
      // End Games Section
    );
  }
}
