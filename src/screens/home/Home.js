import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Header from '../../common/header/Header';
import imagesData from '../../common/ImageData';
import likeIcon from '../../assets/like.svg';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import GridList from '@material-ui/core/GridList';
import './Home.css';


// console.log(imagesData.data);
// imagesData.data.map((data)=>{
//     console.log(data.likes.count)
// })

class HomePage extends Component{
    render(){
        return(
            <div>
                <Header><h3>Added more items</h3></Header>
                <span>List of images</span>

                
                    {
                        imagesData.data.map((data)=>(

                            
                            <Card key={data.id}>
                                <CardHeader>   
                                    avatar={
                                        <Avatar aria-label="recipe">
                                            R
                                        </Avatar>
                                        }                             >
                                        action={
                                            <IconButton aria-label="settings">
                                              <MoreVertIcon />
                                            </IconButton>
                                        }
                                </CardHeader>
                                
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