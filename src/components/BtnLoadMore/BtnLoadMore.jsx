import { Button } from './BtnLoadMore.styled';

const BtnLoadMore = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      Load-more
    </Button>
  );
};

export default BtnLoadMore;
