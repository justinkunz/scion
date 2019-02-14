import React from "react";
import Navbar from "../../components/misc/Navbar";

// background-image: url(https://images.pexels.com/photos/1089550/pexels-photo-1089550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
//     height: 100vh;
//     background-size: cover;
class Welcome extends React.Component {
  render() {
    return (
      <div style={{backgroundImage: "url('https://images.pexels.com/photos/1089550/pexels-photo-1089550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')", height: "100vh", backgroundSize: "cover"}}>
        <Navbar activePage="Home" />
        <br />
        <div className="container">
          <div className="row"  style={{marginTop: "100px"}}>
            <div className="column offset-2 col-8">
            <div className="card">
              <div className="card-body" style={{backgroundColor: "aliceblue"}}>
                <h3 id="welcomeTitle"><strong> Welcome to Scion! </strong></h3>
                <hr/>
                  <p>
                   It is our mission to help connect intended
                    parents, and gestational carriers together in an attempt to
                    assist those who are having difficulties bringing life into
                    this world. Through our application we make the difficult,
                    opaque process of finding suitable candidates not only more
                    efficient, but transparent for both of the primary parties
                    involved. We focus on the key attributes from each party
                    that will ultimately facilitate this process, which, in turn
                    will lead to more successful results from artificial
                    insemination.
                  </p>

                  <p>
                    Our app is currently in its infancy, but we are diligently
                    working on rolling out a more complete experience that will
                    further assist individuals navigate the tumultuous legal,
                    psychological, and payment regulations which govern the act
                    of creating life through artificial insemination.
                  </p>
              
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
