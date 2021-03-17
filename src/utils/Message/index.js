import { showMessage } from "react-native-flash-message";

const messageAlert = (msg, desc, type) => {
  return showMessage({
    message: msg,
    description: desc,
    type: type,
    icon: type,
  });
};
export { messageAlert };
