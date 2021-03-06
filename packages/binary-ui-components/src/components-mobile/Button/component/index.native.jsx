import ArrowRight from 'binary-ui-icons/binary/ArrowRight';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableHighlight } from 'react-native';
import ButtonContentHighlight from '../components-styled/ButtonContentHighlight.native';
import ButtonText from '../components-styled/ButtonText';
import ButtonWrapper from '../components-styled/ButtonWrapper';
import IconStyledWrapper from '../components-styled/IconStyledWrapper.native';
import { TAP_HIGHLIGHT_COLOR } from '../utils/styles';
import { getOpacity, getHighlightEditStyle } from '../../../utils/styles-api';

const propTypes = {
  color: PropTypes.string,
  isBold: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isEdit: PropTypes.bool,
  isValid: PropTypes.bool,
  label: PropTypes.string.isRequired,
  renderIcon: PropTypes.func,
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
};

const defaultProps = {
  color: '#000000',
  isBold: false,
  isDisabled: false,
  isEdit: true,
  isValid: true,
  renderIcon: (props) => (<ArrowRight {...props} />),
  onLongPress: undefined,
  onPress: undefined,
  onPressIn: undefined,
  onPressOut: undefined,
};

const Button = ({
  color,
  isBold,
  isDisabled,
  isEdit,
  isValid,
  label,
  renderIcon,
  onLongPress,
  onPress,
  onPressIn,
  onPressOut,
  ...props,
}) => (
  <TouchableHighlight
    underlayColor={!isDisabled ? TAP_HIGHLIGHT_COLOR : undefined}
    onLongPress={!isDisabled ? onLongPress : undefined}
    onPress={!isDisabled ? onPress : undefined}
    onPressIn={!isDisabled ? onPressIn : undefined}
    onPressOut={!isDisabled ? onPressOut : undefined}
    {...props}
  >
    <ButtonContentHighlight>
      <ButtonWrapper style={getHighlightEditStyle(isEdit, isValid, false, undefined)} >
        <IconStyledWrapper>
          {renderIcon({ color, opacity: getOpacity(isDisabled), size: 18 })}
        </IconStyledWrapper>
        <ButtonText isBold={isBold} isDisabled={isDisabled} numberOfLines={1} styleColor={color} >
          {isBold ? label.toUpperCase() : label}
        </ButtonText>
      </ButtonWrapper>
    </ButtonContentHighlight>
  </TouchableHighlight>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
