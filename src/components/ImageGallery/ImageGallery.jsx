import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { List } from './ImageGallery.styled';

const ImageGallery = ({ gallery, ...otherProps }) => {
  return (
    <>
      <List>
        {gallery.map(item => {
          return <ImageGalleryItem key={item.id} item={item} {...otherProps} />;
        })}
      </List>
    </>
  );
};
export default ImageGallery;

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object),
};
