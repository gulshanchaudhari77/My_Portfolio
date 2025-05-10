import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/gulshanchaudhari77' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            

            <a href='https://x.com/?lang=en' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaTwitter />
            </a>

            <a href='https://www.linkedin.com/feed/' className='home__social-link' target='_blank' rel=''>
                <FaLinkedinIn />
            </a>

            <a href='https://wwww.facebook.com' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

            <a href='https://www.instagram.com/gulshan_it07/' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaInstagram />
            </a>
        </div>
    );
};

export default HeaderSocials;
