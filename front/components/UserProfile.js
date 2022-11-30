import React, { useCallback } from 'react';
import { Avatar, Card, Button } from 'antd';
import { loginRequestAction } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, isLoggingOut } = useSelector((state) => state.user);

  const onLogOut = useCallback(() => {
    dispatch(loginRequestAction());
  }, []);

  return (
    <Card
      actions={[
        <div key='twit'>
          트윗
          <br />
          {me.Posts.length}
        </div>,
        <div key='following'>
          팔로잉
          <br />
          {me.Followings.length}
        </div>,
        <div key='follower'>
          팔로워
          <br />
          {me.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>{me.nickname}</Avatar>} title={me.nickname} />
      <br />
      <Button onClick={onLogOut} loading={isLoggingOut}>
        로그아웃
      </Button>
    </Card>
  );
};

export default UserProfile;
