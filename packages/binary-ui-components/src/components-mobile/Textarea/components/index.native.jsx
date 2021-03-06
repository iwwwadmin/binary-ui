import PropTypes from 'prop-types';
import React from 'react';
import TextareaInput from '../components-styled/TextareaInput';
import TextareaWrapperStyled from '../components-styled/TextareaWrapperStyled';
import ActionListItemIcon from '../../ActionListItemIcon';
import { getHighlightEditStyle } from '../../../utils/styles-api';

const propTypes = {
  isValid: PropTypes.bool,
  value: PropTypes.string.isRequired,
  renderIcon: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onIconPress: PropTypes.func,
};

const defaultProps = {
  isValid: true,
  renderIcon: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  onIconPress: undefined,
};

export default class Textarea extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onBlur(e) {
    const { onBlur } = this.props;
    this.setFocus(false);
    if (onBlur) {
      onBlur(e);
    }
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

  render() {
    /* eslint-disable no-unused-vars  */
    const {
      isValid,
      renderIcon,
      onBlur,
      onChange,
      onFocus,
      onIconPress,
      ...props,
    } = this.props;
    /* eslint-enable no-unused-vars  */
    const { isActive } = this.state;
    return (
      <TextareaWrapperStyled style={getHighlightEditStyle(true, isValid, isActive, undefined)} >
        <TextareaInput
          multiline
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          onBlur={this.onBlur}
          onChangeText={onChange}
          onFocus={this.onFocus}
          {...props}
        />
        {renderIcon && (
          <ActionListItemIcon renderIcon={renderIcon} onPress={onIconPress} />
        )}
      </TextareaWrapperStyled>
    );
  }
}

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;
