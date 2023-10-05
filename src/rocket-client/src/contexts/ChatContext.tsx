import ChatDrawer from '@/components/ChatDrawer';
import { Box, Fab, Tooltip, keyframes } from '@mui/material';
import Color from 'color';
import { createContext, useState } from 'react';
import { BsRobot } from 'react-icons/bs';

const initialOptions = {};

const ChatContext = createContext({
  options: initialOptions,
});

const pulse = keyframes`
  0% {
    background-color: transparent;
  }
  20% {
    background-color: inherit;
  }
  80% {
    background-color: inherit;
  }
  100% {
    background-color: transparent;
  }
`;

interface IProps {
  children: React.ReactNode;
}

export const ChatProvider: React.FC<IProps> = (props: IProps) => {
  const { children } = props;
  const [options, setOptions] = useState(initialOptions);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <ChatContext.Provider
      value={{
        options,
      }}
    >
      {children}
      <Box
        sx={{
          bgcolor: (theme) => Color(theme.palette.primary.main).alpha(0.4).toString(),
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            borderRadius: '50%',
            position: 'fixed',
            bottom: 32,
            right: 32,
            animation: `${pulse} 3s infinite ease`,
            p: 1,
          }}
        >
          <Tooltip title='Chat' placement='left'>
            <Fab color='primary' onClick={handleOpen}>
              <BsRobot style={{ fontSize: 30 }} />
            </Fab>
          </Tooltip>
        </Box>
      </Box>

      <ChatDrawer open={isOpen} onClose={() => setOpen(false)} />
    </ChatContext.Provider>
  );
};

export const ChatConsumer = ChatContext.Consumer;

export default ChatContext;
