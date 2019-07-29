import React, { PureComponent } from 'react';
import { Carousel, WingBlank, WhiteSpace, List } from 'antd-mobile';
import router from 'umi/router';
import img1 from '../../assets/4904.jpg_wh1200.jpg';
import img2 from '../../assets/8028.jpg_wh1200.jpg';
import styles from './index.less';
import icon1 from '../../assets/clock.svg';
import icon2 from '../../assets/heart-outline.svg';
import icon3 from '../../assets/history.svg';
import icon4 from '../../assets/monitor.svg';
import icon5 from '../../assets/paper-plane.svg';
import icon6 from '../../assets/share.svg';
import icon7 from '../../assets/speech-bubble.svg';
import icon8 from '../../assets/settings.svg';
import icon9 from '../../assets/qr-code.svg';


export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    if (window.location.pathname.indexOf('/home') < 0) {
      router.replace('/home');
      return;
    }
  }
  
  state = {
    data: ['1', '2'],
    imgHeight: 600,
    imgMap: {
      ['1']: img1,
      ['2']: img2,
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className={styles.con}>
        <Carousel
          autoplay={true}
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              style={{display: 'inline-block', width: '100%', height: this.state.imgHeight}}
              className={styles.zhanshi}
            >
              <img src={this.state.imgMap[val]} />
            </a>
          ))}
        </Carousel>
        <div className={styles.list}>
          <List>
            <List.Item thumb={icon1} arrow="horizontal">推送历史</List.Item>
            <List.Item thumb={icon5} arrow="horizontal">我的应用</List.Item>
            <List.Item thumb={icon2} arrow="horizontal">喜欢</List.Item>
          </List>
          <WhiteSpace />
          <List>
            <List.Item thumb={icon4} arrow="horizontal">电视</List.Item>
            <List.Item thumb={icon9} arrow="horizontal">扫一扫</List.Item>
          </List>
          <WhiteSpace />
          <List>
            <List.Item thumb={icon7} arrow="horizontal">帮助反馈</List.Item>
            <List.Item thumb={icon6} arrow="horizontal">分享</List.Item>
            <List.Item thumb={icon8} arrow="horizontal">设置</List.Item>
          </List>         
        </div>
      </div>
    )
  }
}