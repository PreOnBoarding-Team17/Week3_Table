import React, { useEffect, useState } from 'react';
import { fetchData } from 'API';
import { Global } from '@emotion/react';
import GlobalStyles from 'Utils/Styles/GlobalStyles';
import NavigationBar from 'Components/Common/NavigationBar';
import SettingCategory from 'Components/SettingCategory';
import { INITIAL_CATEGORY } from 'Utils/Constants/';
import { SelectedInterface, DataInterface } from 'Utils/Interfaces';
import { Box } from '@mui/system';
import styled from '@emotion/styled';
import SearchCategory from 'Components/SearchCategory';

function App() {
  const localSelected = localStorage.getItem('selected');
  const [selected, setSelected] = useState<SelectedInterface>(
    localSelected ? JSON.parse(localSelected) : INITIAL_CATEGORY
  );
  const [data, setData] = useState<DataInterface[] | null>(null);

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
      <Wrapper>
        <Content>
          <ContentMenu>
            <SearchCategory selected={selected} />
            <SettingCategory selected={selected} setSelected={setSelected} />
          </ContentMenu>
          <ContentTable></ContentTable>
        </Content>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled(Box)`
  padding: 20px 25px;
`;

const Content = styled(Box)`
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 30px;
`;

const ContentMenu = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ContentTable = styled(Box)``;

export default App;
