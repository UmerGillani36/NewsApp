import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const NavBar = () => {
  return (
   <AppBar position='static'>
    <Toolbar>
        <Typography variant='h2' component='div' color='inherit' sx={{fontFamily:'Bebas Neue'}}>NEWS APP</Typography>
    </Toolbar>
   </AppBar>
  )
}

export default NavBar