// ==================== NAVBAR ACTIVE PAGE DETECTION ====================
$(document).ready(function() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Remove active class from all nav links
    $('.navbar-nav .nav-link').removeClass('active');
    
    // Add active class to matching link
    $('.navbar-nav .nav-link').each(function() {
        const linkHref = $(this).attr('href');
        
        // Check if link matches current page
        if (linkHref === currentPage) {
            $(this).addClass('active');
        }
        
        // Special case: if on root/home, activate index.html link
        if ((currentPage === '' || currentPage === '/' || currentPage === 'index.html') && linkHref === 'index.html') {
            $(this).addClass('active');
        }
    });
});

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

// Start auto-play on page load (only if slider exists)
if (slides.length > 0) {
    startAutoPlay();
}

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

// ==================== ABOUT PAGE: HERITAGE IMAGE ANIMATIONS ====================

function animateHeritageImages() {
    $('.heritage-image-card').each(function(index) {
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

$('.heritage-image-card').css({
    'opacity': '0',
    'transform': 'translateY(30px)',
    'transition': 'all 0.8s ease'
});

$(window).on('scroll', animateHeritageImages);
animateHeritageImages();

// ==================== ABOUT PAGE: TIMELINE ANIMATIONS ====================

function animateTimeline() {
    $('.timeline-item').each(function(index) {
        const itemTop = $(this).offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();
        
        if (windowBottom > itemTop + 50) {
            setTimeout(() => {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }, index * 150);
        }
    });
}

$('.timeline-item').css({
    'opacity': '0',
    'transform': 'translateY(20px)',
    'transition': 'all 0.6s ease'
});

$(window).on('scroll', animateTimeline);
animateTimeline();

// ==================== ABOUT PAGE: VALUE CARDS ANIMATION ====================

function animateValueCards() {
    $('.value-card').each(function(index) {
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

$('.value-card').css({
    'opacity': '0',
    'transform': 'scale(0.95)',
    'transition': 'all 0.5s ease'
});

$(window).on('scroll', animateValueCards);
animateValueCards();

// ==================== GALLERY PAGE: FILTERING ====================
$(document).ready(function() {
    $('.filter-btn').on('click', function() {
        const filterValue = $(this).data('filter');
        
        // Update active button
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        // Filter gallery items
        if (filterValue === 'all') {
            $('.gallery-item').removeClass('hide').fadeIn(600);
        } else {
            $('.gallery-item').each(function() {
                const category = $(this).data('category');
                if (category === filterValue) {
                    $(this).removeClass('hide').fadeIn(600);
                } else {
                    $(this).addClass('hide').fadeOut(400);
                }
            });
        }
    });

    // ==================== GALLERY PAGE: LIGHTBOX CONFIGURATION ====================
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'albumLabel': 'Image %1 of %2',
            'fadeDuration': 300,
            'imageFadeDuration': 300
        });
    }

    // ==================== GALLERY PAGE: ITEM ANIMATIONS ====================
    function animateGalleryItems() {
        $('.gallery-item:not(.hide)').each(function(index) {
            const itemTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            
            if (windowBottom > itemTop + 50) {
                setTimeout(() => {
                    $(this).css({
                        'opacity': '1',
                        'transform': 'translateY(0)'
                    });
                }, index * 50);
            }
        });
    }

    $('.gallery-item').css({
        'opacity': '0',
        'transform': 'translateY(30px)',
        'transition': 'all 0.6s ease'
    });

    $(window).on('scroll', animateGalleryItems);
    animateGalleryItems();

    // ==================== GALLERY PAGE: LOAD MORE FUNCTIONALITY ====================
    if ($('#loadMore').length) {
        let itemsToShow = 12;
        const totalItems = $('.gallery-item').length;

        // Initially hide items beyond the limit
        $('.gallery-item').each(function(index) {
            if (index >= itemsToShow) {
                $(this).hide();
            }
        });

        // Show/hide load more button
        function toggleLoadMoreBtn() {
            const visibleItems = $('.gallery-item:visible').length;
            if (visibleItems >= totalItems) {
                $('#loadMore').hide();
            } else {
                $('#loadMore').show();
            }
        }

        toggleLoadMoreBtn();

        $('#loadMore').on('click', function() {
            itemsToShow += 12;
            
            $('.gallery-item').each(function(index) {
                if (index < itemsToShow) {
                    $(this).fadeIn(600);
                }
            });

            toggleLoadMoreBtn();
        });
    }

    // ==================== GALLERY PAGE: IMAGE LAZY LOADING ====================
    if ('IntersectionObserver' in window && $('.gallery-image img').length) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        $('.gallery-image img').each(function() {
            imageObserver.observe(this);
        });
    }

    // ==================== GALLERY PAGE: HOVER EFFECTS ====================
    $('.gallery-image').on('mouseenter', function() {
        $(this).find('img').css('transform', 'scale(1.1)');
    }).on('mouseleave', function() {
        $(this).find('img').css('transform', 'scale(1)');
    });
});

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
        if ($('.overview-section').length) {
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
        }
    });
}

// ==================== COUNTER ANIMATION ====================

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
                $this.text(this.countNum + (countTo === 100 ? '%' : ''));
            }
        });
    });
}

// Trigger counter animation when in view
let counterAnimated = false;
$(window).on('scroll', function() {
    // For homepage overview section
    if ($('.overview-section').length && !counterAnimated) {
        const overviewTop = $('.overview-section').offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();
        
        if (windowBottom > overviewTop) {
            animateCounter();
            counterAnimated = true;
        }
    }
    
    // For gallery stats section
    if ($('.gallery-stats-section').length && !counterAnimated) {
        const statsTop = $('.gallery-stats-section').offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();
        
        if (windowBottom > statsTop) {
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
$('.overview-section, .why-choose-section, .rooms-preview-section, .amenities-section, .location-section, .booking-section, .cta-section, .heritage-story-section, .timeline-section, .values-section, .gallery-filter-section, .photo-gallery-section').css({
    'opacity': '0',
    'transform': 'translateY(20px)'
});

$(window).on('load', function() {
    setTimeout(() => {
        $('.overview-section, .why-choose-section, .rooms-preview-section, .amenities-section, .location-section, .booking-section, .cta-section, .heritage-story-section, .timeline-section, .values-section, .gallery-filter-section, .photo-gallery-section').css({
            'opacity': '1',
            'transform': 'translateY(0)',
            'transition': 'all 0.8s ease'
        });
    }, 300);
});

// ==================== BACK TO TOP BUTTON ====================

// Create back to top button
$('body').append('<button id="back-to-top" style="position:fixed;bottom:30px;right:30px;width:50px;height:50px;background:linear-gradient(135deg,#8B4513 0%,#654321 100%);color:white;border:none;border-radius:50%;font-size:20px;cursor:pointer;opacity:0;transition:all 0.3s ease;z-index:999;box-shadow:0 4px 15px rgba(139,69,19,0.4);"><i class="bi bi-arrow-up"></i></button>');

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

console.log('%c🏡 Saman Villa Website', 'color: #8B4513; font-size: 20px; font-weight: bold;');
console.log('%cDeveloped with ❤️ using Bootstrap & jQuery', 'color: #6B4E31; font-size: 12px;');


// ==================== VIDEO TOUR FUNCTIONALITY ====================
$(document).ready(function() {
    const video = $('#villaVideo')[0];
    const videoOverlay = $('#videoOverlay');
    const playButton = $('#playButton');
    const videoContainer = $('#videoContainer');

    // Only execute if video element exists
    if (video) {
        // Set video poster attribute to first frame
        video.setAttribute('preload', 'metadata');
        video.load();

        // Play video when overlay is clicked
        videoOverlay.on('click', function() {
            playVideo();
        });

        playButton.on('click', function(e) {
            e.stopPropagation();
            playVideo();
        });

        // Function to play video
        function playVideo() {
            video.play();
            videoOverlay.addClass('hide');
        }

        // Show overlay when video is paused
        video.addEventListener('pause', function() {
            if (!video.ended) {
                videoOverlay.removeClass('hide');
            }
        });

        // Show overlay when video ends
        video.addEventListener('ended', function() {
            videoOverlay.removeClass('hide');
            video.currentTime = 0;
        });

        // Hide overlay when video is playing
        video.addEventListener('play', function() {
            videoOverlay.addClass('hide');
        });
    }
});
