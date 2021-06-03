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
                    <p>This app is a <b>Magic The Gathering</b> and <b>GTA V</b> themed card collection app that allows you to open 'packs' of cards that are randomly generated. You can save the cards they want in 'My Collection', or click on the 'Cards' section to view all the possible cards in the realm. The characters of the cards are generated from the students of Flatiron School's cohort, who are then transformed into characters of the <b>FTG</b> realm; given abilities and elements to name a few. So get online and start collecting!</p>
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