import React, { useEffect, useState } from 'react';

import { login } from '../../data/axios';

import { useNavigate } from 'react-router-dom';

import classes from '../Layout/Header.module.scss';
import logo from '../../assets/logo/icon-monochrome-black.svg';
import defaultProfilePicture from '../../assets/images/defaultProfilePicture.svg';
import Input from '../UI/Input';

const Header = () => {
  const authLog = JSON.parse(localStorage.getItem('auth'));
  const [log, setLog] = useState(authLog?.token);
  const [profilePicture, setProfilePicture] = useState('');

  const navigate = useNavigate();
  useEffect(() => {
    if (log === '')
      setTimeout(() => {
        navigate('/');
      }, 600);
  }, [log]);

  useEffect(() => {
    getProfil().catch(console.error);
  }, []);

  const getProfil = async () => {
    const res = await login.get(`${authLog?.id}`);
    setProfilePicture(res.data.user.profilePictureUrl);
  };

  const logoutHandler = () => {
    localStorage.removeItem('auth');
    setLog('');
  };

  const onProfileHandler = () => {
    setTimeout(() => {
      navigate('/profile');
    }, 600);
  };

  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
          <h1>Groupomania</h1>
        </div>
        <Input />
        <div className={classes.user}>
          <button className={classes.profilePicture} onClick={onProfileHandler}>
            {profilePicture ? (
              <img src={profilePicture} alt="profil" />
            ) : (
              <img src={defaultProfilePicture} alt="profil" />
            )}
          </button>
          <button className={classes.btn} onClick={logoutHandler}>
            Se déconnecter
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
