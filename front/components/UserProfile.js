import React, { useCallback } from 'react';
import { Avatar, Card, Button } from 'antd';
import PropTypes from 'prop-types';

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <Card
      actions={[
        <div key='twit'>
          트윗
          <br />0
        </div>,
        <div key='following'>
          팔로잉
          <br />0
        </div>,
        <div key='follower'>
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>DB</Avatar>} title='Dabin' />

      <Button style={{ marginTop: '15px' }} onClick={onLogOut}>
        로그아웃
      </Button>
    </Card>
  );
};

UserProfile.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default UserProfile;