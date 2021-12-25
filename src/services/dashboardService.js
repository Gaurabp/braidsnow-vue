import axios from '@/utils/braiders';

/*
|-------------------------------------------------------------------------------
| Get All Appointment
|-------------------------------------------------------------------------------
*/
export const getAllAppointment = async token => await axios(token).get(`appointment/get-all`);
/*
|-------------------------------------------------------------------------------
| Update Appointment Status
|-------------------------------------------------------------------------------
*/
export const UpdateAppointmentStatus = async (token,data) => await axios(token).post(`appointment/update/status`,data);
/*
|-------------------------------------------------------------------------------
| Today Appointment
|-------------------------------------------------------------------------------
*/
export const todayAppointment = async token => await axios(token).get(`appointment/today`);
/*
|-------------------------------------------------------------------------------
| Upcoming Appointment
|-------------------------------------------------------------------------------
*/
export const upcomingAppointment = async token => await axios(token).get(`appointment/upcoming`);
/*
|-------------------------------------------------------------------------------
| Total Customer
|-------------------------------------------------------------------------------
*/
export const totalCustomer = async token => await axios(token).get(`appointment/total-customer`);
/*
|-------------------------------------------------------------------------------
| New Customer
|-------------------------------------------------------------------------------
*/
export const newCustomer = async token => await axios(token).get(`appointment/new-customer`);
/*
|-------------------------------------------------------------------------------
| Total Appointment
|-------------------------------------------------------------------------------
*/
export const totalAppointment = async token => await axios(token).get(`appointment/total-appointment`);

/*
|-------------------------------------------------------------------------------
| Connect Stripe Account
|-------------------------------------------------------------------------------
*/
export const StripeAccount = async token => await axios(token).get(`stripe`);

/*
|-------------------------------------------------------------------------------
| Update Due amount
|-------------------------------------------------------------------------------
*/
export const dueAmountUpdate = async (token,data) => await axios(token).post(`appointment/due-amount`,data);
/*
|-------------------------------------------------------------------------------
| Send Email
|-------------------------------------------------------------------------------
*/
export const sendEmail = async (token,data) => await axios(token).post(`send/email`,data);
/*
|-------------------------------------------------------------------------------
| Send Reminder Notification
|-------------------------------------------------------------------------------
*/
export const sendReminderNotification = async (token,data) => await axios(token).post(`send-reminder`,data);
/*
|-------------------------------------------------------------------------------
| Send Custom Notification
|-------------------------------------------------------------------------------
*/
export const sendCustomEmail = async (token,data) => await axios(token).post(`send-email`,data);
/*
|-------------------------------------------------------------------------------
| Coupon Get
|-------------------------------------------------------------------------------
*/
export const couponGet = async token => await axios(token).get(`coupon`);
/*
|-------------------------------------------------------------------------------
| Coupon Set
|-------------------------------------------------------------------------------
*/
export const couponSet = async (token,data) => await axios(token).post(`coupon`,data);
/*
|-------------------------------------------------------------------------------
| Coupon Remove
|-------------------------------------------------------------------------------
*/
export const couponRemove = async (token,data) => await axios(token).post(`coupon/delete`,data);