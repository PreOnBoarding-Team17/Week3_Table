import React from 'react';
import styled from '@emotion/styled';
import { Box, AppBar, Chip, Button, Typography, Toolbar } from '@mui/material';

const NavigationBar = () => {
  return (
    <AppBar position="static" sx={{ boxShadow: 'none' }}>
      <Toolbar
        sx={{ backgroundColor: 'white', borderBottom: '1px solid #dddddd' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: 80,
            justifyContent: 'center',
          }}
        >
          <Box>
            <Chip
              size="small"
              sx={{
                backgroundColor: '#7DD8FF',
                color: 'white',
              }}
              label="출고 관리"
            />
          </Box>
          <Typography
            variant="h5"
            sx={{ color: '#3e3e3e', fontWeight: 'bold', marginTop: '4px' }}
          >
            출고 매핑 관리
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          sx={{
            border: '1px solid #777777',
            color: '#3e3e3e',
            boxShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          }}
        >
          VOC 관리
        </Button>
        <Button
          sx={{
            border: '1px solid #777777',
            color: '#3e3e3e',
            marginLeft: '10px',
            boxShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          }}
        >
          출고 신청 정보
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
