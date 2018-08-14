import React from 'react';
import * as Scrivito from 'scrivito';
import Instafeed from 'react-instafeed';


class InstagramPage extends React.Component {

    render() {
        const instafeedTarget = 'instafeed';
        return (
                <div id={instafeedTarget} style={{ textAlign: 'center'}}>
                    <Instafeed
                        limit='5'
                        ref='instafeed'
                        resolution='standard_resolution'
                        sortBy='most-recent'
                        target={instafeedTarget}
                        template=''
                        userId='8404435807'
                        clientId='698afdce0709471b914e438c08460f0f'
                        accessToken='8404435807.698afdc.a4013103516e49479fec2de2211c6426'
                        />
                </div>
                )
    }

}

export default InstagramPage