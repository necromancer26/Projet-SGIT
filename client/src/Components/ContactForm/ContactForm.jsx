import React, { Component } from "react";
import emailjs from "emailjs-com";
import Recaptcha from "react-recaptcha";
import "./ContactForm.css";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.state = { isVerified: false };
  }
  recaptchaLoaded() { }
  sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail123",
        "template_e1thf6m",
        e.target,
        "user_0uk1UxSp0X7y64PLYAdnY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  handleSubscribe(e) {
    if (this.state.isVerified) {
      this.sendEmail(e);
    } else {
      alert("Vérifier que vous n'êtes pas un robot ");
      e.preventDefault();
    }
  }
  verifyCallback(response) {
    if (response) {
      this.setState({ isVerified: true });

    }
  }
  render() {
    return (
      <form
        onSubmit={(e) => {
          this.handleSubscribe(e);
          alert("message envoyé avec succés");

        }}
        className="contact-form"
      >
        <h1>Contactez nous!</h1>
        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          className="inp-element"
          name="name"
          id="name"
          placeholder="Votre Nom"
        />
        <label htmlFor="pre">Prénom</label>
        <input
          type="text"
          className="inp-element"
          name="pre"
          id="pre"
          placeholder="Votre Prenom"
        />
        <label htmlFor="tel">Téléphone</label>
        <input
          type="tel"
          className="inp-element"
          name="tel"
          id="tel"
          placeholder="Votre Telephone"
        />
        <label htmlFor="mail">Email*</label>
        <input
          type="email"
          className="inp-element"
          name="mail"
          required
          id="mail"
          placeholder="Votre Email"
        />
        <label htmlFor="monselect">Sujet:</label>
        <select id="monselect" name="sujet" className="inp-element">
          <option value="" selected disabled hidden>
            Selectionnez un sujet
          </option>
          <option value="Commercial">Commercial</option>
          <option value="Technique">Technique</option>
          <option value="Autre">Autre</option>
        </select>
        <label htmlFor="message">Message*</label>
        <textarea
          id="message"
          className="inp-message"
          cols="1"
          rows="5"
          name="message"
          required
          placeholder="Veuillez Ecrire Votre Message"
        ></textarea>

        <div className="recaptcha-container">
          <input type="submit" className="Recaptchafunction" value="Envoyer" />
          <Recaptcha
            sitekey="6Lf7-MkbAAAAALoH3r-9jB9W_Vs-PRE3cMcsESHw"
            render="explicit"
            onloadCallback={this.recaptchaLoaded}
            verifyCallback={this.verifyCallback}
            className="recaptcha"
          />
        </div>
      </form>
    );
  }
}
//   {/* <div className="part-1-form">*/}
//     {/* <div className="form-container"> */}
//     {/* <div className="contact"> */}

//     {/* </div> */}
//     {/* </div> */}
//  {/* </div>*/}
