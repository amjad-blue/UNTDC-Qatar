window.addEventListener("DOMContentLoaded", init)


function addSwipes() {

	var swiper = new Swiper(".main-swiper", {
		effect: "fade", // 👈 Use fade effect
		fadeEffect: {
			crossFade: true,
		},
		// pagination: {
		// 	el: ".swiper-pagination",
		// 	clickable: true,
		// 	renderBullet: function (index, className) {
		// 		return '<span class="' + className + '"></span>';
		// 	},
		// },
		navigation: {
			nextEl: ".swiper-button-next", // 👈 Add next button
			prevEl: ".swiper-button-prev", // 👈 Add prev button
		},
		autoplay: {
			delay: 8000,
			disableOnInteraction: true,
		},
		keyboard: {
			enabled: true,
		},
	});

// 	feedback-swiper

	var swiper2 = new Swiper(".feedback-swiper", {
		effect: "fade", // 👈 Use fade effect
		fadeEffect: {
			crossFade: true,
		},

		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		autoplay: {
			delay: 8000,
			disableOnInteraction: true,
		},
		keyboard: {
			enabled: true,
		},
	});

	// video-swiper
	var swiper3 = new Swiper(".video-swiper", {
		effect: "fade", // 👈 Use fade effect
		fadeEffect: {
			crossFade: true,
		},

		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		autoplay: {
			delay: 8000,
			disableOnInteraction: true,
		},
		keyboard: {
			enabled: true,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true, // makes dots clickable
		},
	});


}

function handleFeedbackSectionSwiper() {
	let maxHeightSwiper = 0
	document.querySelectorAll(".feedback-section .swiper-slide").forEach((el) => {
		const swipeInner = el.querySelector(".swipe-inner");
		if (swipeInner.clientHeight > maxHeightSwiper) {
			maxHeightSwiper = swipeInner.clientHeight;
		}
		swipeInner.style.minHeight = `${maxHeightSwiper}px`;
	})
}

function addLightGalleryForNews() {
	lightGallery(document.querySelector('.section-album .album-wrapper'), {
		selector: 'a',
		animateThumb: false,
		zoomFromOrigin: false,
		allowMediaOverlap: true,
		toggleThumb: true,
	});

	lightGallery(document.querySelector('.news-details-page .main-image'), {
		animateThumb: false,
		zoomFromOrigin: false,
		allowMediaOverlap: true,
		toggleThumb: true,
	});
}

function addModal() {
	const cards = document.querySelectorAll(".stacked-style-card .cards-wrapper .card");
	const overlay = document.getElementById("customOverlay");
	const modal = document.getElementById("customModal");
	const modalBody = document.getElementById("modalBody");
	const closeBtn = document.getElementById("closeModal");

	const openModal = (cardHTML) => {
		// Create a temporary container to extract parts
		const tempDiv = document.createElement("div");
		tempDiv.innerHTML = cardHTML;

		const imgEl = tempDiv.querySelector("img");
		const otherContent = tempDiv.cloneNode(true);
		if (imgEl) imgEl.remove(); // Remove from content wrapper

		// Build image wrapper
		const imageWrapper = document.createElement("div");
		imageWrapper.className = "modal-image";
		if (imgEl) imageWrapper.appendChild(imgEl);

		// Build content wrapper (excluding the image)
		const contentWrapper = document.createElement("div");
		contentWrapper.className = "modal-content";
		// Remove the image from clone
		const imgInClone = otherContent.querySelector("img");
		if (imgInClone) imgInClone.remove();
		contentWrapper.innerHTML = otherContent.innerHTML;

		// Buttons wrapper
		const btnWrapper = document.createElement("div");
		btnWrapper.className = "modal-buttons";

		const btn1 = document.createElement("button");
		btn1.className = "primary-button";
		btn1.textContent = "تحميل";

		const btn2 = document.createElement("button");
		btn2.className = "secondary-button";
		btn2.textContent = "مشاهدة";

		btnWrapper.appendChild(btn1);
		btnWrapper.appendChild(btn2);

		contentWrapper.appendChild(btnWrapper);

		// Clear and append final content to modal
		modalBody.innerHTML = "";
		modalBody.appendChild(imageWrapper);
		modalBody.appendChild(contentWrapper);

		// Show modal
		overlay.classList.add("active");
		modal.classList.add("active");

		btnWrapper.querySelector(".primary-button").addEventListener("click", () => {
			window.open("https://www.fsa.usda.gov/Internet/FSA_File/tech_assist.pdf", "_blank");
		});

		btnWrapper.querySelector(".secondary-button").addEventListener("click", () => {
			window.open("https://www.fsa.usda.gov/Internet/FSA_File/tech_assist.pdf", "_blank");
		});
	};

	const closeModal = () => {
		overlay.classList.remove("active");
		modal.classList.remove("active");
		setTimeout(() => {
			modalBody.innerHTML = "";
		}, 400);
	};

	cards.forEach(card => {
		card.addEventListener("click", () => {
			openModal(card.innerHTML);
		});
	});

	overlay.addEventListener("click", closeModal);
	closeBtn.addEventListener("click", closeModal);
}

function addlightGalleryForVideo() {
	const videoCards = document.querySelectorAll("#video .cards-wrapper");

	videoCards.forEach(card => {
		lightGallery(card, {
			selector: ".card.overlay",
			plugins: [lgVideo],
			speed: 500,
		});
	})
}




function init() {
	addSwipes()
	handleFeedbackSectionSwiper()
	try {
		addLightGalleryForNews()
	} catch (e) {
		console.log(e)
	}
	addModal()


	addlightGalleryForVideo()




}


