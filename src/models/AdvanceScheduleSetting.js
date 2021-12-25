import { Model } from '@vuex-orm/core'
import User from './User'

export default class AdvanceScheduleSetting extends Model {

	static entity = 'advance_schedule_settings'

	static fields () {
		
		return {
			id: this.attr(null),
			user_id: this.attr(null),
			is_prevent_same_day_booking: this.attr(null),
			prevent_days: this.attr(null),
			prevent_hours: this.attr(null),
			prevent_min: this.attr(null),
			is_stop_accepting_appointment: this.attr(''),
			prevent_booking_more_than: this.attr(''),
			stop_booking_from: this.attr(''),
			buffer_time: this.attr(null),
			created_at: this.attr(''),
			updated_at: this.attr(''),
			user: this.belongsTo(User, 'user_id'),
		}
	}
}