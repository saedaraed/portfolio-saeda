import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import '../App.css'
export const DrawerComponent = ({pages}) => {
  const[openDrawer , setOpenDrawer]=useState(false)
  return (
      <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={{ background: '#4a3c47', padding: '10px', minHight: '100vh' }} classsName='list-nav'>
            <ListItem>
            <ListItemButton>
                <ListItemText>
                  
                  <Link className='link-navi' to={`/`} sx={{color:'#fff' , textDecoration:'none'}}>
                    Home
                  </Link>
              </ListItemText>
            </ListItemButton>
            
          </ListItem>
          {pages.map((page , index) => (
            <ListItem>
            <ListItemButton>
                <ListItemText key={index}>
                  
                  <Link className='link-navi' to={`/${page}`} sx={{color:'#fff' , textDecoration:'none'}}>
                    {page}
                  </Link>
              </ListItemText>
            </ListItemButton>
            
          </ListItem>
          ))}
          
         </List>
      </Drawer>
      <MenuIcon onClick={() => setOpenDrawer(!openDrawer)} sx={{
        display: {
          xs: 'block',
          lg:'none'
      }, marginLeft:'auto'}} />
      </>
  )
}
