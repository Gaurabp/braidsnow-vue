import { Model } from '@vuex-orm/core'
import UserService from './UserService'
import Portfolio from './Portfolio'

export default class Braider extends Model {

	static entity = 'braider'

	static fields () {
		
		return {
			id: this.attr(null),
			role_id: this.attr(null),
			name: this.attr(''),
			top_braiders: this.attr(null),
			email: this.attr(''),
			dob: this.attr(''),
			avatar: this.attr(''),
			gender: this.attr(''),
			ratting: this.attr(null),
			address: this.attr(''),
			state: this.attr(''),
			city: this.attr(''),
			zipcode: this.attr(''),
			country: this.attr(''),
			business_name: this.attr(''),
			website_link: this.attr(''),
			business_phone_number: this.attr(''),
			phone_number: this.attr(''),
			introduction: this.attr(''),
			special_introduction: this.attr(''),
			policy_procedure: this.attr(''),
			booking_deposit_amount: this.attr(''),
			coupon_code: this.attr(''),
			do_you_braid_out_of_a_shop: this.attr(false),
			do_you_braid_from_home: this.attr(false),
			are_you_a_mobile: this.attr(false),
			can_you_provide_hair: this.attr(false),
			do_you_wash_hair: this.attr(false),
			status: this.attr(false),
			total_likes: this.attr(10),
			total_reviews: this.attr(10),
			api_token: this.attr(''),
			serviceLocation: this.attr('select'),
			created_at: this.attr(''),
			updated_at: this.attr(''),
			user_services: this.hasMany(UserService, 'user_id'),
			portfolio: this.hasMany(Portfolio, 'braider_id')
		}
	}
}