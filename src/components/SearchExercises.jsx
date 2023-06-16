import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '30px' },
          mb: '50px',
          textAlign: 'center',
        }}
      >
        Awesome Exercises <br />
        You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '1170px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          height="76px"
          value=""
          onChange={(e) => {}}
          placeholder="Search Exercises"
          type="text"
        />
        <button
          className="search-btn"
          //   sx={{
          //     bgcolor: 'FF625',
          //   }}
        >
          Search
        </button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;