import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <IconButton aria-label="">
                <PersonIcon fontSize='large' className='header_icon'></PersonIcon>
            </IconButton>
            <img className='header_logo' src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png" alt="" />
            <IconButton>
                <ForumIcon fontSize='large' className='header_icon'></ForumIcon>
            </IconButton>
        </div>
    )
}

export default Header