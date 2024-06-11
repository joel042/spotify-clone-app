export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUrl = "http://localhost:3000/";
const clientId = "ebad6826439e4eafbc54d95fdf033568";

// const scopes = [
//   "user-read-currently-playing",
//   "user-read-currently-played",
//   "user-read-playback-state",
//   "user-top-read",
//   "user-modify-playback-state",
// ];


const scopes = [
  "user-read-playback-position",
  "user-read-email",
  "user-read-private",
  "user-library-read",
  "user-library-modify",
];

export const getTokenFromUrl = (url) => {
    return window.location.hash.substring(1).split("&").reduce((initial, item) => {
        let parts = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    } ,{});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;


// export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
//   "%20"
// )}&response_type=token&show_dialog=true`;