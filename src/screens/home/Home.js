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
// import Moment from 'react-moment';
// import 'moment-timezone';
// import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
import './Home.css';

import imagesData from '../../common/ImageData';
import userData from '../../common/UserData';

                   
class HomePage extends Component{
    render(){
        return(
            <div>
                <Header><h3>Added more items</h3></Header>
                
                    {
                        imagesData.data.map((data)=>(

                            
                            <Card key={data.id}>
                                <CardHeader
                                    avatar={<Avatar alt="Upgrad Icon" src={userData.data.profile_picture}/>}
                                    title={userData.data.username}
                                    subheader={new Date(data.created_time*1000).toLocaleDateString("en-US")+" "+new Date(data.created_time*1000).toLocaleTimeString("en-US")}
                                />
                                
                                <CardContent>
                                    <img src={data.images.standard_resolution.url} alt="images from db"/>
                                    <hr></hr>
                                    <Typography variant="body2">
                                        {data.caption.text.split("\n")[0]} 
                                    </Typography>
                                    <Typography>
                                        {data.caption.text.split("\n")[1]}
                                    </Typography>
                                    <img src={likeIcon} alt="Like Icon"></img>
                                    <span>{data.likes.count} likes</span>
                                    <br></br>
                                    <Input id="comment" type="text" placeholder="Add a comment"></Input>
                                    <Button variant="contained" color="primary">
                                        Add
                                    </Button>
                                </CardContent>
                            </Card>
  
                        ))
                    }
            
            </div>
        )
    }
}

export default HomePage;