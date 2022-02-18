import React, { useEffect, useState } from 'react';
import GlobalStyles from 'Utils/Styles/GlobalStyles';
import styled from '@emotion/styled';
import NavigationBar from 'Components/Common/NavigationBar';
import Table from 'Components/Table';
import Footer from 'Components/Footer';
import { fetchData } from 'API';
import { Global } from '@emotion/react';
import { Box } from '@mui/system';
import { DataInterface } from 'Utils/Interfaces';

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
      <Footer />
    </div>
  );
}

const Wrapper = styled(Box)`
  padding: 20px 25px 10px;
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const Content = styled(Box)`
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 30px;
  @media (max-width: 768px) {
    padding: 0;
    border: none;
  }
`;

export default App;
