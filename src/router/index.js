import { createWebHistory, createRouter } from "vue-router";
import Auth from '@/models/Auth';
import {UserInfo} from '@/services/userService';

const Home = () => import("@/views/Home");
const Login = () => import("@/views/Auth/Login");
const Register = () => import("@/views/Auth/Register");
const ForgotPassword = () => import("@/views/Auth/ForgetPassword");
const BusinessRegister = () => import("@/views/Auth/BusinessRegister");
const PrivacyPolicy = () => import("@/views/PrivacyPolicy");
const About = () => import("@/views/About");
const TermAndCondition = () => import("@/views/TermAndCondition");
const RefundPolicy = () => import("@/views/RefundPolicy");
const FAQ = () => import("@/views/FAQ");
const BraiderList = () => import("@/views/Customer/List");
const Profile = () => import("@/views/Customer/Profile");
const Booking = () => import("@/views/Customer/Booking");
const Checkout = () => import("@/views/Customer/Checkout");
const BookingSuccess = () => import("@/views/Customer/BookingSuccess");
const Invoice = () => import("@/views/Customer/Invoice");
const Dashboard = () => import("@/views/Customer/CustomerDashboard");
const Favourite = () => import("@/views/Customer/Favourite");
const ProfileSetting = () => import("@/views/Customer/ProfileSetting");
const ChangePassword = () => import("@/views/Customer/ChangePassword");
const BraiderDashboard = () => import("@/views/Therapist/BraiderDashboard");
const Appointments = () => import("@/views/Therapist/Appointments");
const AppointmentCalendar = () => import("@/views/Therapist/AppointmentCalendar");
const MyCustomer = () => import("@/views/Therapist/MyCustomer");
const ScheduleTiming = () => import("@/views/Therapist/ScheduleTiming");
const InvoiceList = () => import("@/views/Therapist/InvoiceList");
const Reviews = () => import("@/views/Therapist/Reviews");
const TheraphistProfileSetting = () => import("@/views/Therapist/TheraphistProfileSetting");
const SocialMedia = () => import("@/views/Therapist/SocialMedia");
const TheraphistChangePassword = () => import("@/views/Therapist/TheraphistChangePassword");
const Portfolio = () => import("@/views/Therapist/Portfolio");
const WorkingDay = () => import("@/views/Therapist/WorkingDays");
const Service = () => import("@/views/Therapist/Services");
const Payment = () => import("@/views/Auth/payment");
const AdvanceSchedule = () => import("@/views/Therapist/AdvanceSchedule");
const SendEmail = () => import("@/views/Therapist/SendEmail");
const CancelAccount = () => import("@/views/Therapist/CancelAccount");
const SendCustomEmail = () => import("@/views/Therapist/SendCustomEmail");
const Coupon = () => import("@/views/Therapist/Coupon");
const CouponCreate = () => import("@/views/Therapist/CreateCoupon");
const AccountDetail = () => import("@/views/Therapist/AccountDetail");


const routes = [{
	path: "/",
	name: "Home",
	component: Home,
},
{
	path: "/login",
	name: "Login",
	component: Login,
	meta: {
		guest: true
	}
},
{
	path: "/register",
	name: "Register",
	component: Register,
	meta: {
		guest: true
	}
},
{
	path: "/payment/:id",
	name: "Payment",
	component: Payment,
	meta: {
		requiresAuth: true,
		is_customer : true
	}
},
{
	path: "/forgot-password",
	name: "ForgotPassword",
	component: ForgotPassword,
	meta: {
		guest: true
	}
},
{
	path: "/privacy-policy",
	name: "PrivacyPolicy",
	component: PrivacyPolicy,
},
{
	path: "/about",
	name: "About",
	component: About,
},
{
	path: "/term-and-condition",
	name: "TermAndCondition",
	component: TermAndCondition,
},
{
	path: "/refund-policy",
	name: "RefundPolicy",
	component: RefundPolicy,
},
{
	path: "/faq",
	name: "FAQ",
	component: FAQ,
},
{
	path: "/business-register",
	name: "BusinessRegister",
	component: BusinessRegister,
	meta: {
		guest: true
	}
},
{
	path: "/braider-list",
	name: "BraiderList",
	component: BraiderList,
},

{
	path: "/profile/:id",
	name: "Profile",
	component: Profile,
},
{
	path: "/booking/:id",
	name: "Booking",
	component: Booking,
},
{
	path: "/checkout",
	name: "Checkout",
	component: Checkout,
},
{
	path: "/booking-success",
	name: "BookingSuccess",
	component: BookingSuccess,
},
{
	path: "/invoice/:id",
	name: "Invoice",
	component: Invoice,
},
{
	path: "/customer-dashboard",
	name: "Dashboard",
	component: Dashboard,
	meta: {
		requiresAuth: true,
		is_customer : true
	}
},

{
	path: "/favourite",
	name: "Favourite",
	component: Favourite,
	meta: {
		requiresAuth: true,
		is_customer : true
	}
},
{
	path: "/profile-setting",
	name: "ProfileSetting",
	component: ProfileSetting,
	meta: {
		requiresAuth: true,
		is_customer : true
	}
},
{
	path: "/change-password",
	name: "ChangePassword",
	component: ChangePassword,
	meta: {
		requiresAuth: true,
		is_customer : true
	}
},
{
	path: "/braider-dashboard",
	name: "BraiderDashboard",
	component: BraiderDashboard,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/cancel-account",
	name: "CancelAccount",
	component: CancelAccount,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/appointments",
	name: "Appointments",
	component: Appointments,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/coupon",
	name: "Coupon",
	component: Coupon,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/coupon-create",
	name: "CouponCreate",
	component: CouponCreate,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/account-detail",
	name: "AccountDetail",
	component: AccountDetail,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/appointments-calendar",
	name: "AppointmentsCalendar",
	component: AppointmentCalendar,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/braider-service",
	name: "Service",
	component: Service,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/send-email",
	name: "SendEmail",
	component: SendEmail,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/send-custom-email",
	name: "SendCustomEmail",
	component: SendCustomEmail,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/advance-schedule",
	name: "AdvanceSchedule",
	component: AdvanceSchedule,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/my-customer",
	name: "MyCustomer",
	component: MyCustomer,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/schedule-timing",
	name: "ScheduleTiming",
	component: ScheduleTiming,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/invoice-list",
	name: "InvoiceList",
	component: InvoiceList,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/reviews",
	name: "Reviews",
	component: Reviews,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/braider-profile-setting",
	name: "TheraphistProfileSetting",
	component: TheraphistProfileSetting,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/working-days",
	name: "WorkingDay",
	component: WorkingDay,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/social-media",
	name: "SocialMedia",
	component: SocialMedia,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},
{
	path: "/braider/change-password",
	name: "TheraphistChangePassword",
	component: TheraphistChangePassword,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},


{
	path: "/portfolio",
	name: "Portfolio",
	component: Portfolio,
	meta: {
		requiresAuth: true,
		is_braider : true
	}
},

];


const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach(async (to, from, next) => {
	
	const token = localStorage.getItem('api_token');
	const user = Auth.query().first();

	if (user == null && token != null) {
		
		await UserInfo(token)
			.then(async res => {

				await Auth.insert({data:res.data.data});
				
			}).catch(async () => {
				
				await Auth.deleteAll();
			});
	}
	if (to.matched.some(record => record.meta.requiresAuth)) {

		const user = Auth.query().first();
	
		if (user == null) {
			next({
				path: '/login',
				params: { nextUrl: to.fullPath }
			})
		}else {
			
			if (to.matched.some(record => record.meta.is_braider)) {
				if (user.role_id == 2) {
					next()
				} else  {
					next({ name: 'Home' })
				}
			} else if(to.matched.some(record => record.meta.is_customer)) {
				if (user.role_id == 3) {
					next()
				} else  {
					next({ name: 'Home' })
				}
			}else{
				return false;
			}
		}
	}else if (to.matched.some(record => record.meta.guest)) {
			
		const user = Auth.query().first();
		if (user == null) {
			next()
		} else {
			next({ name: 'Home' })
		}

	} else {
		next()
	}
})

router.afterEach(() => {
	window.scrollTo({
		top:0
	})
});

export default router;