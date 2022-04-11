'use strict';

import * as React from 'react';
import { createElement } from 'react';

import { Button } from '@alifd/next';

import './index.scss';

export interface PortalCardProps {
  title?: string|any;
  description?: string;
  backgroundImage?: string;
  href?: string;
  style?: Record<string, any>
}

const PortalCard: React.FC<PortalCardProps> = (props: PortalCardProps) => {
  const { title, description, backgroundImage, href, style: propStyle = {}, children } = props;

  const [ style, setStyle ] = React.useState(propStyle)

  const onClick = () => {
    window.open(href);
  }

  const onMouseEnter = () => {
    console.log('onMouseEnter');
    setStyle({
      ...style,
      background: `url(${backgroundImage})`
    });
  }

  const onMouseLeave = () => {
    console.log('onMouseLeave');
    setStyle({
      ...style,
      background: null
    })
  }

  return (
    <div className="portal-card" style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
      <div>
        <div className="title">
          {title}
        </div>
        <div className="description">
          {description}
        </div>
      </div>
      <div>
        <Button type="normal" onClick={onClick}  >详情</Button>
      </div>
    </div>
  );

}

PortalCard.defaultProps = {
  title: 'Title',
  description: 'This is a description',
};

export default PortalCard;