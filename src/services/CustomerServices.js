import axios from '@/utils/customer';

/*
|-------------------------------------------------------------------------------
| Get All Appointment
|-------------------------------------------------------------------------------
*/
export const getAllAppointment = async token => await axios(token).get(`appointments`);
/*
|-------------------------------------------------------------------------------
| Favourite
|-------------------------------------------------------------------------------
*/
export const favouriteAPI = async token => await axios(token).get(`favourite`);
/*
|-------------------------------------------------------------------------------
| Favourite store
|-------------------------------------------------------------------------------
*/
export const favouriteStore = async (token,data) => await axios(token).post(`favourite`,data);
/*
|-------------------------------------------------------------------------------
| Profile Update
|-------------------------------------------------------------------------------
*/
export const profileUpdate = async (token,data) => await axios(token).post(`profile/update`,data);
/*
|-------------------------------------------------------------------------------
| Profile Update
|-------------------------------------------------------------------------------
*/
export const changePassword = async (token,data) => await axios(token).post(`profile/change-password`,data);
/*
|-------------------------------------------------------------------------------
| Store Review
|-------------------------------------------------------------------------------
*/
export const ReviweStore = async (token,data) => await axios(token).post(`review/store`,data);
/*
|-------------------------------------------------------------------------------
| Claim Refund
|-------------------------------------------------------------------------------
*/
export const ClaimRefund = async (token,data) => await axios(token).post(`appointments/claim-refund`,data);

/*
|-------------------------------------------------------------------------------
| Chat
|-------------------------------------------------------------------------------
*/
export const chatCreate = async (token,data) => await axios(token).post(`chat`,data);
/*
|-------------------------------------------------------------------------------
| Chat history
|-------------------------------------------------------------------------------
*/
export const chatHistory = async (token,data) => await axios(token).post(`chat-history`,data);
/*
|-------------------------------------------------------------------------------
| Chat Contacts
|-------------------------------------------------------------------------------
*/
export const chatContact = async (token) => await axios(token).post(`chat-contacts`);

