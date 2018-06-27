import React from 'react';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import StackoverflowIcon from '../icons/StackoverflowIcon';
import FacebookIcon from '../icons/FacebookIcon';
import GithubIcon from '../icons/GithubIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import MediumIcon from '../icons/MediumIcon';
import InstagramIcon from '../icons/InstagramIcon';
import GitterIcon from '../icons/GitterIcon';
import NpmIcon from '../icons/NpmIcon';
import FiveHundredPxIcon from '../icons/FiveHundredPxIcon';
import GmailIcon from '../icons/GmailIcon';
import TelegramIcon from '../icons/TelegramIcon';
import BloggerIcon from '../icons/BloggerIcon';

const UserDetails = (props) => {
  return (
    <Grid container spacing={24}>
      <Grid item xs={12} style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
        <Avatar
          alt="Adelle Charles"
          style={{ height: '250px', width: '250px' }}
          src="http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png"
        />
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
        <div><h1>ARAVINDHAN.J</h1>
          <h3>Software Analyst</h3></div>
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>

      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-around' }}>
        <div className='profile-links' style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-around', width: '60vw' }}>
          <StackoverflowIcon />
          <FacebookIcon onClick={(e) => console.log(e)} />
          <GithubIcon />
          <LinkedinIcon />
          <MediumIcon />
          <InstagramIcon />
          <GitterIcon />
          <NpmIcon />
          <FiveHundredPxIcon />
          <GmailIcon />
          <TelegramIcon />
          <BloggerIcon />
        </div>
      </Grid>
    </Grid>
  );
};

export default UserDetails;
