import React, { PureComponent } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import router from 'umi/router';


export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    if (window.location.pathname.indexOf('/home') < 0) {
      router.replace('/home');
      return;
    }
  }
  
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }

  componentDidMount() {
  }

  render() {
    return (
      <WingBlank>
        <div>hello world465444646</div>
      </WingBlank>     
    )
  }
}