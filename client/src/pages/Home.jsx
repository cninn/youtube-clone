import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import axios from 'axios'

const Container = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
padding: 22px 96px ;
`



const Home = ({type}) => {

const [videos,setVideos] = useState([]);

useEffect(()=>{
  const fetchVideos = async () => {
    try {
      const response = await axios.get(`http://localhost:8800/api/videos/${type}`);
      setVideos(response.data);
      console.log(response.data);
      // Process the videos data
    } catch (error) {
      console.error(error);
    }
  };
  fetchVideos()
},[type])


  return (
    <Container>

      {
        videos.map((video)=>[
          <Card key={video._id} video={video}/>
        ])
      }
   


    </Container>
  )
}

export default Home
