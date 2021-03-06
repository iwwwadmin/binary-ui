import PropTypes from 'prop-types';
import React from 'react';
import SliderComponent from 'react-native-slider';
import SliderContainer from '../components-styled/SliderContainer';
import SliderScaleIcon from '../components-styled/SliderScaleIcon';

const SLIDER_STYLE_OBJ = {
  flex: 9,
};

const TRACK_STYLE_OBJ = {
  height: 1,
};

const THUMB_STYLE_OBJ = {
  backgroundColor: '#FFF',
  borderWidth: 1,
  borderColor: '#000',
};

const propTypes = {
  position: PropTypes.number.isRequired,
  renderIconLeft: PropTypes.func,
  renderIconRight: PropTypes.func,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  renderIconLeft: undefined,
  renderIconRight: undefined,
};

const Slider = ({ position, renderIconLeft, renderIconRight, onChange }) => (
  <SliderContainer>
    <SliderScaleIcon>
      {renderIconLeft ? renderIconLeft() : null}
    </SliderScaleIcon>
    <SliderComponent
      minimumTrackTintColor="#b3b3b3"
      style={SLIDER_STYLE_OBJ}
      thumbStyle={THUMB_STYLE_OBJ}
      trackStyle={TRACK_STYLE_OBJ}
      value={position}
      onValueChange={onChange}
    />
    <SliderScaleIcon>
      {renderIconRight ? renderIconRight() : null}
    </SliderScaleIcon>
  </SliderContainer>
);

Slider.defaultProps = defaultProps;
Slider.propTypes = propTypes;

export default Slider;
