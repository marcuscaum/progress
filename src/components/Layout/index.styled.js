import styled from 'styled-components';
import Box from 'styles/Box.styled';

const Container = styled(Box).attrs({
  width: 1 / 2,
  background: 'black',
})`
  margin: auto;
`;

export default Container;
