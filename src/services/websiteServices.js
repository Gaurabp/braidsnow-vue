import axios from '@/utils/common';

/*
|-------------------------------------------------------------------------------
| Webiste Braider List
|-------------------------------------------------------------------------------
*/
export const braiderList = async () => await axios.get(`braider-list`);
/*
|-------------------------------------------------------------------------------
| Webiste Braider Profile
|-------------------------------------------------------------------------------
*/
export const braiderProfile = async id => await axios.get(`braider/profile/${id}`);
/*
|-------------------------------------------------------------------------------
| Webiste All Time Slot
|-------------------------------------------------------------------------------
*/
export const timeSlot = async data => await axios.post(`time-slot`,data);
/*
|-------------------------------------------------------------------------------
| Webiste Place Order
|-------------------------------------------------------------------------------
*/
export const OrderPlace = async data => await axios.post(`place-order`,data);
/*
|-------------------------------------------------------------------------------
| Webiste Clear Appointment Due
|-------------------------------------------------------------------------------
*/
export const ClearDue = async data => await axios.post(`appointment/due/clear`,data);
/*
|-------------------------------------------------------------------------------
| Get Braider Service by Id
|-------------------------------------------------------------------------------
*/
export const braiderSevice = async data => await axios.post(`user/services`,data);
/*
|-------------------------------------------------------------------------------
| Get Working Days
|-------------------------------------------------------------------------------
*/
export const workingDayAPI = async data => await axios.post(`user/working-days`,data);
/*
|-------------------------------------------------------------------------------
| Get Invoice
|-------------------------------------------------------------------------------
*/
export const Invoice = async data => await axios.post(`invoice`,data);

