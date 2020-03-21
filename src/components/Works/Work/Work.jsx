import React from 'react'
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const Work = ({item , showDetail}) => {
    const call_showDetail = (item) =>{
        showDetail(item)
    }
    const useStyles = makeStyles({
        root: {
            width: "100%"
        },
        media: {
            height: 0,
            paddingTop: '56.25%'
        },
    });
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={item.img}
                    title={item.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={()=> call_showDetail(item)}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}
export default Work