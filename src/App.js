import { useEffect } from 'react';

import io from './services/socket';

export default function App() {
  useEffect(() => {
    if (!io.connected) {
      io.connect();
    }
 
    return () => {
      io.disconnect();
    }
  }, []);

  return (
    <h1>Hello World</h1>
  );
}
