import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setGreeting } from '../redux/greeting/greeting';

// eslint-disable-next-line react/prefer-stateless-function
const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('/greetings/message.json')
      .then((response) => {
        const greeting = response.data;
        dispatch(setGreeting({ payload: greeting }));
      })
      .catch(() => {});
  }, []);
  const greeting = useSelector((state) => state.greeting.value.payload);
  return (
    <h1>{ greeting }</h1>
  );
};

export default Greeting;
