import {  Box, Container, Tab, Tabs, Typography } from '@mui/material'
import '../App.css'
import { useState } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


AOS.init({  duration: 1000,});



const skills = [
  {
    
    name:'HTML'
  },
   {
    
    name:'CSS'
  },
    {
    
    name:'JavaScript'
  },
     {
    
    name:'React.JS'
  },
      {
    
    name:'Redux'
  },
   {
    
    name:'Styled-components'
  },
   {
    
    name:'Material UI'
  },

   {
    
    name:'Bootstrap'
  },
   {
    
    name:'Git'
  },
   {
    
    name:'GitHub'
  },
   {
    
    name:'UI'
  },
   {
    
    name:'UX'
  },
]
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
          {...other}
          
    >
      {value === index && (
        <Box sx={{ px: 3 , py:2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
export const Experience = () => {

    
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
      <>
          <Container  maxWidth="lg" sx={{minHeight:'100vh' ,  padding:{xs:'150px 20px' , md:'200px 0px'}}} data-aos="zoom-in">
         <Box sx={{display:'flex' , gap:'10px' , alignItems:'center'}}>
              <Typography variant='h6' sx={{color:'#c4c2c2' , marginTop:'5px'}}>
                02.
              </Typography>
            <Typography variant='h2' sx={{fontSize:{xs:'22px', md:'30px'} , fontWeight:'bold' , color: '#e41db2'}}>
                Experience & Skills
              </Typography>
              <Box sx={{width:{xs:'100px' , md:'300px'}  , height:'.5px' , background:'#342831' , marginTop:'8px' , background:'#63515f'  }}></Box>
              </Box>

              <Box sx={{display:'flex' , flexWrap:{xs:'wrap' , lg:'nowrap'} , marginTop:'40px' , gap:'20px'}}>
                 
          <Box sx={{ width: { xs: '100%', lg: '60%' } }}>
            <Typography variant='h5' sx={{textAlign:'left' , marginLeft:'20px' , marginBottom:'20px' , fontWeight:'bold' , color:'#c4c2c2' ,fontSize:{xs:'22px', md:'27px'} }}>
                Where I've Worked
            </Typography>
                       <Box sx={{ flexGrow: 1, bgcolor: 'transparent', display: 'flex'}}>
                           <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' , textAlign:'left' }}
                          >
                <Tab label="Projects " {...a11yProps(0)} />
        <Tab label="Ggateway" {...a11yProps(1)}/>
        <Tab label="Wedia" {...a11yProps(2)}/>

                          </Tabs>
                           <TabPanel value={value} index={0} sx={{textAlign:'left'}}>
        <Typography variant="h6"  sx={{textAlign:'left' , fontWeight:'bold' ,color:'#e41db2' , display:'flex' , fontSize:{xs:'17px' , md:'20px'} }}>
          Front-End Developer & UI/UX Designer,Freelancer
                              </Typography>
                              <Typography variant='body2'  sx={{textAlign:'left' , color:'#63515f' , marginTop:'10px'}}>
                                  12/2022 – Current
                              </Typography>
                               <ul style={{ paddingLeft:'0px' , textAlign:'left'}}>
                          <li>
                               Developed the front-end for a self-employment platform using HTML, CSS, Bootstrap, and JavaScript. 

                          </li>
                          <li>
                            Designed the front-end for a hotel management system using HTML, CSS, Bootstrap, and JavaScript. 
                          </li>
                          <li>
                              Developed the front-end for a restaurant management system using HTML, CSS, Bootstrap, and JavaScript.
                          </li>
                              </ul> 
      </TabPanel>
      <TabPanel value={value} index={1}>
            <Typography variant="h6"  sx={{textAlign:'left' , fontWeight:'bold' ,color:'#e41db2'  , display:'flex' , flexWrap:'nowrap'  , fontSize:{xs:'17px' , md:'20px'}}}>
          React.JS Developer Traineeship,GGateway, Gaza Strip - Palestine
                              </Typography>
                              <Typography variant='body2'  sx={{textAlign:'left' , color:'#63515f' , marginTop:'10px'}}>
                                  04/2022 – 09/2022
                              </Typography>
                           <ul>
                          <li>
                              Developed and maintained single-page applications using React.js framework
                          </li>
                          <li>
                              Implemented front-end application logic using HTML, CSS, and JavaScript
                          </li>
                          <li>
                              Designed and implemented user interfaces using React.js 
                          </li>
                          <li>
                              Designed and implemented user interfaces using React.js 
                          </li>
                          <li>
                               Collaborated with back-end developers and other team members to integrate the front-end and back-end 
                                parts of the application
                          </li>

                          <li>
                               Participated in code reviews and provided constructive feedback to other team members
                          </li>
                          <li>
                               Troubleshot and debugged code
                          </li>
                          <li>
                              Executed responsive design for mobile devices
                          </li>
                          <li>
                              Implemented user interactions and animations using React.js or a JavaScript library
                          </li>
                          <li>
                             Optimized the performance and load times of the application 
                          </li>
                            <li>
                              Implemented security measures to protect the application from potential attacks
                          </li>
                            <li>
                              Integrated the application with external APIs and services
                          </li>
                            <li>
                              Participated in the entire application lifecycle, from concept to deployment
                          </li>
                          <li>
                              Assisted documentation and technical writing as needed
                          </li>
                              </ul>
      </TabPanel>
           <TabPanel value={value} index={2}>
            <Typography variant="h6"  sx={{textAlign:'left' , fontWeight:'bold' ,color:'#e41db2' , display:'flex' , flexWrap:'nowrap'   , fontSize:{xs:'17px' , md:'20px'}}}>
                    Front-End Developer, Wedia, Gaza Strip - Palestine
            </Typography>
                              <Typography variant='body2'  sx={{textAlign:'left' , color:'#63515f' , marginTop:'10px'}}>
                                 04/2021 – 08/2021
                              </Typography>
                              <ul>
                          <li>
                            Designed and implemented user interfaces using HTML, CSS, and JavaScript  
                          </li>
                          <li>
                              Created responsive layouts that adapt to different screen sizes and devices
                          </li>
                          <li>
                              Ensured that the website or web application is visually appealing and user-friendly
                          </li>
                          <li>
                              Worked closely with back-end developers to integrate the front-end and back-end parts of the application
                          </li>
                          <li>
                              Debugged and troubleshot code
                          </li>
                          <li>
                              Participated in code reviews and provided constructive feedback to other team members
                          </li>

                          <li>
                              Integrated the application with external APIs and services
                          </li>
                          <li>
                              Collaborated with designers to create a cohesive look and feel for the website or web application
                          </li>
                          <li>
                              Participated in the entire application lifecycle, from concept to deployment
                          </li>
                          <li>
                              Mentored junior developers and helped them grow in their careers
                          </li>
                        
                              </ul>
      </TabPanel>
                      </Box>
                  </Box>
                  <Box sx={{ textAlign: 'left', width: { xs: '100%', lg: '40%'  } }}> 
                        <Typography variant='h5' sx={{textAlign:'left' , marginLeft:'20px' , marginBottom:'20px' , fontWeight:'bold' , color:'#c4c2c2' ,fontSize:{xs:'22px', md:'27px'} }}>
                   Skills
            </Typography>
            <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' , marginLeft:'20px'}}>
              {skills.map((skill , index) => (
                <Box sx={{border:'solid 1px #e41db2' , width:'auto' , borderRadius:'8px' , padding:'7px 10px'}}>
                  <Typography variant='body1' key={index} sx={{color:'#c4c2c2'}}>
                    {skill.name}
                  </Typography>
                </Box>
              ))}
              
            </Box>
            <Typography variant='h5' sx={{textAlign:'left' , marginLeft:'20px' , marginBottom:'20px' , marginTop:'20px', fontWeight:'bold' , color:'#c4c2c2'}}>
                   Languages
            </Typography>
            <Box sx={{display:'flex' , gap:'20px', marginLeft:'20px'}}>
            <Box sx={{display:'flex'}}><Typography variant='body1' sx={{fontWeight:'bold' , color:'#c4c2c2'}}>Arabic &nbsp;</Typography> <Typography variant='body1' sx={{color:'#c4c2c2'}}>-  Native</Typography></Box>
                       <Box sx={{display:'flex'}}><Typography variant='body1' sx={{fontWeight:'bold' , color:'#c4c2c2'}}>English &nbsp;</Typography> <Typography variant='body1' sx={{color:'#c4c2c2'}}>-  Working Proficiency</Typography></Box>

            </Box>
            
            </Box>
              </Box>
        </Container>
      </>
  )
}
