import PropTypes from 'prop-types';
import { Item, Img } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ item, onChange }) => {
  return (
    <Item onClick={() => onChange(item.id)}>
      <Img src={item.webformatURL} alt={item.tags} />
    </Item>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propTyps = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};
