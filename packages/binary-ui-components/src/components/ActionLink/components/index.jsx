import PropTypes from 'prop-types';
import React from 'react';
import ActionableIconWrapper from '../components-styled/ActionableIconWrapper';
import ActionLinkRender from '../components-styled/ActionLinkRender';
import ActionableIcon from '../../ActionableIcon';
import ActionableText from '../../ActionableText';
import { isLeftButton } from '../../../utils/events';

const propTypes = {
  children: PropTypes.any,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  onTapDown: PropTypes.func,
  renderIconLeft: PropTypes.func,
  renderIconRight: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  isDisabled: false,
  onClick: undefined,
  onTapDown: undefined,
};

export default class ActionLink extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.onTapUp = () => { this.onSetActive(false); };
    this.onSetActive = this.onSetActive.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.onTapUp);
    window.addEventListener('touchend', this.onTapUp);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onTapUp);
    window.removeEventListener('touchend', this.onTapUp);
  }

  onSetActive(isActive) {
    if (this.state.isActive === isActive) {
      return;
    }
    this.setState({
      isActive,
    });
  }

  renderIcon(renderIcon) {
    const { isDisabled } = this.props;
    const { isActive } = this.state;
    return (
      <ActionableIconWrapper>
        <ActionableIcon isActive={isActive} isDisabled={isDisabled} renderIcon={renderIcon} />
      </ActionableIconWrapper>
    );
  }

  render() {
    const {
      children,
      isDisabled,
      onClick,
      onTapDown,
      renderIconLeft,
      renderIconRight,
      ...props,
    } = this.props;
    const { isActive } = this.state;
    return (
      <ActionLinkRender
        onClick={!isDisabled && onClick}
        onMouseDown={!isDisabled && ((e) => { if (isLeftButton(e)) { this.onSetActive(true); } if (onTapDown) { onTapDown(e); } })}
        onTouchStart={!isDisabled && ((e) => { this.onSetActive(true); if (onTapDown) { onTapDown(e); } })}
        {...props}
      >
        {renderIconLeft ? this.renderIcon(renderIconLeft) : null}
        <ActionableText isActive={isActive} isDisabled={isDisabled} >
          {children}
        </ActionableText>
        {renderIconRight ? this.renderIcon(renderIconRight) : null}
      </ActionLinkRender>
    );
  }
}

ActionLink.propTypes = propTypes;
ActionLink.defaultProps = defaultProps;
