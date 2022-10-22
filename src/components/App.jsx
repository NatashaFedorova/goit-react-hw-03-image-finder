import { Component } from 'react';
import { getGallery } from './services/api';
import Modal from 'components/Modal';
import Header from './Header';
import Section from './Section';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import BtnLoadMore from './BtnLoadMore';
import { Background } from 'components/constants/Base.styled';

export class App extends Component {
  state = {
    gallery: [],
    value: '',
    page: 1,
    totalImages: 0,
    isLoadMore: false,
    isLoading: false,
    visibilityModal: false,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.value !== this.state.value) {
      this.fetchGalleryAfterChangeValue();
    }

    if (prevState.page !== this.state.page) {
      this.fetchGalleryAfterChangePage();
    }
  }

  changeValue = value => {
    this.setState({ value });
  };

  changePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  fetchGalleryAfterChangeValue = async () => {
    const { value, page } = this.state;
    try {
      this.setState({ isLoading: true });
      const galleryList = await getGallery(value, page);
      this.setState({
        gallery: galleryList.hits,
        totalImages: galleryList.totalHits,
        isLoadMore: true,
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  fetchGalleryAfterChangePage = async () => {
    const { value, page } = this.state;
    try {
      this.setState({ isLoading: true });
      const galleryList = await getGallery(value, page);
      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...galleryList.hits],
        isLoadMore: true,
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { gallery, totalImages, isLoading, visibilityModal, isLoadMore } =
      this.state;
    return (
      <Background>
        <Header>
          <Searchbar onSubmit={this.changeValue} />
        </Header>
        <Section>
          {gallery.length > 0 && <ImageGallery gallery={gallery} />}
          {isLoading && <Loader />}
          {isLoadMore && totalImages !== gallery.length && (
            <BtnLoadMore onClick={this.changePage} />
          )}

          {visibilityModal && <Modal />}
        </Section>
      </Background>
    );
  }
}
