import { Component } from 'react';
import { getGallery } from './services/api';
import toast, { Toaster } from 'react-hot-toast';
import Modal from 'components/Modal';
import Header from './Header';
import Section from './Section';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import BtnLoadMore from './BtnLoadMore';
import Loading from './Loading';
import { Background } from 'components/constants/Base.styled';

const errorStyle = {
  style: {
    color: '#fff',
    background: 'red',
  },
};
export class App extends Component {
  state = {
    gallery: [],
    value: '',
    page: 1,
    error: null,
    totalImages: 0,
    isLoadMore: false,
    isLoading: false,
    showModal: false,
    selectedGalleryItem: null,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.value !== this.state.value) {
      this.fetchGalleryAfterChangeValue();
    }

    if (prevState.page !== this.state.page) {
      this.fetchGalleryAfterChangePage();
    }

    if (prevState.error !== this.state.error && this.state.error) {
      toast.error(this.state.error, errorStyle);
    }
  }

  changeValue = value => {
    this.setState({ value, gallery: [], error: null });
  };

  changePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    this.setState({ error: null });
  };

  fetchGalleryAfterChangeValue = async () => {
    const { value, page } = this.state;
    try {
      this.setState({ isLoading: true });
      const { hits, totalHits } = await getGallery(value, page);

      if (hits.length === 0) {
        this.setState({ error: 'Nothing was found for this request :(' });
      }

      this.setState({
        gallery: hits,
        totalImages: totalHits,
        isLoadMore: true,
      });
    } catch (error) {
      this.setState({
        error: 'Oops! Something went wrong :( please, try reloading the page',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  fetchGalleryAfterChangePage = async () => {
    const { value, page } = this.state;
    try {
      this.setState({ isLoading: true, isLoadMore: false });
      const { hits } = await getGallery(value, page);

      if (hits.length === 0) {
        this.setState({ error: 'Nothing was found for this request :(' });
      }

      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...hits],
        isLoadMore: true,
      }));
    } catch (error) {
      this.setState({
        error: 'Oops! Something went wrong :( please, try reloading the page',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  getImgByItemId = id => {
    const { gallery } = this.state;
    const selectedGalleryItem = gallery.find(item => item.id === id);
    this.setState({ selectedGalleryItem });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const {
      gallery,
      totalImages,
      isLoading,
      isLoadMore,
      selectedGalleryItem,
      showModal,
    } = this.state;

    const btnLoadMoreVisibility =
      isLoadMore && totalImages !== gallery.length && gallery.length !== 0;

    const galleryVisibility = gallery.length > 0;

    return (
      <Background>
        <Header>
          <Searchbar onSubmit={this.changeValue} />
        </Header>
        <Section>
          {galleryVisibility && (
            <ImageGallery gallery={gallery} onChange={this.getImgByItemId} />
          )}
          {isLoading && <Loading />}
          {btnLoadMoreVisibility && <BtnLoadMore onClick={this.changePage} />}
          {showModal && (
            <Modal item={selectedGalleryItem} onClose={this.toggleModal} />
          )}
        </Section>
        <Toaster position="top-right" />
      </Background>
    );
  }
}

// // import Skeleton from './Skeleton';
//  {isLoading && <Skeleton />}
