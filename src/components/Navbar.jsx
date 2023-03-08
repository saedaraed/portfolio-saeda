import { AppBar, Box, Container, Tab, Tabs, Toolbar} from '@mui/material'
import { DrawerComponent } from './DrawerComponent'
import { Link } from "react-router-dom";
import Logo from '../assets/file.png'
export default function Navbar() {
    const pages= ['About' ,'Resume' , 'Portfolio' , 'Contact' ]
  return (
      <>
           
          <AppBar sx={{ background: '#342831', boxShadow: 'none' }}>
              <Container maxWidth="lg" >
              <Toolbar>
                      <Box component="img" alt="" src={Logo} sx={{width:{xs:'30px' , md:'35px'}}} />
                    
                      <Tabs sx={{ marginLeft: 'auto', display: { xs: 'none', lg: 'block' } }} textColor='inherit' >
                                                  <Link to={`/`} sx={{color:'#fff' , textDecoration:'none'}}> <Tab  label='home' sx={{color:'#fff' , textDecoration:'none'}}/></Link> 

                      {pages.map((page , index) => (
                        <Link to={`/${page}`} sx={{color:'#fff' , textDecoration:'none'}}> <Tab key={index} label={page} sx={{color:'#fff' , textDecoration:'none'}}/></Link> 

                     ))}
                       
                  </Tabs>
                 
                  <DrawerComponent pages={pages} />
                  </Toolbar>
                   </Container>
              </AppBar>
             
      </>
  )
}
