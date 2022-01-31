import axios from '@/utils/braiders';

/*
|-------------------------------------------------------------------------------
| Get All Scheduled Timings
|-------------------------------------------------------------------------------
*/
export const ScheduledTimings = async token => await axios(token).post(`schedule-timing`);
/*
|-------------------------------------------------------------------------------
| Store Scheduled Timings
|-------------------------------------------------------------------------------
*/
export const ScheduledTimingsStore = async (token,data) => await axios(token).post(`schedule-timing/store`,data);
/*
|-------------------------------------------------------------------------------
| Destroy Scheduled Timings
|-------------------------------------------------------------------------------
*/
export const ScheduledTimingsDestroy = async (token,data) => await axios(token).post(`schedule-timing/destroy`,data);
