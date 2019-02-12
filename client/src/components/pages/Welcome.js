import React from "react";
import Navbar from "../../components/misc/Navbar";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <div className="container">
          <div className="row">
            <div className="column offset-2 col-8">
              <div className="card-body">
                <h5>
                  <p>
                    Welcome to Scion! It is our mission to help connect intended
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
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
