import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section className="container-1">

                {/* <img id="contact" src={contact} width="180" height="180 alt=contatlogo" */}
                <h3><strong>Pananart Techasathitwong</strong></h3>
                <h4>Text Text Text</h4>
                <h4>Email: pananart@gmail.com</h4>

            <a href="https://github.com/ptechasa">
                <span className="icon fa fa-github" style={{ color: 'antiquewhite' }}></span>
            </a>

            <a href="https://www.linkedin.com/in/pananart/">
                <span className="icon fa fa-linkedin-square" style={{ color: 'antiquewhite' }}></span>
            </a>
            </section>
        )
    }
}

export default Contact
