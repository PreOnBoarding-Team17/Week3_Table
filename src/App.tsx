import React, { useEffect, useState } from 'react';
import { fetchData } from 'API';
import { INITIAL_CATEGORY } from 'Utils/Constants/';
import { SelectedInterface } from 'Utils/Interfaces';
import SelectModal from 'Components/SelectModal';

function App() {
  const [selected, setSelected] = useState<SelectedInterface>(INITIAL_CATEGORY);

  useEffect(() => {
    const localData = localStorage.getItem('selected');

    if (localData) setSelected(JSON.parse(localData));
    else localStorage.setItem('selected', JSON.stringify(INITIAL_CATEGORY));

    fetchData().then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div className="App">
      Hello
      <SelectModal
        text="+ 카테고리 설정"
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}

export default App;
