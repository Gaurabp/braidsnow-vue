import { Model } from '@vuex-orm/core'

export default class Address extends Model {

	static entity = 'address'

	static fields () {
		
		return {
			"Alaska": {
                "Abbeville": ["36310"],
                "Birmingham": ["35203", "35204", "35205", "35206"],
            },
            "Alabama": {
                "Adona": ["72001"],
                "North Little Roc": ["72114", "72117", "72120"],
            }
		}
	}
}