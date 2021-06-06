// Child Iframe
import React from 'react';
import './App.css';

export default class IframeChild extends React.Component {
    componentDidMount() {
        window.addEventListener('message', function (e) {
            // not allowing other websites to manupulate
            // if (e.origin !== 'http://localhost:3000/') return;

            // hackiest thing i ever wrote
            if (e.data === 'SHOULD_LOGOUT') {
                localStorage.clear(); // deletes localStorage of website 2.
            }
        });
    }

    render() {
        /*
		
		## set your tokens when logged in 
		## this is only for demonstration purposes
		
		*/
        localStorage.setItem('access_token', 'token1');
        localStorage.setItem('refresh_token', 'token2');

        const tokens = {
            access: localStorage.getItem('access_token'),
            refresh: localStorage.getItem('refresh_token'),
        };

        window.parent.postMessage(tokens, 'http://localhost:3000/');
        //postMessage(message, URI of the recipient page)

        return (
            <div className="App">
                <h3>Child iFrame</h3>
            </div>
        );
    }
}
