import React from 'react'
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const Work = ({item, showDetail, setOpen}) => {
    const call_showDetail = (item) => {
        showDetail(item);
        setOpen(true);
    }

    const useStyles = makeStyles({
        root: {
            width: "100%"
        },
        media: {
            height: 280,
            backgroundSize: 'contain'
            // paddingTop: '56.25%'
        },
    });
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>

                <CardMedia
                    className={classes.media}
                    image={require('./../../../img/works/thumb/' + item.img)}
                    title={item.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.description.length > 45 ? item.description.substr(0, 45) + '..' : item.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => call_showDetail(item)}>
                    Learn More
                </Button>
                {item.href !== '#'?
                    <Button target="_blank" href={item.href} title={'Go to Site'}>
                        <ExitToAppIcon />
                    </Button>: false}

            </CardActions>
        </Card>
    )
}
export default Work