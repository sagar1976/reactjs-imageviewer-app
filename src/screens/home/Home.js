import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Header from '../../common/header/Header';
import likeIcon from '../../assets/like.svg';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
// import Moment from 'react-moment';
// import 'moment-timezone';
// import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import './Home.css';

import imagesData from '../../common/ImageData';
import userData from '../../common/UserData';

// <GridList cols={2}>

// </GridList>               
class HomePage extends Component{
    render(){
        return(
            <div>
                <Header><h3>Added more items</h3></Header>
                <GridList cols={2}>
                    {
                        imagesData.data.map((data)=>(
                            <GridListTile key={data.id}>
                            <Box mb={2}>
                            <Card>
                                <CardHeader
                                    avatar={<Avatar alt="Upgrad Icon" src={userData.data.profile_picture}/>}
                                    title={userData.data.username}
                                    subheader={new Date(data.created_time*1000).toLocaleDateString("en-US")+" "+new Date(data.created_time*1000).toLocaleTimeString("en-US")}
                                />
                                
                                <CardContent>
                                    <img src={data.images.standard_resolution.url} height="50%" width="50%" alt="images from db"/>
                                    <hr align="left" width="50%"></hr>
                                    <Typography variant="body2">
                                        {data.caption.text.split("\n")[0]} 
                                    </Typography>
                                    <Typography>
                                        {data.caption.text.split("\n")[1]}
                                    </Typography>
                                    <img src={likeIcon} alt="Like Icon" ></img>
                                    <span>{data.likes.count} likes</span>
                                    <br></br>
                                    <Input id="comment" type="text" placeholder="Add a comment"></Input>
                                    <Button variant="contained" color="primary">
                                        Add
                                    </Button>
                                </CardContent>
                            </Card>
                            </Box>
                            </GridListTile>
                        ))
                    }
                    </GridList>
            </div>
        )
    }
}

export default HomePage;