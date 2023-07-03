import {useEffect, useState} from 'react';
import io from 'socket.io-client';
import {config} from '../config';

const useSocket = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(config);
    setSocket(newSocket);

    // Clean up socket on component unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  return socket;
};

export default useSocket;
