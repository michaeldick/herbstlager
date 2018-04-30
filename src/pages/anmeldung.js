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
      strasse: '',
      plz: '4626',
      ort: 'Niederbuchsiten',
      email: '',
      telefon: '',
      formErrors: {name: '', vorname: ''},
      formValid: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({[name]: value},
      () => { this.validateField(name, value) });

    if(!value) {

    }

    this.setState({
      [name]: value
    });
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let vornameValid = this.state.vornameValid;

    switch(fieldName) {
      case 'name':
        nameValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.name = nameValid ? '' : ' is invalid';
        break;
      case 'vorname':
        vornameValid = value.length >= 6;
        fieldValidationErrors.vorname = vornameValid? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
      name: nameValid,
      vorname: vornameValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.nameValid && this.state.vornameValid});
  }


  render() {
    return (
<section className="section">
  <form name="anmeldung" method="POST" data-netlify-honeypot="bot-field" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
<div className="columns">
   <div className="column is-4 is-offset-2">
     <div className="panel panel-default">
     <FormErrors formErrors={this.state.formErrors} />
   </div>
      <div className="field">
         <label className="label">Name</label>
         <div className="control">
            <input className="input" type="text" placeholder="Name"
            value={this.state.nachname} name="nachname"
            onChange={this.handleInputChange} />
         </div>
      </div>
      <div className="field">
         <label className="label">Vorname</label>
         <div className="control">
            <input className="input is-success" type="text" placeholder="Text input"
             value={this.state.vorname} name="vorname"
             onChange={this.handleInputChange} />
         </div>         
      </div>
      <div className="field">
         <label className="label">Strasse</label>
         <div className="control">
            <input className="input" type="text" placeholder="Text input"
             value={this.state.strasse} name="strasse"
             onChange={this.handleInputChange} />
         </div>
      </div>
      <div className="field">
         <label className="label">PLZ</label>
         <div className="control">
            <input className="input" type="text"
             value={this.state.plz} name="plz"
             onChange={this.handleInputChange} />
         </div>
      </div>
      <div className="field">
         <label className="label">Ort</label>
         <div className="control">
            <input className="input" type="text" placeholder="Text input" value={this.state.ort} name="ort"
            onChange={this.handleInputChange} />
         </div>
      </div>
      <div className="field">
         <label className="label">Email</label>
         <div className="control">
            <input className="input is-danger" type="email"  value={this.state.email} name="email"
                   onChange={this.handleInputChange} />
            <span className="icon is-small is-left">
            <i className="fa fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
            <i className="fa fa-warning"></i>
            </span>
         </div>
         <p className="help is-danger">This email is invalid</p>
      </div>
      <div className="field">
         <label className="label">Telefon / Mobile</label>
         <div className="control">
            <input className="input" type="text" value={this.state.telefon} name="telefon"
                   onChange={this.handleInputChange}/>
         </div>
      </div>
      <div className="field">
         <label className="label">Gender</label>
         <div className="control">
            <div className="select">
               <select>
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
               </select>
            </div>
         </div>
      </div>
      <div className="field">
         <div className="control">
            <label className="checkbox">
            <input type="checkbox" />
            Newsletter per E-Mail
            </label>
         </div>
      </div>
      <div className="field is-grouped">
         <div className="control">
            <button className="button is-link">Submit</button>
         </div>
      </div>
   </div>
</div>
  </form>
</section>
    );
  }
}