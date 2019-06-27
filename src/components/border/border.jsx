import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React from 'react';

const useStyles = makeStyles(theme => ({
  // в зависимости от размера фото выбираем нужные стили
  cardMin: {
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
  const dataCreate=new Date(props.created_time*1000).toDateString();// устанавливаем дату появления фото в Instagram
  const usersInPhoto=props.users_in_photo; // пользователи на фото
  let contentAboutUsers;
  //обработка информации о юзерах на фото
  if(usersInPhoto.length===0) contentAboutUsers='Нет информации о пользователях Instagram на фотографии';
  else contentAboutUsers='Пользователи на фотографии:\n'+usersInPhoto.map(item=>item.user.username+'\n')

  let nameLocation;
  if(props.location===null)  nameLocation='\n Нет информации о месте, где сделано фото.';
  else  nameLocation="\n Фотография сделана в "+props.location.name;
  return (
    <Card className={props.size==='big' ? classes.cardMax:classes.cardMin}>
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
       <CardActions disableSpacing>
         <IconButton aria-label="Add to favorites">
           <FavoriteIcon />
         </IconButton>
         <Typography variant="body2" color="textSecondary" component="p">
           {props.likes}{" likes "}{props.comments}{" comments"}
         </Typography>
       </CardActions>
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
