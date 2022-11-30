import shortId from 'shortid';
import produce from 'immer';

export const initialState = {
  mainPosts: [
    {
      id: 1,

      User: {
        id: 1,
        nickname: '제로초',
      },

      content: '첫 번째 게시글 #해시태그',

      Images: [
        {
          id: shortId.generate(),
        },
      ],

      Comments: [
        {
          id: shortId.generate(),
          User: {
            id: shortId.generate(),
            nickname: 'nero',
          },
          content: '우와',
        },

        {
          id: shortId.generate(),
          User: {
            id: shortId.generate(),
            nickname: 'hero',
          },
          content: '사고싶어요~',
        },
      ],
    },
  ],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
}; //더미 데이터

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

const dummyPost = (data) => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: '제로',
  },

  Images: [],
  Comments: [],
});

const dummyComment = (data) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: '제로',
  },
});

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
        return {
          ...state,
          addPostLoading: true,
          addPostDone: false,
          addPostError: null,
        };
      case ADD_POST_SUCCESS:
        return {
          ...state,
          mainPosts: [dummyPost(action.data), ...state.mainPosts], //dummyPost를 앞에다 두어야 게시물이 위에 온다.
          addPostLoading: false,
          addPostDone: true,
        };
      case ADD_POST_FAILURE:
        return {
          addPostLoading: false,
          addPostError: action.error,
        };

      case REMOVE_POST_REQUEST:
        return {
          ...state,
          removePostLoading: true,
          removePostDone: false,
          removePostError: null,
        };
      case REMOVE_POST_SUCCESS:
        return {
          ...state,
          mainPosts: state.mainPosts.filter((v) => v.id !== action.data),
          removePostDone: true,
        };
      case REMOVE_POST_FAILURE:
        return {
          removePostLoading: false,
          removePostError: action.error,
        };

      case ADD_COMMENT_REQUEST:
        return {
          ...state,
          addCommentLoading: true,
          addCommentDone: false,
          addCommentError: null,
        };
      case ADD_COMMENT_SUCCESS:
        const postIndex = state.mainPosts.findIndex(
          (v) => v.id === action.data.postId
        );
        const post = { ...state.mainPosts[postIndex] };
        post.Comments = [dummyComment(action.data.content), ...post.Comments];
        const mainPosts = [...state.mainPosts];
        mainPosts[postIndex] = post;
        //불변성 지키려면 이렇게 해줌...
        return {
          ...state,
          mainPosts,
          addCommentLoading: false,
          addCommentDone: true,
        };
      case ADD_COMMENT_FAILURE:
        return {
          addCommentLoading: false,
          addCommentError: action.error,
        };

      default:
        return state;
    }
  });
};

export default reducer;
