import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

export const Container = styled(BorderlessButton)`
  padding-bottom: ${RFValue(20)}px;
  padding-left: ${RFValue(20)}px;
  padding-top: ${getStatusBarHeight() + 15};
  background-color: #171717;
  width: 100%
`;