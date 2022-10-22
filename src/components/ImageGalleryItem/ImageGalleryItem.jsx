import Modal from 'components/Modal';
import { Item, Img } from './ImageGalleryItem.styled';

const ImageGalleryItem = () => {
  return (
    <>
      <Item>
        <Img
          src="https://st3.depositphotos.com/7340112/15280/i/450/depositphotos_152809206-stock-photo-mountain-peaks-in-cape-town.jpg"
          alt=""
        />
      </Item>
      <Modal />
    </>
  );
};
export default ImageGalleryItem;
