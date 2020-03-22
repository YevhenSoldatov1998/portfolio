import React, {useState} from 'react'
import './Works.sass'
import Work from "./Work/Work";
import WorkCategory from "./WorkCategory/WorkCategory";
import DetailWork from "../common/Popup/DetailWork";
import Modal from "@material-ui/core/Modal";
import {makeStyles} from "@material-ui/core/styles";
import Backdrop from '@material-ui/core/Backdrop';
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px 0',
        overflowY: 'scroll',
        width: "100vw"
    },

    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        maxHeight: '90vh'
    },
}));
const Works = (props) => {
    const [active, setActive] = useState('All');
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = (e, sort) => {
        setAnchorEl(null);
        if(typeof sort !== 'string'){
            props.sortItems(sort)
        }
    };
    return (
        <section name={'works'} id={'works'} className={`wrap-works`}>
            <div>
                <div className="container">
                    <h2 className={`title titleWork titleDefault`}>
                        <span>WORK</span>
                        <Box className={`worksFilter`}>

                            {/*start mobile filter*/}
                            <Box display={{xs: 'block', md: 'none'}}>
                                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                    <span> filter</span> <FilterListIcon />
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleCloseMenu}
                                >
                                    {
                                        props.categories.map(category => {
                                            return <MenuItem key={category.id}
                                                             onClick={(e)=>handleCloseMenu(e,category.sort)}>{category.name}</MenuItem>
                                        })
                                    }
                                </Menu>
                            </Box>
                            {/*end mobile filter*/}

                            {/*start desktop filter*/}
                            <Box display={{xs: 'none', md: 'block'}}>
                                {props.categories.map(category => {
                                    return <WorkCategory key={category.id}
                                                         sortItems={props.sortItems}
                                                         setActive={setActive}
                                                         active={active}
                                                         category={category}/>
                                })}
                            </Box>
                            {/*end desktop filter*/}

                        </Box>
                    </h2>


                    <div className={`works`}>
                        {props.items.map(item => {
                            return <Work key={item.id} setOpen={setOpen} showDetail={props.showDetail} item={item}/>
                        })}
                    </div>
                </div>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <DetailWork hideDetail={props.hideDetail}
                                    handleClose={handleClose}
                                    item={props.itemsDetail}

                        />
                    </div>
                </Fade>
            </Modal>
        </section>
    )
};
export default Works;