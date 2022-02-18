import React, { useEffect, useState } from 'react';
import { fetchData } from 'API';
import { Global } from '@emotion/react';
import GlobalStyles from 'Utils/Styles/GlobalStyles';
import NavigationBar from 'Components/Common/NavigationBar';
import { INITIAL_CATEGORY } from 'Utils/Constants/';
import { SelectedInterface, DataInterface } from 'Utils/Interfaces';
import SelectModal from 'Components/SelectModal';

function App() {
  const localSelected = localStorage.getItem('selected');
  const [selected, setSelected] = useState<SelectedInterface>(
    localSelected ? JSON.parse(localSelected) : INITIAL_CATEGORY
  );
  const [data, setData] = useState<DataInterface | null>(null);

  useEffect(() => {
    !localSelected &&
      localStorage.setItem('selected', JSON.stringify(INITIAL_CATEGORY));

    fetchData().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Global styles={GlobalStyles} />
      <NavigationBar />
      <SelectModal
        text="+ 카테고리 설정"
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}

export default App;
