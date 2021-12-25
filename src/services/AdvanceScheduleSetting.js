import axios from '@/utils/braiders';

/*
|-------------------------------------------------------------------------------
| Advance Schedule Setting
|-------------------------------------------------------------------------------
*/
const AdvanceScheduleSetting = async token => await axios(token).get(`advance-schedule-setting`);
/*
|-------------------------------------------------------------------------------
| Advance Schedule Setting Store
|-------------------------------------------------------------------------------
*/
const AdvanceScheduleSettingStore = async (token,data) => await axios(token,data).post(`advance-schedule-setting`,data);



export default{
	AdvanceScheduleSetting,
	AdvanceScheduleSettingStore
}