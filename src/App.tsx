import React, { useEffect, useState } from 'react';
import { Global } from '@emotion/react';
import GlobalStyles from 'Utils/Styles/GlobalStyles';
import { Box } from '@mui/system';
import styled from '@emotion/styled';
import NavigationBar from 'Components/Common/NavigationBar';
import Table from 'Components/Table';
import { DataInterface } from 'Utils/Interfaces';
import { fetchData } from 'API';

function App() {
  const [datas, setDatas] = useState<DataInterface[] | null>(null);

  useEffect(() => {
    fetchData().then((res) => {
      setDatas(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Global styles={GlobalStyles} />
      <NavigationBar />

      <Wrapper>
        {datas && (
          <Content>
            <Table datas={datas} />
          </Content>
        )}
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
  border-radius: 10px;
  padding: 30px;
`;

export default App;
