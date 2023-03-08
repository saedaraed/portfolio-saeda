import { Box, Button, Container, Typography } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { Card } from './Card'
import Image1 from '../assets/PBLTHX1.png'
import Image2 from '../assets/gallery app1.png'
import Image3 from '../assets/ORH92S1.png'
import Image4 from '../assets/dc4b3610-d5cd-4260-8bb1-d6d1d1c0e93c.png'
import Image5 from '../assets/التقاط الويب_24-2-2023_213429_.jpeg'
import Image6 from '../assets/التقاط الويب_25-2-2023_13640_bojfbmnxvu0qucftdz0zyq.on.drv.tw.jpeg'
import Image7 from '../assets/5401087.png'
import Image8 from '../assets/tore.png'

import '../App.css'
const items = [
    {
        id:'1',
        name: 'Nook',
        category: 'front-design',
        link: 'https://bojfbmnxvu0qucftdz0zyq.on.drv.tw/nook/',
        image:Image1
    },
     {
        id:'2',
         name: 'Gallery App',
        category: 'react',

        link: 'https://gallery-app-one.vercel.app/',
        image:Image2
    },
      {
        id:'3',
        name: 'Moovie App',
        category: 'react',
        link: 'https://movies-website-one.vercel.app/',
        image:Image3
  },
      {
        id:'4',
        name: 'To do list',
        category: 'react',
        link: 'https://to-do-list-sand-one.vercel.app/',
        image:Image4
  },
        {
        id:'5',
        name: 'Moovie App',
        category: 'react',
        link: 'https://movies-website-one.vercel.app/',
        image:Image3
  },
  {
    id: '6',
    name: 'Hotel management',
    category: 'front-design',
    link: 'https://nzl.vercel.app/',
    image:Image5
    

  },
  {
    id: '7',
    name: 'Restaurant management',
    category: 'front-design',
    link: 'https://bojfbmnxvu0qucftdz0zyq.on.drv.tw/%E2%80%8F%E2%80%8Fdashboard%20-%20%D9%86%D8%B3%D8%AE%D8%A9/menu-editor.html',
   image:Image6
  },
  {
    id: '8',
    name: 'Music app',
    category: 'UI/UX',
    link: 'https://www.behance.net/gallery/139757463/echo-app-design',
    image:Image7
  },
   {
    id: '9',
    name: 'online shop',
    category: 'UI/UX',
    link: 'https://www.behance.net/gallery/138949209/online-shop',
    image:Image8
  },
]


export const Category = () => {
    console.log(items)
    const [list, setList] = useState(items)
    const [selectCategory, setSelectCategory] = useState();
    useEffect(() => {
    setList(list);
    }, []);
   
    function getFilteredList() {
  if (!selectCategory) {
    return list;
  }
  return list.filter((item) => item.category === selectCategory);
    }

    var filteredList = useMemo(getFilteredList, [selectCategory, list]);
    
 function handleCategoryChange(event) {
   setSelectCategory(event.target.value);
  }
 
  
    console.log(list)
  return (
    <>
      <Container maxWidth="lg" sx={{ minHeight:'100vh',  padding:{xs:'150px 20px' , md:'200px 0px'}}} data-aos="fade-down">
             <Box sx={{display:'flex' , gap:'10px' , alignItems:'center'}}>
              <Typography variant='h6' sx={{color:'#c4c2c2' , marginTop:'5px'}}>
                03.
              </Typography>
            <Typography variant='h2' sx={{fontSize:{xs:'22px', md:'30px'} , fontWeight:'bold' , color: '#e41db2'}}>
                Projects
              </Typography>
              <Box sx={{width:{xs:'100px' , md:'300px'}  , height:'.5px' , background:'#63515f' , marginTop:'8px' }}></Box>
            </Box>
        <Box sx={{ display: 'flex', gap: {xs:'20px', md:'10px'} , width:'100%' , justifyContent:'center' , marginBottom:'30px' , marginTop:'50px'}}>
          <Button onClick={handleCategoryChange} sx={{color:'#c4c2c2'}} className='button-style-active'>All</Button>

          <Button value='front-design' onClick={handleCategoryChange} sx={{color:'#c4c2c2'}}   className='button-style-active'>Front-Design</Button>
          <Button value='react' onClick={handleCategoryChange} sx={{color:'#c4c2c2'}}  className='button-style-active'>React</Button>
          <Button value='UI/UX' onClick={handleCategoryChange} sx={{color:'#c4c2c2'}}  className='button-style-active'>UI/UX Design</Button>

        </Box>
      
          <Box sx={{ display: 'flex', flexWrap: 'wrap' , gap:'10px' }}>
             
              {filteredList.map((idx) => (
                  <Card key={idx.id} name={idx.name} link={idx.link} image={idx.image} category={idx.category} />
              ))}

        
         
              </Box>
        </Container>
        
      </>
  )
}
