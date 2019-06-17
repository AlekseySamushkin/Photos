import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
//import CardActions from '@material-ui/core/CardActions';
//import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
//import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
//import red from '@material-ui/core/colors/red';
//import FavoriteIcon from '@material-ui/icons/Favorite';
//import ShareIcon from '@material-ui/icons/Share';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  cardMin: {
    //marginTop:20,
    maxWidth: 320,
    margin:"20px auto",
  },
  cardMax: {
    maxWidth: 640,
    margin:"20px auto",
  },
  avatarImg: {
    maxWidth: 50,
  },
  //   low_resolution: {width: 320, height: 238,
  // standard_resolution: {width: 640, height: 477,
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function RecipeReviewCard(props) {
  const classes = useStyles();
  //const [expanded, setExpanded] = React.useState(false);
  const dataCreate=new Date(props.created_time*1000).toDateString();
  const usersInPhoto=props.users_in_photo;
  let contentAboutUsers;
  //обработка информации о юзерах на фото
  if(usersInPhoto.length===0) contentAboutUsers='Нет информации о пользователях Instagram на фотографии';
  else contentAboutUsers='Пользователи на фотографии:\n'+usersInPhoto.map(item=>item.user.username+'\n')

  let nameLocation;
  if(props.location===null)  nameLocation='\n Нет информации о месте, где сделано фото.';
  else  nameLocation="\n Фотография сделана в "+props.location.name;
  // function handleExpandClick() {
  //   setExpanded(!expanded);
  // }
  return (
    <Card className={props.sizeBig ? classes.cardMax:classes.cardMin}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe">
            <img alt="avatar" className={classes.avatarImg} src={props.profile_picture} />
          </Avatar>
        }
        title={props.full_name}
        subheader={dataCreate}
      />
      <CardMedia
        className={classes.media}
        image={props.src}
      />
      <CardContent>
       <Typography variant="body2" color="textSecondary" component="p">
         {contentAboutUsers}
       </Typography>
       <Typography variant="body2" color="textSecondary" component="p">
         {nameLocation}
       </Typography>
     </CardContent>
    </Card>
  );
}

export default RecipeReviewCard;
