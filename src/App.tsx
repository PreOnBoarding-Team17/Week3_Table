import React, { useEffect } from 'react';
import { fetchData } from 'API';
import { Global } from '@emotion/react';
import GlobalStyles from 'Utils/Styles/GlobalStyles';

function App() {
  useEffect(() => {
    fetchData().then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Global styles={GlobalStyles} />
      ased
    </div>
  );
}

export default App;
