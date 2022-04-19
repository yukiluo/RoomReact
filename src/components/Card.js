import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='df tc br3 pa3 ma2 dib bw2 b--black-10 ba' style={{ flex: 1, width: '150px'}}>
      <img alt='robots' src={`https://robohash.org/${id}?size=100x100`} />
      <div>
        <h2>Room: {id}</h2>  
        {/* <h2>{name}</h2> */}
        {/* <p>{email}</p> */}
      </div>
    </div>
  );
}

export default Card;
