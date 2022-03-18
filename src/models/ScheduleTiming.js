import { Model } from '@vuex-orm/core'

export default class ScheduleTiming extends Model {

	static entity = 'schedule_timings'
	static fields () {
		
		return {
			id: this.attr(null),
			user_schedule_timing_id: this.attr(null),
			braider_id: this.attr(null),
			working_day_id: this.attr(null),
			start_time: this.attr(''),
			end_time: this.attr(''),
			status: this.attr(true),
			created_at: this.attr(''),
			updated_at: this.attr(''),
		}
	}
}