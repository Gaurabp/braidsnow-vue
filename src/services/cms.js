import axios from '@/utils/common';

/*
|-------------------------------------------------------------------------------
| Top Rated braiders
|-------------------------------------------------------------------------------
*/
export const getCms = async () => await axios.get(`cms`);
 