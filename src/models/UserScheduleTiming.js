import { Model } from '@vuex-orm/core'
import ScheduleTiming from './ScheduleTiming'

export default class UserScheduleTiming extends Model {

	static entity = 'user_schedule_timings'
	static fields () {
		
		return {
			id: this.attr(null),
			service_title: this.attr(''),
			braider_id: this.attr(null),
			created_at: this.attr(''),
			updated_at: this.attr(''),
			schedule_timing: this.hasMany(ScheduleTiming,'user_schedule_timing_id')
		}
	}
}