import React from 'react';
import Modal from 'react-responsive-modal';
 
class PopUp extends React.Component {
  state = {
    open: false,
    firstName: null,
    lastName: null,
    phone_num: null,
    score: null
  };

  
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal}>Open modal</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          {/* <h2>Simple centered modal</h2> */}
        </Modal>
      </div>
    );
  }
}
 
export default PopUp;