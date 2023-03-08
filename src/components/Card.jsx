import { Box, Button, Link, Typography } from '@mui/material'
import '../App.css'
const contentStyle = {
    display:'none'
}
const cardStyle = {
    width: { xs: '100%', md: '50%', lg: '32%' },
    position: 'relative',
    minHeight: 'auto',
    marginBottom:'10px'
}


export const Card = ({ name  , link , image , category }) => {
  return (
      <>
          <Box sx={cardStyle} className='cardStyle'>
              <Box component="img" alt=""  src={image} className='image-card-style' sx={{width:'100%' , height:'100%' , objectFit:'cover'}} />
              <Box sx={contentStyle} className='contentStyle'>
                  <Typography variant='h5' sx={{color:'#fff' , fontWeight:'bold' ,textAlign:'center', marginTop:'100px'}}> {name}</Typography>
                  <Typography sx={{ display: 'none' }}> {category}</Typography>
                  <Box sx={{width:'100%' , display:'flex' , justifyContent:'center' }}>
                       <Button sx={{border:'solid 2px #e41db2' , borderRadius:'none' , width:'100px'}}>
                      <Link href={link} sx={{color:'#fff' , textDecoration:'none'}}>View</Link>
                  </Button>
                  </Box>
                 
                  
              </Box>
              
          </Box>
      </>
  )
}
