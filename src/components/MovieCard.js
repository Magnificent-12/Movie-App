import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState} from 'react';
import {ExpandMore} from '../Helper_components/ExpandMore';

export const MovieCard = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [poster, setPoster] = useState(props.moviePoster);
  const color = props.movieFavorite ? 'red' : 'black';
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card
      sx={{
        maxWidth: 250,
        margin: '20px',
        background: 'linear-gradient(315deg, #6a93cb 0% , #a4bfef 74%)',
        borderRadius: '15px',
        boxShadow: 'black 15px 15px 10px',
      }}
    >
      <CardHeader
        title={props.movieTitle + ' ' + props.movieYear}
        subheader={props.movieGenre}
        sx={{
          height: '70px',
          alignItems: 'start',
          marginBottom: '20px',
          fontSize: '10px',
          '& .MuiCardHeader-title': {fontSize: '1.25rem'},
          '& .MuiCardHeader-subheader': {fontSize: '0.95rem'},
        }}
      />
      <CardMedia
        onError={() => setPoster('https://applified.in/jalaram-marketing/admin_crm/img/noimg.jpg')}
        component="img"
        height="200"
        image={poster}
        alt={props.movieTitle}
        sx={{objectFit: 'contain'}}
      />
      <CardContent sx={{height: '50px'}}>
        <Typography variant="body2" color="text.secondary">
          {props.movieActors}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => props.handleFavorites(props.movieTitle)}>
          <FavoriteIcon
            sx={{
              color: color,
              transition: '0.4s',
            }}
          />
        </IconButton>

        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Movie description:</Typography>
          <Typography paragraph>{props.movieDescription}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
