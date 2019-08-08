export default function getCurrentUserId(state) {
  return state.user.account ? state.user.account.id : null;
}
