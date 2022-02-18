import React, { useEffect } from 'react';
import { fetchData } from 'API';
import { Global } from '@emotion/react';
import GlobalStyles from 'Utils/Styles/GlobalStyles';
import NavigationBar from 'Components/Common/NavigationBar';

function App() {
  useEffect(() => {
    fetchData().then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Global styles={GlobalStyles} />
      <NavigationBar />
    </div>
  );
}

export default App;
