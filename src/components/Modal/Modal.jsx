import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalBox, Img } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeydown);
  }

  onKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { item } = this.props;
    return createPortal(
      <Backdrop onClick={this.onClickBackdrop}>
        <ModalBox>
          <Img src={item.largeImageURL} alt={item.tags} />
        </ModalBox>
      </Backdrop>,
      modalRoot
    );
  }
}

export default Modal;
