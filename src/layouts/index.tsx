import React from 'react';
import FooterNav from './ footer';

export default function index(props:any) {
  return (
    <div>
      {props.children}
      <FooterNav />
    </div>
  )
}

