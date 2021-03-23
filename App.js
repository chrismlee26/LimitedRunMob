import React, { useState } from 'react';
// import Home from './app/screens/home';
import Login from './app/screens/login';
// import { AppLoading } from 'expo';

import Navigator from './app/routes/homeStack';




export default function App() {
  return (
    <Navigator />
  );
}
