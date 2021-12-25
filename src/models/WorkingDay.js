import { Model } from '@vuex-orm/core'
import User from './User'

export default class WorkingDay extends Model {

	static entity = 'working_days'
	static fields () {
		
		return {
			id: this.attr(null),
			user_id: this.attr(null),
			name: this.attr(''),
			status: this.attr(null),
			start_time: this.attr(""),
			end_time: this.attr(""),
			lunch_start_time: this.attr(""),
			lunch_end_time: this.attr(""),
			created_at: this.attr(''),
			updated_at: this.attr(''),
			user: this.belongsTo(User,'user_id')
		}
	}
}