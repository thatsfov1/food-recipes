import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import axios from 'axios'
import React from 'react'
import { ServerResponse } from '../../models/models'


type Props ={
    onPageChanged(event: React.ChangeEvent<unknown>, value: number): void,
    totalResults?:number
}

const RecipesPagination = ({onPageChanged,totalResults}:Props) => {


  return (
    <div>
        <Stack spacing={2}>
            {totalResults && <Pagination onChange={onPageChanged}  count={Math.ceil(totalResults / 10)}/>}
        </Stack>
    </div>
  )
}

export default RecipesPagination
