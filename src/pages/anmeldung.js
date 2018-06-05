import React from 'react'
import FormErrors from '../components/FormErrors'

export default class Anmeldung extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nachname: '',
      vorname: '',
      nachnameValid: false,
      vornameValid: false,
      emailValid: true,
      strasse: '',
      plz: '4626',
      ort: 'Niederbuchsiten',
      email: '',
      telefon: '',
      alter: '',
      nameDerEltern: '',
      formErrors: { name: '', vorname: '', email: '' },
      formValid: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value },
      () => { this.validateField(name, value) });

    if (!value) {

    }

  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let isNameValid = this.state.nameValid;
    let isVornameValid = this.state.vornameValid;
    let isEmailValid = this.state.emailValid;


    console.log(fieldName + ": " + value);

    switch (fieldName) {
      case 'name':
        isNameValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.name = isNameValid ? '' : ' is invalid';
        break;
      case 'vorname':
        isVornameValid = value.length >= 6;
        fieldValidationErrors.vorname = isVornameValid ? '' : ' is too short';
        break;
      case 'email':
        isEmailValid = value.length >= 3;
        fieldValidationErrors.email = isEmailValid ? '' : ' is too short';
        console.log("email valid: " + isEmailValid)
        break;
      default:
        break;
    }
    this.setState(prevstate => ({
      formErrors: fieldValidationErrors,
      nameValid: isNameValid,
      vornameValid: isVornameValid,
      emailValid: isEmailValid
    }));
    this.validateForm;
  }

  validateForm() {
    this.setState({ formValid: this.state.nameValid && this.state.vornameValid });
  }


  render() {
    return (
      <section className="section">
        <form name="anmeldung" method="POST" data-netlify-honeypot="bot-field" data-netlify="true">
          <input type="hidden" name="form-name" value="anmeldung" />
          <div className="columns">
            <div className="column is-4 is-offset-2">
              <div className="panel panel-default">
                <FormErrors formErrors={this.state.formErrors} />
              </div>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Name"
                    value={this.state.nachname} name="nachname" autoComplete='family-name'
                    onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="field">
                <label className="label">Vorname</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Vorname"
                    value={this.state.vorname} name="vorname" autoComplete='given-name'
                    onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="field">
                <label className="label">Strasse</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Strasse"
                    value={this.state.strasse} name="strasse" autoComplete='address-line1'
                    onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="field">
                <label className="label">PLZ</label>
                <div className="control">
                  <input className="input" type="text"
                    value={this.state.plz} name="plz" autoComplete='postal-code'
                    onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="field">
                <label className="label">Ort</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Ort" value={this.state.ort} name="ort"
                    autoComplete='address-level2'
                    onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input className={"input " + (!this.state.emailValid ? "is-danger" : "")}
                    type="email" value={this.state.email} name="email" autoComplete='email'
                    onChange={this.handleInputChange} />


                  {!this.state.emailValid && (
                    <p className="help is-danger ">
                      <i className="fa fa-envelope icon is-small"></i>
                      <i className="fa fa-warning icon is-small"></i>
                      Bitte gültige E-Mail Adresse angeben</p>
                  )}
                </div>

              </div>
              <div className="field">
                <label className="label">Telefon / Mobile</label>
                <div className="control">
                  <input className="input" type="text" value={this.state.telefon} name="telefon"
                    onChange={this.handleInputChange} autoComplete='tel' />
                </div>
              </div>
              <div className="field">
                <label className="label">Name der Eltern</label>
                <div className="control">
                  <input className="input" type="text" value={this.state.nameDerEltern} name="telefon"
                    onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="field">
                <label className="label">Alter</label>
                <div className="control">
                  <div className="select">
                    <select>
                      <option>Bitte wählen:</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link">Abschicken</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}