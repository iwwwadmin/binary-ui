import { FONT_FAMILY_MAIN_400 } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  color: inherit;
  font-family: ${FONT_FAMILY_MAIN_400};
  font-size: 14px;
  overflow: hidden;
  padding-left: 15px;
  padding-right: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
`;
