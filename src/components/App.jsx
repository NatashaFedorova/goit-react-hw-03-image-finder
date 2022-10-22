import { Component } from 'react';
import Header from './Header';
import Section from './Section';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import BtnLoadMore from './BtnLoadMore';
import { Background } from 'components/constants/Base.styled';
import Loader from './Loader';

export class App extends Component {
  state = {};

  render() {
    return (
      <Background>
        <Header>
          <Searchbar />
        </Header>
        <Section>
          <ImageGallery />
          <BtnLoadMore />
          <Loader />
        </Section>
      </Background>
    );
  }
}
