import react from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Link href='/'>
          <a>노드버드</a>
        </Link>
        <Link href='/profile'>
          <a>프로필</a>
        </Link>
        <Link href='/signup'>
          <a>회원가입</a>
        </Link>
      </div>
      {children}
    </div>
  );
}; //return 안의 모든 값들이 node 화면에 비추는 모든것 react의 node

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
