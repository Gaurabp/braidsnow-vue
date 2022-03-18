import axios from '@/utils/braiders';

/*
|-------------------------------------------------------------------------------
| User Information
|-------------------------------------------------------------------------------
*/
export const UserInfo = async token => await axios(token).get(`user/info`);
/*
|-------------------------------------------------------------------------------
| Changed Password
|-------------------------------------------------------------------------------
*/
export const ChangePassword = async (token, data) => await axios(token).post(`user/change-password`,data);

/*
|-------------------------------------------------------------------------------
| Update Profile
|-------------------------------------------------------------------------------
*/
export const UpdateProfile = async (token, data) => await axios(token).post(`user/profile/update`,data);
/*
|-------------------------------------------------------------------------------
| Get All Working Days
|-------------------------------------------------------------------------------
*/
export const workingDays = async token => await axios(token).get(`working-days/get-all`);
/*
|-------------------------------------------------------------------------------
| Update Working Days
|-------------------------------------------------------------------------------
*/
export const workingDayUpdate = async (token, data) => await axios(token).post(`working-days/update`,data);
/*
|-------------------------------------------------------------------------------
| Get all User Services
|-------------------------------------------------------------------------------
*/
export const userServiceIndex = async token => await axios(token).get(`user-services`);
/*
|-------------------------------------------------------------------------------
| Destroy User Services
|-------------------------------------------------------------------------------
*/
export const userServiceDestory = async (token,id) => await axios(token).delete(`user-services/${id}`);
/*
|-------------------------------------------------------------------------------
| Store User Services
|-------------------------------------------------------------------------------
*/
export const userServiceStore = async (token,data) => await axios(token).post(`user-services`,data);
/*
|-------------------------------------------------------------------------------
| Update Google Calendar URL
|-------------------------------------------------------------------------------
*/
export const calendarURL = async (token,data) => await axios(token).post(`appointment/calendar`,data);
/*
|-------------------------------------------------------------------------------
| Cancel Account
|-------------------------------------------------------------------------------
*/
export const cancelAccount = async (token,data) => await axios(token).post(`account/cancel`,data);
/*
|-------------------------------------------------------------------------------
| Send Email
|-------------------------------------------------------------------------------
*/
export const sendEmail = async (token,data) => await axios(token).post(`send/email`,data);


