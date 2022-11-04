import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet='Utf-8' />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};
//prop의 Component 를 사용하여 pages의 공통분모 적용

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default NodeBird;
