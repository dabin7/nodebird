import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { Menu, Input, Row, Col } from 'antd';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

const AppLayout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const items = [
    {
      label: (
        <Link href='/'>
          <a>노드버드</a>
        </Link>
      ),
      key: 'nodebrid',
    },
    {
      label: (
        <Link href='/profile'>
          <a>프로필</a>
        </Link>
      ),
      key: 'profile',
    },
    { label: <Input.Search style={{ verticalAlign: 'middle' }} /> },
    {
      label: (
        <Link href='/signup'>
          <a>회원가입</a>
        </Link>
      ),
      key: 'signup',
    },
  ];

  return (
    <div>
      <Menu mode='horizontal' items={items} />
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        {/* xs 모바일 md 데스크탑 n/24 */}
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          오른쪽메뉴
          {/* <a href='/' target='_blank'새창에서 띄우기 rel='noreferrer noopener'-보안문제로 해줘야됨>fjdkl</a> */}
        </Col>
      </Row>
    </div>
  ); //grid Row Col
}; //return 안의 모든 값들이 node 화면에 비추는 모든것 react의 node

export default AppLayout;
