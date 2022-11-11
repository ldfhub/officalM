import React from 'react';
import Header from './header';
import FooterNav from './ footer';
import { affirmRouterHeader } from '@/utils/utils';

export default function index(props: any) {
  const addRouterHeader = ['/list', '/upload', '/profile'];
  const flag = affirmRouterHeader(addRouterHeader, props.location.pathname);
  const routes = props.route.routes;
  const titleObj = routes.filter(
    (item: any) => item.path === props.location.pathname,
  );
  // console.log(props)
  // console.log(titleObj)
  const contentHeight = { height: 'calc(100% - 50px)' };
  return (
    <div style={{ height: '100%' }}>
      {flag && <Header title={titleObj[0].title} />}
      <div style={contentHeight}>{props.children}</div>
      <FooterNav />
    </div>
  );
}
