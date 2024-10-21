import React from 'react';
import notify from 'notifyjs';

const Notification = ({ message }) => {
    notify.show('Notification', message, {
        duration: 3000,
        position: 'top-right'
    });
    return null;
};

export default Notification;
