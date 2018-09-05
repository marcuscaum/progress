import React from 'react';
import PropTypes from 'prop-types';

import Container from './index.styled';

const LayoutContainer = ({ children }) => <Container>{children}</Container>;

LayoutContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default {
  Container: LayoutContainer,
};
