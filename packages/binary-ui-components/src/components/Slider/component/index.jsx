import PropTypes from 'prop-types';
import React from 'react';
import SliderBar from './SliderBar';
import SliderContainer from '../components-styled/SliderContainer';
import SliderScaleIcon from '../components-styled/SliderScaleIcon';

const propTypes = {
  position: PropTypes.number.isRequired,
  renderIconLeft: PropTypes.func,
  renderIconRight: PropTypes.func,
  onPositionChange: PropTypes.func.isRequired,
};

const defaultProps = {
  renderIconLeft: undefined,
  renderIconRight: undefined,
};

const Slider = ({ position, renderIconLeft, renderIconRight, onPositionChange }) => (
  <SliderContainer>
    <SliderScaleIcon>
      {renderIconLeft ? renderIconLeft() : null}
    </SliderScaleIcon>
    <SliderBar position={position} onPositionChange={onPositionChange} />
    <SliderScaleIcon>
      {renderIconRight ? renderIconRight() : null}
    </SliderScaleIcon>
  </SliderContainer>
);

Slider.defaultProps = defaultProps;
Slider.propTypes = propTypes;

export default Slider;
