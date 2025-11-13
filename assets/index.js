// ==================== NAVBAR SCROLL EFFECT ====================
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 50) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
});


// ==================== HERO SLIDER ====================
let currentSlide = 0;
const slides = $('.hero-slide');
const dots = $('.dot');
const totalSlides = slides.length;
let autoPlayInterval;
let isAutoPlaying = true;


// Function to show specific slide
function showSlide(index) {
    slides.removeClass('active');
    dots.removeClass('active');
    $(slides[index]).addClass('active');
    $(dots[index]).addClass('active');
    currentSlide = index;
}


// Next slide
function nextSlide() {
    let next = (currentSlide + 1) % totalSlides;
    showSlide(next);
}


// Previous slide
function prevSlide() {
    let prev = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(prev);
}


// Auto-play functionality
function startAutoPlay() {
    if (isAutoPlaying) {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }
}


function stopAutoPlay() {
    clearInterval(autoPlayInterval);
    isAutoPlaying = false;
}


// Event: Next button click
$('.next-btn').on('click', function() {
    stopAutoPlay();
    nextSlide();
});


// Event: Previous button click
$('.prev-btn').on('click', function() {
    stopAutoPlay();
    prevSlide();
});


// Event: Dot click
$('.dot').on('click', function() {
    stopAutoPlay();
    const slideIndex = $(this).data('slide');
    showSlide(slideIndex);
});


// Event: Pause on hover
$('.hero-slider').on('mouseenter', function() {
    stopAutoPlay();
}).on('mouseleave', function() {
    isAutoPlaying = true;
    startAutoPlay();
});


// Start auto-play on page load
startAutoPlay();


// ==================== GALLERY ANIMATIONS ====================


// Animate gallery cards on scroll
function animateGallery() {
    $('.gallery-card').each(function(index) {
        const cardTop = $(this).offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();
        
        if (windowBottom > cardTop + 100) {
            setTimeout(() => {
                $(this).addClass('fade-in');
            }, index * 100);
        }
    });
}


// Set initial state for gallery cards
$('.gallery-card').css('opacity', '0');


// Trigger animations on scroll and load
$(window).on('scroll load', animateGallery);
animateGallery();


// ==================== GALLERY CARD HOVER EFFECTS ====================


$('.gallery-card').on('mouseenter', function() {
    $(this).find('img').css({
        'transform': 'scale(1.15)',
        'filter': 'brightness(0.9)'
    });
    $(this).find('.gallery-info').css('transform', 'translateY(0)');
}).on('mouseleave', function() {
    $(this).find('img').css({
        'transform': 'scale(1)',
        'filter': 'brightness(1)'
    });
    
    // Keep info visible on mobile (below 768px)
    if ($(window).width() >= 768) {
        $(this).find('.gallery-info').css('transform', 'translateY(80%)');
    }
});


// ==================== HIGHLIGHT CARD STAGGER ANIMATION ====================


$('.highlight-card').each(function(index) {
    $(this).css({
        'opacity': '0',
        'transform': 'translateY(30px)'
    });
    
    setTimeout(() => {
        $(this).css({
            'opacity': '1',
            'transform': 'translateY(0)',
            'transition': 'all 0.6s ease'
        });
    }, index * 150);
});


// ==================== ROOM CARD ANIMATIONS ====================


function animateRooms() {
    $('.room-card').each(function(index) {
        const cardTop = $(this).offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();
        
        if (windowBottom > cardTop + 100) {
            setTimeout(() => {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }, index * 200);
        }
    });
}


$('.room-card').css({
    'opacity': '0',
    'transform': 'translateY(30px)',
    'transition': 'all 0.6s ease'
});


$(window).on('scroll', animateRooms);
animateRooms();


// ==================== AMENITY CARD ANIMATIONS ====================


function animateAmenities() {
    $('.amenity-card').each(function(index) {
        const cardTop = $(this).offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();
        
        if (windowBottom > cardTop + 50) {
            setTimeout(() => {
                $(this).css({
                    'opacity': '1',
                    'transform': 'scale(1)'
                });
            }, index * 100);
        }
    });
}


$('.amenity-card').css({
    'opacity': '0',
    'transform': 'scale(0.9)',
    'transition': 'all 0.5s ease'
});


$(window).on('scroll', animateAmenities);
animateAmenities();


// ==================== FEATURE ITEMS ANIMATION ====================


function animateFeatures() {
    $('.feature-item').each(function(index) {
        const itemTop = $(this).offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();
        
        if (windowBottom > itemTop + 50) {
            setTimeout(() => {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateX(0)'
                });
            }, index * 150);
        }
    });
}


$('.feature-item').css({
    'opacity': '0',
    'transform': 'translateX(-30px)',
    'transition': 'all 0.6s ease'
});


$(window).on('scroll', animateFeatures);
animateFeatures();


// ==================== BOOKING CARDS ANIMATION ====================


function animateBookingCards() {
    $('.booking-card').each(function(index) {
        const cardTop = $(this).offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();
        
        if (windowBottom > cardTop + 50) {
            setTimeout(() => {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }, index * 100);
        }
    });
}


$('.booking-card').css({
    'opacity': '0',
    'transform': 'translateY(20px)',
    'transition': 'all 0.5s ease'
});


$(window).on('scroll', animateBookingCards);
animateBookingCards();


// ==================== SMOOTH SCROLL ====================


$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));
    if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top - 80
        }, 800);
    }
});


// ==================== MOBILE MENU CLOSE ON LINK CLICK ====================


$('.navbar-nav .nav-link').on('click', function() {
    if ($(window).width() < 992) {
        $('.navbar-collapse').collapse('hide');
    }
});


// ==================== PARALLAX EFFECT (DESKTOP ONLY) ====================


if ($(window).width() >= 992) {
    $(window).on('scroll', function() {
        const scrolled = $(window).scrollTop();
        const overviewTop = $('.overview-section').offset().top;
        const overviewBottom = overviewTop + $('.overview-section').outerHeight();
        const windowTop = $(window).scrollTop();
        
        // Only apply parallax when overview section is in view
        if (windowTop >= overviewTop - $(window).height() && windowTop <= overviewBottom) {
            $('.gallery-card.featured img').css('transform', 
                'translateY(' + ((scrolled - overviewTop) * 0.1) + 'px) scale(1.05)'
            );
        }
    });
}


// ==================== COUNTER ANIMATION (OPTIONAL) ====================


function animateCounter() {
    $('.stat-number').each(function() {
        const $this = $(this);
        const countTo = parseInt($this.attr('data-count'));
        
        $({ countNum: 0 }).animate({
            countNum: countTo
        }, {
            duration: 2000,
            easing: 'swing',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
        });
    });
}


// Trigger counter animation when in view
let counterAnimated = false;
$(window).on('scroll', function() {
    if ($('.overview-section').length) {
        const overviewTop = $('.overview-section').offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();
        
        if (!counterAnimated && windowBottom > overviewTop) {
            animateCounter();
            counterAnimated = true;
        }
    }
});


// ==================== RESPONSIVE ADJUSTMENTS ====================


// Adjust gallery info overlay on window resize
$(window).on('resize', function() {
    if ($(window).width() < 768) {
        // On mobile, keep gallery info always visible
        $('.gallery-info').css('transform', 'translateY(0)');
    } else {
        // On desktop, hide until hover
        $('.gallery-card').each(function() {
            if (!$(this).is(':hover')) {
                $(this).find('.gallery-info').css('transform', 'translateY(80%)');
            }
        });
    }
});


// ==================== ADD FADE-IN CSS CLASS ====================


$('<style>.fade-in { opacity: 1 !important; transition: opacity 0.6s ease; }</style>').appendTo('head');


// ==================== PAGE LOAD ANIMATIONS ====================


// Fade in sections on page load
$('.overview-section, .why-choose-section, .rooms-preview-section, .amenities-section, .location-section, .booking-section, .cta-section').css({
    'opacity': '0',
    'transform': 'translateY(20px)'
});


$(window).on('load', function() {
    setTimeout(() => {
        $('.overview-section, .why-choose-section, .rooms-preview-section, .amenities-section, .location-section, .booking-section, .cta-section').css({
            'opacity': '1',
            'transform': 'translateY(0)',
            'transition': 'all 0.8s ease'
        });
    }, 300);
});


// ==================== BACK TO TOP BUTTON ====================


// Create back to top button
$('body').append('<button id="back-to-top" style="position:fixed;bottom:30px;right:30px;width:50px;height:50px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;border:none;border-radius:50%;font-size:20px;cursor:pointer;opacity:0;transition:all 0.3s ease;z-index:999;box-shadow:0 4px 15px rgba(102,126,234,0.4);"><i class="bi bi-arrow-up"></i></button>');


// Show/hide back to top button
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 500) {
        $('#back-to-top').css('opacity', '1');
    } else {
        $('#back-to-top').css('opacity', '0');
    }
});


// Scroll to top on click
$('#back-to-top').on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 800);
});


// ==================== CONSOLE MESSAGE ====================


console.log('%c🏡 Saman Villa Website', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cDeveloped with ❤️ using Bootstrap & jQuery', 'color: #6b7280; font-size: 12px;');
