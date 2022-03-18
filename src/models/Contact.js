import { Model } from '@vuex-orm/core'

export default class Contact extends Model {

	static entity = 'contacts'
	static fields () {
		
		return {
			id: this.attr(null),
			customer: this.attr(null),
			braider: this.attr(null),
			created_at: this.attr(''),
			updated_at: this.attr('')
		}
	}
}