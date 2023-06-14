import React from 'react';
import '../assets/stylesheets/Count.css';

function Count({ numClicks }) {
  return (
    <div className='count'>
      {numClicks}
    </div>
  )
}

export default Count;


