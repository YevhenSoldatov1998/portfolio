import React from 'react'
import s from './DetailWork.module.sass'
import {Card} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles(theme => ({
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

const DetailWork = ({hideDetail, handleClose, item}) => {
    const [expanded, setExpanded] = React.useState(false);

    const classes = useStyles();
    const call_hideDetail = () => {
        hideDetail();
        handleClose();
    }
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return <Card className={s.popupItem}>
            <CardHeader
                action={
                    <IconButton onClick={call_hideDetail} aria-label="Close popup">
                        <CloseIcon />
                    </IconButton>
                }
                title={item.name}
                subheader={item.addedDate}
            />
            <CardMedia
                className={classes.media}
                image={item.fullImg}
                title={item.name}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {item.fullText}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
}
export default DetailWork