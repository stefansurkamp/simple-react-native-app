import React from 'react';
import { Platform, ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components';

const StyledText = styled.Text`
  font-size: ${({ emoji }) => (emoji ? '50px' : '22px')};
  min-height: 300px;
  background-color: ${({ background }) => background};
`;

const Solutio = () => (
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
        <StyledText background="brown">Beep bop</StyledText>
      )}
    </ScrollView>
  </SafeAreaView>
);

export default Solutio;
