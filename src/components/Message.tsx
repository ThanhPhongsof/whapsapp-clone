import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { IMessage } from "../../types";
import { auth } from "../config/firebase";

const StyledMessage = styled.p`
  width: fit-content;
  word-break: break-all;
  max-width: max-content;
  min-width: 8%;
  padding: 15px 15px 30px;
  border-radius: 8px;
  margin: 10px;
  position: relative;
`;

const StyledSenderMessage = styled(StyledMessage)`
  margin-left: auto;
  background: #dcf8c6;
`;

const StyledReceiverMessage = styled(StyledMessage)`
  background: whitesmoke;
`;

const StyledTimestamp = styled.span`
  color: gray;
  padding: 10px;
  font-size: x-small;
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: right;
`;

const Message = ({ message }: { message: IMessage }) => {
  const [loggedInUser, _loading, _error] = useAuthState(auth);

  const MessageType =
    loggedInUser?.email === message.user
      ? StyledSenderMessage
      : StyledReceiverMessage;

  return (
    <MessageType>
      {message.text}
      <StyledTimestamp>{message.sent_at}</StyledTimestamp>
    </MessageType>
  );
};

export default Message;
