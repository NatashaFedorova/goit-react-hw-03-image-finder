import ImageGalleryItem from 'components/ImageGalleryItem';
import { nanoid } from 'nanoid';
import { List } from './ImageGallery.styled';

const ImageGallery = () => {
  return (
    <>
      <List>
        <ImageGalleryItem key={nanoid()} />
      </List>
    </>
  );
};
export default ImageGallery;
