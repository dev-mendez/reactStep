import React from "react";
import logoReact from "../images/logo192.png";
import logoAngular from "../images/angular.png";
import logoNode from "../images/nodeJs.png";
import usserLogo from "../images/self.png";
import "../styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="card-body card_body_plus">
        <div className="logo_container">
          <img className="tecnologies" src={logoAngular} alt="img" />
          <img
            className="tecnologies"
            id="reactLogo"
            src={logoReact}
            alt="img"
          />
          <img className="tecnologies" src={logoNode} alt="img" />
        </div>
        <h3 id="rango">{this.props.jobTitle}</h3>
        <div className="info_container">
          <div>
            <img id="contact_logo" src={usserLogo} alt="img" />
          </div>
          <div>
            <h1 id="name">
              {this.props.firstName} <br /> {this.props.lastName}
            </h1>
          </div>
        </div>
        <div className="contact_container">
          <div>
            <div id="proficiency">
              <ul id="prof">
                <li>Front-End Specialist</li>
                <li>Back-End Specialist </li>
                <li>Data base expert    </li>
                <li>Unstopable developer</li>
              </ul>
            </div>
            <h4 id="e-mail">{this.props.email}</h4>
          </div>
          <div className="hashTag_container">
            <p id="hash">{this.props.hashTags}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Badge;
