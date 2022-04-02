import * as React from 'react';
import { createElement } from 'react';
import { Button } from '@alifd/next';
// import { ButtonProps } from '@alifd/next/types/button';
import './index.scss';

export interface ColorfulButtonProps {
  /**
   * 类型
   */
  type?: "primary" | "secondary" | "normal";
  color?: string;
  style?: object;
  /**
   * @default xxxx
   */
  content?: string;
}

const ColorfulButton: React.FC<ColorfulButtonProps> = function ColorfulButton({
  type = 'primary',
  color,
  style = {},
  content,
  ...otherProps
}) {
  const _style = style || {};
  if (color) {
    _style.backgroundColor = color;
  }
  const _otherProps = otherProps || {};
  _otherProps.style = _style;
  return (
    <Button type={type} { ..._otherProps } >{content}</Button>
  );
};

ColorfulButton.displayName = 'ColorfulButton';

export default ColorfulButton;


