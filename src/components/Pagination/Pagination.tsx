import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import React from 'react'

const RecipesPagination = () => {
  return (
    <div>
        <Stack spacing={2}>
            <Pagination count={10} />
        </Stack>
    </div>
  )
}

export default RecipesPagination
