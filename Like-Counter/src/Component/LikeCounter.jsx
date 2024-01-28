import React, { useEffect, useState } from 'react';
import { incrementLike, decrementLike } from './Actions';
import Reducer from './Reducer';
import { createStore } from 'redux';

const store = createStore(Reducer);

const LikeCounter = () => {
  const [likes, setLikes] = useState(store.getState().likes);


  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setLikes(store.getState().likes);
    });


    return unsubscribe;
  }, []);

  const handelLike = () => {
    store.dispatch(incrementLike());
  };

  const handelUnlike = () => {
    store.dispatch(decrementLike());
  };

  return (
    <div>
      <h1>{likes}</h1>
      <button onClick={handelLike} style={{ margin: '0px 20px' }}>
        Like
      </button>
      <button onClick={handelUnlike}>Unlike</button>
    </div>
  );
};

export default LikeCounter;
