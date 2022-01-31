import axios from '@/utils/braiders';

/*
|-------------------------------------------------------------------------------
| Social Media Store
|-------------------------------------------------------------------------------
*/
export const socialMediaStore = async (token,data) => await axios(token).post(`social-media/store`,data);
/*
|-------------------------------------------------------------------------------
| Social Media INdex
|-------------------------------------------------------------------------------
*/
export const socialMediaIndex = async token => await axios(token).post(`social-media/index`);
