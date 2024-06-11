export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,

//   remove after developing
  token:
    "BQBqxoT1M3g-1cqMFHA2QkZrA57Z4QW0lTPCmGLFNSIKe6on7go71MO3fnFCbuz3HIjuv41wP-VEQ0hq0kahVH2bSt7OZg3Ga-ZIUNFEtsBr3ieE8rR1k7MkVDzBjn3dEVoBV8JxVNQG3W12kXNhKcbROcXMNuzKBjMnC5ruB2FyMqbW80jXlAHbLOgcAEeuN1xDd5wHAgASNN-MbVsPseVwN_h-8nPvbdGa9IuDbEnsQFg",
};

export const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "SET_USER":
            return {
               ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
               ...state,
                token: action.token,
            };
        
        
        default:
            return state;
    }
}