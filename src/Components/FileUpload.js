import React from 'react';
import * as Scrivito from 'scrivito';
import axios, { post } from 'axios';


class FileUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            target: null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }
    onFormSubmit(e) {
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state).then((response) => {
            console.log(response.data);
        })
    }
    onChange(e) {
        this.setState({file: e.target.files[0], target: e.target})
    }
    fileUpload(state) {
        const url = 'https://www.festivaldellosguardo.it';
        const formData = new FormData();
        formData.append('file', state.file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  post(url, formData, config)
    }


 render() {
  return (
    <div className="row card-white-transparent">
        <form className="row" method="post">
        <input
          type="hidden"
          name="form-name"
          value="contact"
        />
        <div className="d-none">
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="contactName">Your name</label>
            <input
              className="form-control form-control-lg"
              id="contactName"
              name="contactName"
              placeholder="Name"
              type="text"
              required
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="contactFamilyName">Family name</label>
            <input
              className="form-control form-control-lg"
              id="contactFamilyName"
              name="contactFamilyName"
              placeholder="Family name"
              type="text"
              required
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="contactEmail">Email address</label>
            <input
              className="form-control form-control-lg"
              id="contactEmail"
              name="contactEmail"
              placeholder="Email"
              type="email"
              required
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="contactCompany">Company (optional)</label>
            <input
              className="form-control form-control-lg"
              id="contactCompany"
              name="contactCompany"
              placeholder="Company"
              type="text"
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <label htmlFor="contactMessage">Message</label>
            <textarea
              className="form-control form-control-lg"
              rows="3"
              id="contactMessage"
              name="contactMessage"
              placeholder="Your Message..."
              required
            />
          </div>
         
          <input type="file" name="file" onChange={this.onChange} /> 
          <button
            className="btn btn-primary btn-block"
            type="submit">
            Invio 
          </button>
        </div>
      </form>
    </div>
  );
  }

}

export default FileUpload