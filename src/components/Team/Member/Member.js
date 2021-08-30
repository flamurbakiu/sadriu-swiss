import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Member.css';
import LazyLoad from 'react-lazyload';

function Member(props) {
  return (
    <div className='member'>
      <LazyLoad height={200}>
        <Avatar src={props.src} style={{ width: '250px', height: '250px' }} />
      </LazyLoad>
      <h2>{props.name}</h2>
      <p>{props.position}</p>
    </div>
  );
}

export default Member;
