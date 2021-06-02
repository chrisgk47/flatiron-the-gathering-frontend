import React, {Component} from 'react';


class About extends Component {

    render(){
        return(
            <div className="About-Cont">
                <br></br>
                <h2><u>Welcome to the <b>Flatiron The Gathering</b> app!</u></h2>
                <div className="about">
                <br></br>
                <br></br>
                    <p>This app is a <b>Magic The Gathering</b> and <b>GTA V</b> themed card collection app<br></br>
                    that allows you to open 'packs' of cards that are randomly generated. 
                    <br></br>
                    A User, once signed in, can save the cards they want in 'My Collection',
                    <br></br>
                    or click on the 'Cards' section to view all the possible cards in the realm.
                    <br></br>
                    The characters of the cards are generated from the students of Flatiron School's cohorts.<br></br>
                    The students are transformed as characters of the <b>FTG</b> realm, and will be given 
                    <br></br>
                    abilities and elements to name a few.  So get online and start collecting!</p>
                    <br></br>
                </div>
                <div className="contacts">
                    <h4><u>Contacts</u></h4>
                    <h6>chris.kim1990@gmail.com <br></br>zmengis@gmail.com </h6>
                </div>
            </div>
        )
    }
}

export default About