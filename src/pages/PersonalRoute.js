import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
import { useUserContext } from '../context/user_context';

const PersonalRoute = () => {
  return <h4>Your Route</h4>;
};
export default PersonalRoute;
