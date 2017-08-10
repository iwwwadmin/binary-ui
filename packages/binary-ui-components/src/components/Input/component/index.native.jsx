import { addMask, removeMask } from 'mask-parser';
import PropTypes from 'prop-types';
import React from 'react';
import InputIcon from '../components-styled/InputIcon';
import InputStyled from '../components-styled/InputStyled';
import InputWrapper from '../components-styled/InputWrapper';
import INPUT_FIELD_TYPES from '../constants/text-field-component-types';
import { getValidatedPhone } from '../utils/validation';
import { getHighlightEditStyle } from '../../../utils/styles-api';

const propTypes = {
  isBold: PropTypes.bool,
  isValid: PropTypes.bool,
  mask: PropTypes.string,
  type: PropTypes.any,
  styleBorderColor: PropTypes.string,
  value: PropTypes.string.isRequired,
  renderIcon: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onMoreClick: PropTypes.func,
  onTextChange: PropTypes.func,
};

const defaultProps = {
  isBold: false,
  isValid: true,
  mask: undefined,
  styleBorderColor: undefined,
  type: INPUT_FIELD_TYPES.ANY,
  renderIcon: undefined,
  onBlur: undefined,
  onFocus: undefined,
  onMoreClick: undefined,
  onTextChange: undefined,
};

export default class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onBlur(e) {
    const { onBlur } = this.props;
    this.setFocus(false);
    if (onBlur) {
      onBlur(e);
    }
  }

  onChange(value) {
    const { onTextChange, mask, type } = this.props;
    if (!onTextChange) {
      return;
    }
    const unmaskedValue = removeMask(value, mask);
    if (type === INPUT_FIELD_TYPES.TEL) {
      onTextChange(getValidatedPhone(unmaskedValue));
      return;
    }
    onTextChange(unmaskedValue);
  }

  onFocus(e) {
    const { onFocus } = this.props;
    this.setFocus(true);
    if (onFocus) {
      onFocus(e);
    }
  }

  setFocus(isActive) {
    if (this.state.isActive === isActive) {
      return;
    }
    this.setState(() => ({
      isActive,
    }));
  }

  getFormattedValue(type, mask, value) {
    switch (type) {
      case INPUT_FIELD_TYPES.NUMBER:
        if (process.env.NODE_ENV !== 'production') {
          if (mask) {
            console.warn('Mask is ignored for \'INPUT_FIELD_TYPES.NUMBER\'.');
          }
        }
        return value;
      case INPUT_FIELD_TYPES.TEL:
        return addMask(value, mask);
      default:
        if (mask) {
          return addMask(value, mask);
        }
        return value;
    }
  }

  getKeyboardType() {
    const { type } = this.props;
    switch (type) {
      case INPUT_FIELD_TYPES.EMAIL:
        return 'email-address';
      case INPUT_FIELD_TYPES.NUMBER:
        return 'numeric';
      case INPUT_FIELD_TYPES.TEL:
        return 'phone-pad';
      default:
        return 'default';
    }
  }

  render() {
    /* eslint-disable no-unused-vars  */
    const {
      isBold,
      isValid,
      mask,
      styleBorderColor,
      type,
      value,
      renderIcon,
      onBlur,
      onFocus,
      onMoreClick,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars  */
    const { isActive } = this.state;
    return (
      <InputWrapper style={getHighlightEditStyle(true, isValid, isActive, styleBorderColor)} >
        {renderIcon && (
          <InputIcon renderIcon={renderIcon} onClick={onMoreClick} />
        )}
        <InputStyled
          isBold={isBold}
          keyboardType={this.getKeyboardType()}
          secureTextEntry={type === INPUT_FIELD_TYPES.PASSWORD}
          value={this.getFormattedValue(type, mask, isBold ? value.toUpperCase() : value)}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          onBlur={this.onBlur}
          onChangeText={this.onChange}
          onFocus={this.onFocus}
          {...props}
        />
      </InputWrapper>
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
