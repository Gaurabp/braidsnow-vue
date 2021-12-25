

export default class SocialShare {

	facebook(url,quote){
		return `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${quote}`;
	}

	twitter(url,title){
		return `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
	}
	whatsapp(url,title,description = ""){
		return `https://api.whatsapp.com/send?text=@${title}%0D%0A${url}%0D%0A${description}`;
	}

}