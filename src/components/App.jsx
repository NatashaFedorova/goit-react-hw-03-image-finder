import { Component } from 'react';
import Section from 'components/Section';
import { Background } from 'components/constants/Background.styled';

export class App extends Component {
  state = {};

  render() {
    return (
      <Background>
        <Section>
          <h1>finder</h1>
        </Section>
      </Background>
    );
  }
}
