import { READ_MESSAGE } from './messageTypes';

export const markAsRead = () => {
    return{
        type: READ_MESSAGE,
    }
}