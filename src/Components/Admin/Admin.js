import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import AddIcon from '@material-ui/icons/Add';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

// Material UI elements
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Admin = () => {
  const classes = useStyles();

  return (
    <div className="m-5 p-2" style={{borderRight: '1px solid lightgray'}}>
      <List className={classes.root}>
        <Link style={{ textDecoration: "none" }} to="/adminControl">
          <div className="btn d-flex justify-content-start">
            <RoomServiceIcon></RoomServiceIcon>
            <p className="ml-2">Service List</p>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/adminAddEvent">
          <div className="btn d-flex justify-content-start">
            <AddIcon></AddIcon>
            <p className="ml-2">Add Service</p>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/adminAddEvent">
          <div className="btn d-flex justify-content-start">
            <PersonAddIcon></PersonAddIcon>
            <p className="ml-2">Make Admin</p>
          </div>
        </Link>
      </List>
    </div>
  );
};

export default Admin;