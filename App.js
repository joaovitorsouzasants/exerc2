import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Fragment } from 'react/cjs/react.development';

import {Home} from "./src/screens/Home";

export default function App(){
  return (
    <Fragment>
      <StatusBar barTtyle="light-content" />
      <Home/>
      </Fragment>
  );
}


