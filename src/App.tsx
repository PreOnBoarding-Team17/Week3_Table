import React, { useEffect } from 'react';
import { fetchData } from 'API';
import { Button } from '@mui/material';

function App() {
  useEffect(() => {
    fetchData().then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div className="App">
      Hello
      <Button variant="contained" color="primary">
        Text
      </Button>
    </div>
  );
}

export default App;
