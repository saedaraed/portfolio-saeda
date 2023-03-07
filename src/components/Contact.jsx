import { Box, Container , Link, Typography } from '@mui/material'
import React from 'react'

const titleStyle = {
  fontSize: '30px',
  fontWeight: 'bold',
  color: '#e41db2' ,

}
const buttonSX = {
    color: '#e41db2',
    border: 'solid 2px #e41db2',
    marginTop: '30px',
    width: 'auto',
    padding: '10px 0px',
    borderRadius:'10px',
    fontSize: '20px',
    backgroundColor:'transparent',
  "&:hover": {
    borderColor: "#e41db2",
    },
    
};
export const Contact = () => {
  return (
      <>
          <Container maxWidth="lg" sx={{ minHeight:'100vh' ,  padding:{xs:'150px 20px' , md:'200px 0px'}}}>
            <Box sx={{display:'flex' , gap:'10px' , alignItems:'center'}}>
              <Typography variant='h6' sx={{color:'#c4c2c2' , marginTop:'5px'}}>
                04.
              </Typography>
            <Typography variant='h2' sx={{fontSize:{xs:'22px', md:'30px'} , fontWeight:'bold' , color: '#e41db2'}}>
                Contact me
                  </Typography>
                 
              <Box sx={{width:{xs:'100px' , md:'300px'}  , height:'.5px' , background:'#342831' , marginTop:'8px' , background:'#63515f'  }}></Box>
              </Box>
            
              <Typography variant='body1' sx={{marginTop:'70px' , fontSize:'20px' , color:'#c4c2c2'}}>
              I’m excited to learn about your project. <span style={{color:'#e41db2'}}>Ready to get started?</span> 

              </Typography>
              <Typography variant='body1' sx={{fontSize:'20px' , color:'#c4c2c2'}}> Or, if you have other request or question, feel free to send an email..
              </Typography>
           
              <button style={buttonSX}>
                  <Link href='mailto: saedaraed19@gmail.com' sx={{textDecoration:'none' , color:'#e41db2' , padding:'10px 20px'}}>send email</Link>
              </button>
              
              </Container>
      </>
  )
}
