import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';
import userImg from '../../../../../../assets/images/avatars/avatar_12.png';

interface ProfileProps {
  className?: string,
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile = (props: ProfileProps) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const user = {
    name: 'Monty Khanna',
    avatar: `${userImg}`,
    bio: 'Full Stack Developer'
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        src={user.avatar}
        to="/settings"
      />
      <Typography
        className={classes.name}
        variant="h4"
      >
        {user.name}
      </Typography>
      <Typography variant="body2">{user.bio}</Typography>
    </div>
  );
};

export default Profile;
