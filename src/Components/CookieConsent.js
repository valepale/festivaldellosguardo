import * as React from 'react';
import * as Scrivito from 'scrivito';
import CookieBanner from 'react-cookie-banner';

class CookieConsent extends React.Component {
      constructor(props) {
        super(props);
        
       
    }

   
    render() {
        const styles = {
           banner: {
                fontFamily: 'Source Sans Pro',
                height: 'auto',
                background: 'rgba(72, 130, 154, 0.88) url(/cookie.png) 20px 50% no-repeat',
                backgroundSize: '30px 30px',
                backgroundColor: '',
                fontSize: '15px',
		position: 'fixed',
                fontWeight: 600
            },
            button: {
                border: '1px solid white',
                borderRadius: 4,
                width: 66,
                height: 32,
                lineHeight: '32px',
                background: 'transparent',
                color: 'white',
                fontSize: '14px',
                fontWeight: 600,
                opacity: 1,
                right: 20,
                marginTop: -18
            },
            message: {
                display: 'block',
                padding: '9px 67px',
                lineHeight: 1.3,
                textAlign: 'left',
                marginRight: '8%',
                color: 'white'
            },
            link: {
                textDecoration: 'none',
                fontWeight: 'bold'
            }
        }
      

        return (
                <div>
                    <CookieBanner
                        dismissOnScrollThreshold='9999999999999999'
                        styles={styles}
                        message="Questo sito utilizza cookies tecnici e di profilazione e consente l'uso di cookies di 'terze parti' che permettono di inviarti informazioni inerenti le tue preferenze. Se non desideri riceverli ti invitiamo a non navigare questo sito ulteriormente."
                        onAccept={() => {}}
                        cookie="user-has-accepted-cookies"
                        buttonMessage='Chiudi'
                        link={<a href='https://www.tboxchain.io/informativa-cookies-816e7e8670b938e6' target='_blank'>Leggi di più</a>}
                        />
                </div>
                        );
            }
        }


        export default CookieConsent;