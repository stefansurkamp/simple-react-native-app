import React, { Component } from 'react';
import styled from 'styled-components';
import { Platform, SafeAreaView, ScrollView } from 'react-native';

const StyledText = styled.Text`
  font-size: ${({ emoji }) => (emoji ? '50px' : '22px')};
  min-height: 300px;
  min-width: 150px;
  background-color: ${({ background }) => background};
`;

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <StyledText background="lightcoral">Hello</StyledText>
          <StyledText background="aquamarine">Dev</StyledText>
          <StyledText background="lightslategray">Austausch</StyledText>
          <StyledText background="peachpuff">People</StyledText>
          <StyledText background="gold" emoji>
            🤖
          </StyledText>
          {Platform.OS === 'ios' && (
            <StyledText background="green">Beep bop</StyledText>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
