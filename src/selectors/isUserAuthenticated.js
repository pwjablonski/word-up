export default function isUserAuthenticated(state) {
  return state.user.loginState === "AUTHENTICATED";
}
