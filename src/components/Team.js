import React from 'react';
import PropTypes from 'prop-types';

import { IconClose } from '../icons';
import './Team.css';

export const TeamMember = ({
  name,
  id,
  content,
  picture,
  active,
  show,
  onActive,
  onDismiss,
}) => (
  <div className={`TeamMember ${show ? 'show' : ''} ${active ? 'active' : ''}`}>
    <div
      className={
        active ? 'TeamMember__background visible' : 'TeamMember__background'
      }
      onClick={() => onDismiss()}
    />
    <div className="TeamMember__container">
      <div className="TeamMember__dismiss">
        <button onClick={() => onDismiss()}>
          <div className="TeamMember__dismiss__icon-wrapper">
            <IconClose iconTitle="close" width="18" height="18" />
          </div>
        </button>
      </div>
      <div
        className="TeamMember__container__content"
        onClick={() => onActive(id)}
      >
        <div className="TeamMember__container__picture">
          <img alt={name} src={picture} width="200px" />
        </div>
        <div className="TeamMember__content__copy__container">
          <h4>{name}</h4>
          <div
            className="TeamMember__content__copy"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  </div>
);

TeamMember.propTypes = {
  show: PropTypes.bool.isRequired,
};
