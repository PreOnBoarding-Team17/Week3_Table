import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Modal,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import styled from '@emotion/styled';
import { SelectedInterface } from 'Utils/Interfaces';
import useToggle from 'Utils/Hooks/UseToggle';

const BTNTEXT = '카테고리 선택';
const MODALTITLE = '카테고리 선택해주세요.';
const MODALBTNTEXT = '선택 완료';

interface SearchCategoryProps {
  selected: SelectedInterface;
}

const SearchCategory: React.FC<SearchCategoryProps> = ({ selected }) => {
  return <div>123</div>;
};

export default SearchCategory;
