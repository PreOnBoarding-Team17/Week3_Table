import React, { useEffect, useState } from 'react';
import { fetchData } from 'API';
import { Button } from '@mui/material';
import Table from 'Components/Table';

function App() {
  const [allData, setAllData] = useState<any>([]);
  useEffect(() => {
    fetchData().then((res) => {
      console.log(res.data);
      setAllData(res.data);
    });
  }, []);

  return (
    <div className="App">
      Hello
      <Button variant="contained" color="primary">
        Text
      </Button>
      <Table datas={allData} />
    </div>
  );
}

export default App;
