import React from 'react';
import * as Scrivito from 'scrivito';
import axios, { post } from 'axios';
import './contactForm.html';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

var fileTypes = [
  'image/jpeg',
  'image/pjpeg',
  'image/png'
]

class FileUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            target: null,
            error: '',
            formValid: false
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
        if (this.validFileType(e.target.files[0])){
             if(e.target.files[0].size > 250000){
             this.setState({file: null,
            target: null,
            error: 'File di dimensione troppo grande! Deve essere inferiore a 250 Kb.',
            formValid: false});
            } else {
                 this.setState({file: e.target.files[0], target: e.target, formValid: true, error: ''})
            }
                
       } else {
            this.setState({file: null,
            target: null,
            error: 'Formato file errato! Seleziona un altro file.',
            formValid: false});
       }
       
    }
    
    validFileType(file) {
        for(var i = 0; i < fileTypes.length; i++) {
            if(file.type === fileTypes[i]) {
            return true;
         }
      }
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
    <div className="row">
        <form className="row" enctype="multipart/form-data" method="post">
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
            <label htmlFor="contactName">Nome</label>
            <input
              className="form-control form-control-lg"
              id="contactName"
              name="contactName"
              placeholder="Nome"
              type="text"
              required
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="contactFamilyName">Cognome</label>
            <input
              className="form-control form-control-lg"
              id="contactFamilyName"
              name="contactFamilyName"
              placeholder="Cognome"
              type="text"
              required
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="contactEmail">Email</label>
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
        <div className="col-sm-12">
          <div className="form-group">
            <label htmlFor="contactMessage">Messaggio</label>
            <textarea
              className="form-control form-control-lg"
              rows="3"
              id="contactMessage"
              name="contactMessage"
              placeholder="Il tuo messaggio..."
              required
            />
            
          </div>
          </div>
          <div className="col-sm-12">
           <div className="form-group">
            <label htmlFor="file">Scegli file (PNG, JPG, JPEG)</label>
            <input className="form-control form-control-lg" type="file" id="file" name="file" onChange={this.onChange} required/>
           </div>
           {this.state.error !== '' && <div><b className="text-danger">{this.state.error}</b></div>}
          <button
            className="btn btn-primary btn-block"
            type="submit" disabled={!this.state.formValid}>
            Invio 
          </button>
        </div>
      </form>
    </div>
  );
  }

}

export default FileUpload