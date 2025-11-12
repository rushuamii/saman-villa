$(function() {
    'use strict';

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
        // Remove active class from all slides and dots
        slides.removeClass('active');
        dots.removeClass('active');

        // Add active class to current slide and dot
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
            autoPlayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
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
});
