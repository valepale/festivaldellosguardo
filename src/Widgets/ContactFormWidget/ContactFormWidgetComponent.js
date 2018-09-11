import * as React from 'react';
import * as Scrivito from 'scrivito';
import './contactForm.html';
import FileUpload from '../../Components/FileUpload';
/* This html file is needed for Netlify form handling. Updates to inputs in this file should also be
added to contactForm.html as well. See the following link for details:
https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
*/

Scrivito.provideComponent('ContactFormWidget', ({ widget }) => {
    return (
            <FileUpload>
            </FileUpload>
            );
});
