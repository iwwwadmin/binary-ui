import PropTypes from 'prop-types';
import React from 'react';
import TextStyled from '../component-styled/TextStyled';
import { OPACITY_TRANSITION, getActionOpacityExt } from '../../../utils/styles-api';

const propTypes = {
  color: PropTypes.string,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

const defaultProps = {
  color: '#000000',
  isActive: false,
  style: undefined,
  onClick: undefined,
};

const ActionableText = ({
  color,
  isActive,
  isDisabled,
  style,
  onClick,
  ...props,
}) => (
  <TextStyled
    style={{
      ...style,
      color,
      opacity: getActionOpacityExt(isActive, isDisabled),
      transition: OPACITY_TRANSITION,
    }}
    onClick={!isDisabled && onClick}
    {...props}
  />
);

ActionableText.propTypes = propTypes;
ActionableText.defaultProps = defaultProps;

export default ActionableText;
