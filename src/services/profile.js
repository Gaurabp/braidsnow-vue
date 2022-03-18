import axios from '@/utils/common';

/*
|-------------------------------------------------------------------------------
| Get Profile
|-------------------------------------------------------------------------------
*/
export const getProfile = async() => await axios.get(`braider/index`);