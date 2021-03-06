import PropTypes from 'prop-types';
import React from 'react';
import TooltipStyled from '../components-styled/TooltipStyled';

const propTypes = {
  isVisible: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(['bottom-right', 'bottom-left']),
};

const defaultProps = {
  placement: 'bottom-right',
};

const Tooltip = ({ isVisible, label, placement, ...props }) => (
  <TooltipStyled isVisible={isVisible} placement={placement} {...props} >
    {label}
  </TooltipStyled>
);

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
