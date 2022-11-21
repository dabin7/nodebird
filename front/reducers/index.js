import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user';
import post from './post';

//이전상태 + 액션 = 다음상태 rootReducer
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return { ...state, ...action.payload };

      default:
        return state;
    }
  }, //서버사이드렌더링 ssr 을 위해 HYDRATE를 사용 index를 넣어줌
  user,
  post,
});

export default rootReducer;
