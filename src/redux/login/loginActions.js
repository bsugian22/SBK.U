import { READ_MESSAGE } from './loginTypes';

export const markAsRead = () => {
    return{
        type: READ_MESSAGE,
    }
}