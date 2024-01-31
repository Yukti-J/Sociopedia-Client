import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from 'scenes/navbar'
import AdvertWidget from 'scenes/widgets/AdvertWidget';
import FriendListWidget from 'scenes/widgets/FriendListWidget';
import MyPostsWidgets from 'scenes/widgets/MyPostsWidgets';
import PostsWidget from 'scenes/widgets/PostsWidget';
import UserWidget from 'scenes/widgets/UserWidget';
const HomePage = () => {

  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const {_id, picturePath} = useSelector((state)=>state.user);
  // console.log("home",_id)
  return (
    <Box>
       <Navbar/>
       <Box  
          width="100%" 
          padding="2rem 6%" 
          display={isNonMobileScreens ? "flex" : "block"}
          gap="0.5rem"
          justifyContent="space-between">
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget id={_id} picturePath={picturePath} />
        </Box>
        
        <Box 
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostsWidgets picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreens && <Box flexBasis="26%">
          <AdvertWidget/>
          <Box m="2rem 0"/>
          <FriendListWidget userId={_id}/>
          </Box>}
       </Box>
    </Box>
  )
}

export default HomePage
