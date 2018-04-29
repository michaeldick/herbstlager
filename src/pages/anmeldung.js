import React from 'react'

export default class Anmeldung extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nachname: 'email',
      nachname: '',
      vorname: '',
      strasse: '',
      plz: '4626',
      ort: 'Niederbuchsiten',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
<section className="section">
  <form name="anmeldung" method="POST" action="/angemeldet" data-netlify-honeypot="bot-field" data-netlify="true">
<div className="columns">
   <div className="column is-4 is-offset-2">
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
            <input className="input is-danger" type="email" placeholder="Email input"  value={this.state.email} name="nachname"
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
         <label className="label">Phone</label>
         <div className="control">
            <input className="input" type="text" placeholder="Phone Number" />
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