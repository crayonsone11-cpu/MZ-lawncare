import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Optimize GSAP ticker and ScrollTrigger for buttery 60fps performance
gsap.ticker.lagSmoothing(500, 33);
ScrollTrigger.config({ limitCallbacks: true });

// Data for Services (All 6 Official Services from mzslawncare.ca)
const servicesData = {
  'lawn-mowing': {
    title: 'Lawn Mowing',
    tag: 'Routine Maintenance',
    img: 'https://images.squarespace-cdn.com/content/v1/636af882480fe96683fb13a0/62c5dad2-05d6-420f-a245-c0d7231882ff/IMG_8262.JPG',
    desc: "Mz's Lawn Care delivers precise and reliable lawn mowing services to keep your grass healthy, neat, and beautifully maintained across Toronto & the GTA.",
    features: [
      'Precision cut height calibrated for Toronto climate & grass variety',
      'Professional striping patterns for pristine curb appeal',
      'Clean power blowout of all clippings from walkways and driveways',
      'Reliable weekly and bi-weekly recurring schedules with zero lock-in'
    ]
  },
  'lawn-trimming': {
    title: 'Lawn Trimming & Edging',
    tag: 'Edging & Detailing',
    img: 'https://images.squarespace-cdn.com/content/v1/636af882480fe96683fb13a0/4ffb4c82-2743-426a-8e57-a26cb5f158fc/IMG_6230.jpg',
    desc: "Mz's Lawn Care provides expert lawn trimming to give your yard a clean, crisp, and well-defined appearance around every edge.",
    features: [
      'Razor-sharp perimeter edging along sidewalks, curbs, and patios',
      'Trimming around fences, trees, posts, and delicate garden beds',
      'Prevents turf encroachment into flowerbeds and stone pavers',
      'Completed with high-grade commercial string trimmers'
    ]
  },
  'hedge-trimming': {
    title: 'Hedge / Shrub / Bush Trimming',
    tag: 'Pruning & Shaping',
    img: 'https://images.squarespace-cdn.com/content/v1/636af882480fe96683fb13a0/805b0a1c-f6b2-4378-af2d-65f5ba42db52/IMG_2841.png',
    desc: "Mz's Lawn Care offers professional hedge, shrub, and bush trimming to keep your landscape neat, healthy, and beautifully well-shaped.",
    features: [
      'Artisanal pruning, geometric shaping, and height reduction',
      'Deadwood and diseased branch removal to promote vigorous growth',
      'Cedar privacy hedges, decorative boxwoods, and flowering shrubs',
      'Full post-trim cleanup, raking, bagging, and debris removal'
    ]
  },
  'garden-maintenance': {
    title: 'Full Garden Maintenance',
    tag: 'Complete Garden Care',
    img: 'https://images.squarespace-cdn.com/content/v1/636af882480fe96683fb13a0/1737401091384-O7W937OBEGIYJGI90H81/Copy+of+D095C711-3EFA-45CA-9388-AC11B1996D2D.jpg',
    desc: "Mz's Lawn Care delivers full garden maintenance, including weeding and plant care, to keep your garden vibrant, tidy, and thriving.",
    features: [
      'Meticulous root-level hand weeding across all garden beds',
      'Perennial dividing, deadheading, and seasonal plant health checks',
      'Dark organic hemlock & cedar mulch topping and soil cultivation',
      'Deep spade edging defining beds from turf borders'
    ]
  },
  'fall-cleanup': {
    title: 'Fall Cleanup',
    tag: 'Fall Preparation',
    img: 'https://images.squarespace-cdn.com/content/v1/636af882480fe96683fb13a0/2dfae439-523f-492c-a7be-25817adf6322/IMG_8259.JPG',
    desc: "Mz's Lawn Care provides clean and precise fall cleanup to create a sharp and clean environment that enhances your yard’s overall look and prepares it for winter.",
    features: [
      'Complete leaf clearing, vacuuming, and yard waste bagging',
      'Final low-height mowing cut to prevent winter snow mold',
      'Fall root-strengthening fertilization application',
      'Perennial plant cutbacks and shrub winterization'
    ]
  },
  'spring-cleanup': {
    title: 'Spring Cleanup',
    tag: 'Spring Revitalization',
    img: 'https://images.squarespace-cdn.com/content/v1/636af882480fe96683fb13a0/00c7e407-41b5-4d66-ad18-ffa6b65667a2/IMG_3042+%283%29.png',
    desc: "Mz's Lawn Care ensures a spotless exterior with a thorough Spring cleanup around your property for a clean, polished appearance.",
    features: [
      'Power raking and mechanical dethatching to clear matted dead grass',
      'Removal of winter gravel, road salt residues, and storm debris',
      'Core aeration for optimal drainage and spring oxygenation',
      'First-pass overseeding and spring wake-up fertilizer'
    ]
  }
};

// Project Details Data
const projectsData = {
  '1': {
    title: 'Modern Backyard Retreat',
    location: 'Toronto, ON',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    desc: 'Complete property rejuvenation including mechanical leveling, fresh Kentucky Bluegrass sod, armor stone perimeter, and integrated low-voltage lighting.'
  },
  '2': {
    title: 'Front Yard Transformation',
    location: 'North York, ON',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    desc: 'Layered perennial garden beds, cedar mulch replenishment, natural stone border walls, and precision edging for maximum curb appeal.'
  },
  '3': {
    title: 'Poolside Landscaping',
    location: 'Mississauga, ON',
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    desc: 'Low-maintenance architectural planting, ornamental grasses, flagstone coping, and automated drip irrigation around an inground pool.'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ==========================================================================
  // 1. GSAP ENTRANCE & SCROLL ANIMATIONS (web-animation-skills guidelines)
  // ==========================================================================

  if (!prefersReducedMotion) {
    // A. Hero entrance timeline
    const heroCard = document.querySelector('.hero-showcase-card');
    if (heroCard) {
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      heroTl
        .from('#mainHeader', {
          y: -25,
          opacity: 0,
          duration: 0.7
        })
        .from('.headline-row-1', {
          y: 35,
          opacity: 0,
          duration: 0.75
        }, '-=0.35')
        .from('.sticker-pill-wrapper', {
          scale: 0.8,
          opacity: 0,
          duration: 0.55,
          ease: 'back.out(1.7)'
        }, '-=0.45')
        .from('.doodle-sparkle-left, .doodle-crown-top', {
          scale: 0,
          rotation: -15,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(2)'
        }, '-=0.3')
        .from('.space-question-wrapper', {
          y: 35,
          opacity: 0,
          duration: 0.75
        }, '-=0.6')
        .from('.hero-display-subtext', {
          y: 20,
          opacity: 0,
          duration: 0.6
        }, '-=0.4')
        .from('.hero-action-buttons', {
          y: 20,
          opacity: 0,
          duration: 0.6
        }, '-=0.45');

      // Continuous subtle idle floating on doodles (GPU composited)
      gsap.to('.doodle-sparkle-left', {
        y: -4,
        rotation: 3,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      gsap.to('.doodle-crown-top', {
        y: -3,
        rotation: -2,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }

    // B. Subpage Hero entrance (for all dedicated service pages)
    const subpageHeroContent = document.querySelector('.subpage-hero-content');
    const subpageHeroMedia = document.querySelector('.subpage-hero-media');
    if (subpageHeroContent) {
      gsap.fromTo(subpageHeroContent,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', clearProps: 'all' }
      );
    }
    if (subpageHeroMedia) {
      gsap.fromTo(subpageHeroMedia,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.55, ease: 'power2.out', clearProps: 'all' }
      );
    }

    // C. ScrollTrigger reveals on sections
    // Section headers reveal
    document.querySelectorAll('.section-top-header, .projects-header-row, .bundle-header-row, .faq-header-row, .subservices-header').forEach(header => {
      gsap.fromTo(header,
        { opacity: 0, y: 20 },
        {
          scrollTrigger: {
            trigger: header,
            start: 'top 88%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          clearProps: 'transform,opacity'
        }
      );
    });

    // Service cards stagger entrance (Home page)
    const servicesTrack = document.getElementById('servicesTrack');
    if (servicesTrack) {
      const serviceCards = document.querySelectorAll('.service-card');
      serviceCards.forEach(card => card.style.transition = 'none');
      gsap.fromTo('.service-card',
        { opacity: 0, y: 28 },
        {
          scrollTrigger: {
            trigger: servicesTrack,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          y: 0,
          stagger: 0.07,
          duration: 0.55,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          onComplete: () => {
            serviceCards.forEach(card => card.style.transition = '');
          }
        }
      );
    }

    // Subpage subservices grid batch entrance (smooth GPU rendering without transition conflicts)
    if (document.querySelector('.subservice-card')) {
      ScrollTrigger.batch('.subservice-card', {
        start: 'top 90%',
        once: true,
        onEnter: (batch) => {
          batch.forEach(card => card.style.transition = 'none');
          gsap.fromTo(batch,
            { opacity: 0, y: 22 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.06,
              duration: 0.45,
              ease: 'power2.out',
              clearProps: 'transform,opacity',
              onComplete: () => {
                batch.forEach(card => card.style.transition = '');
              }
            }
          );
        }
      });
    }

    // Recent projects video cards reveal
    if (document.querySelector('.project-video-card')) {
      ScrollTrigger.batch('.project-video-card', {
        start: 'top 88%',
        once: true,
        onEnter: (batch) => {
          batch.forEach(card => card.style.transition = 'none');
          gsap.fromTo(batch,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.08,
              duration: 0.5,
              ease: 'power2.out',
              clearProps: 'transform,opacity',
              onComplete: () => {
                batch.forEach(card => card.style.transition = '');
              }
            }
          );
        }
      });
    }

    // Story columns glide
    const storyGrid = document.querySelector('.story-split-grid');
    if (storyGrid) {
      gsap.fromTo('.story-split-grid > div',
        { opacity: 0, y: 22 },
        {
          scrollTrigger: {
            trigger: storyGrid,
            start: 'top 82%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.6,
          ease: 'power2.out',
          clearProps: 'transform,opacity'
        }
      );
    }

    // Pricing bundle card smooth scale reveal
    const bundleCard = document.querySelector('.bundle-outer-card');
    if (bundleCard) {
      gsap.fromTo(bundleCard,
        { opacity: 0, y: 25, scale: 0.98 },
        {
          scrollTrigger: {
            trigger: bundleCard,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          ease: 'power2.out',
          clearProps: 'transform,opacity'
        }
      );
    }

    // Subpage Gallery items batch entrance
    if (document.querySelector('.gallery-item')) {
      ScrollTrigger.batch('.gallery-item', {
        start: 'top 90%',
        once: true,
        onEnter: (batch) => {
          batch.forEach(item => item.style.transition = 'none');
          gsap.fromTo(batch,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.06,
              duration: 0.45,
              ease: 'power2.out',
              clearProps: 'transform,opacity',
              onComplete: () => {
                batch.forEach(item => item.style.transition = '');
              }
            }
          );
        }
      });
    }

    // Quote form section entrance
    const quoteGrid = document.querySelector('.quote-split-grid');
    if (quoteGrid) {
      gsap.fromTo('.quote-split-grid > div',
        { opacity: 0, y: 22 },
        {
          scrollTrigger: {
            trigger: quoteGrid,
            start: 'top 82%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.6,
          ease: 'power2.out',
          clearProps: 'transform,opacity'
        }
      );
    }

    // Recalculate ScrollTrigger positions when all images load
    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });
  }

  // ==========================================================================
  // 2. FAQ Accordion with Silky Smooth GSAP Transitions (micro-interaction)
  // ==========================================================================
  const accordionCards = document.querySelectorAll('.accordion-card');
  accordionCards.forEach(card => {
    const header = card.querySelector('.accordion-header');
    const content = card.querySelector('.accordion-content');
    const iconCircle = card.querySelector('.accordion-icon-circle');

    if (!header || !content) return;

    header.addEventListener('click', () => {
      const isOpen = card.classList.contains('active');

      // Close all other accordion cards smoothly
      accordionCards.forEach(c => {
        if (c !== card && c.classList.contains('active')) {
          c.classList.remove('active');
          const otherContent = c.querySelector('.accordion-content');
          const otherIcon = c.querySelector('.accordion-icon-circle');
          c.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');

          if (otherIcon) {
            otherIcon.classList.remove('active-circle');
            otherIcon.innerHTML = '<svg class="chevron-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>';
          }

          if (otherContent) {
            if (!prefersReducedMotion) {
              gsap.to(otherContent, {
                height: 0,
                opacity: 0,
                duration: 0.28,
                ease: 'power2.inOut',
                onComplete: () => {
                  otherContent.style.display = 'none';
                }
              });
            } else {
              otherContent.style.display = 'none';
            }
          }
        }
      });

      // Toggle current accordion
      if (!isOpen) {
        card.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
        content.style.display = 'block';

        if (iconCircle) {
          iconCircle.classList.add('active-circle');
          iconCircle.innerHTML = '<svg class="chevron-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m18 15-6-6-6 6"/></svg>';
        }

        if (!prefersReducedMotion) {
          gsap.fromTo(content,
            { height: 0, opacity: 0 },
            { height: 'auto', opacity: 1, duration: 0.35, ease: 'power2.out' }
          );
        }
      } else {
        card.classList.remove('active');
        header.setAttribute('aria-expanded', 'false');

        if (iconCircle) {
          iconCircle.classList.remove('active-circle');
          iconCircle.innerHTML = '<svg class="chevron-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>';
        }

        if (!prefersReducedMotion) {
          gsap.to(content, {
            height: 0,
            opacity: 0,
            duration: 0.25,
            ease: 'power2.inOut',
            onComplete: () => {
              content.style.display = 'none';
            }
          });
        } else {
          content.style.display = 'none';
        }
      }
    });
  });

  // ==========================================================================
  // 3. Services Navigation & View Mode (Scroll / Grid)
  // ==========================================================================
  const servicesTrackEl = document.getElementById('servicesTrack');
  const prevBtn = document.getElementById('servicesPrev');
  const nextBtn = document.getElementById('servicesNext');
  const viewScrollBtn = document.getElementById('viewScrollBtn');
  const viewGridBtn = document.getElementById('viewGridBtn');
  const servicesSliderArrows = document.getElementById('servicesSliderArrows');

  if (prevBtn && nextBtn && servicesTrackEl) {
    prevBtn.addEventListener('click', () => {
      servicesTrackEl.scrollBy({ left: -360, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      servicesTrackEl.scrollBy({ left: 360, behavior: 'smooth' });
    });
  }

  // View Mode Switcher: Scrollable vs Grid
  if (viewScrollBtn && viewGridBtn && servicesTrackEl) {
    viewScrollBtn.addEventListener('click', () => {
      viewScrollBtn.classList.add('active');
      viewGridBtn.classList.remove('active');
      servicesTrackEl.classList.remove('grid-view');
      if (servicesSliderArrows) {
        servicesSliderArrows.classList.remove('arrows-disabled');
      }
      ScrollTrigger.refresh();
    });

    viewGridBtn.addEventListener('click', () => {
      viewGridBtn.classList.add('active');
      viewScrollBtn.classList.remove('active');
      servicesTrackEl.classList.add('grid-view');
      if (servicesSliderArrows) {
        servicesSliderArrows.classList.add('arrows-disabled');
      }
      ScrollTrigger.refresh();
    });
  }

  // ==========================================================================
  // 4. Modal Logic (for Projects showcase)
  // ==========================================================================
  const modal = document.getElementById('serviceModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImgBanner = document.getElementById('modalImgBanner');
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalFeatures = document.getElementById('modalFeatures');

  // Open Project in Modal
  document.querySelectorAll('.project-row').forEach(row => {
    row.addEventListener('click', () => {
      const projId = row.getAttribute('data-project');
      const data = projectsData[projId];
      if (data && modal) {
        modalImgBanner.style.backgroundImage = `url('${data.img}')`;
        modalTag.textContent = data.location;
        modalTitle.textContent = data.title;
        modalDesc.textContent = data.desc;
        modalFeatures.innerHTML = `
          <div class="modal-feature-item">
            <span>✦</span>
            <span>Completed with zero disruption to homeowner schedule</span>
          </div>
          <div class="modal-feature-item">
            <span>✦</span>
            <span>100% satisfaction guarantee verified by Mert</span>
          </div>
        `;
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');

        if (!prefersReducedMotion) {
          gsap.fromTo('.modal-card',
            { scale: 0.92, opacity: 0, y: 20 },
            { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: 'back.out(1.5)' }
          );
        }
      }
    });
  });

  // Close Modal
  if (modalCloseBtn && modal) {
    const closeModal = () => {
      if (!prefersReducedMotion) {
        gsap.to('.modal-card', {
          scale: 0.94,
          opacity: 0,
          y: 10,
          duration: 0.22,
          ease: 'power2.in',
          onComplete: () => {
            modal.classList.remove('open');
            modal.setAttribute('aria-hidden', 'true');
          }
        });
      } else {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
      }
    };

    modalCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    const modalBookBtn = document.querySelector('.modal-book-btn');
    if (modalBookBtn) {
      modalBookBtn.addEventListener('click', closeModal);
    }
  }

  // ==========================================================================
  // 4B. Video Modal Logic for Recent Projects Videos
  // ==========================================================================
  const videoModal = document.getElementById('videoModal');
  const videoModalClose = document.getElementById('videoModalClose');
  const videoIframe = document.getElementById('videoIframe');
  const videoModalTitle = document.getElementById('videoModalTitle');
  const videoModalTag = document.getElementById('videoModalTag');
  const videoModalLink = document.getElementById('videoModalLink');

  let lastFocusedElement = null;

  const openVideoModal = (videoUrl, title, tag, postUrl) => {
    if (!videoModal || !videoIframe) return;
    lastFocusedElement = document.activeElement;
    videoIframe.src = videoUrl;
    if (videoModalTitle) videoModalTitle.textContent = title;
    if (videoModalTag) videoModalTag.textContent = tag;
    if (videoModalLink) {
      videoModalLink.href = postUrl || videoUrl;
      videoModalLink.textContent = postUrl && postUrl.includes('instagram') ? 'View on Instagram ↗' : 'View on YouTube ↗';
    }
    videoModal.classList.add('open');
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (videoModalClose) {
      setTimeout(() => videoModalClose.focus(), 100);
    }

    if (!prefersReducedMotion) {
      gsap.fromTo('.video-modal-card',
        { scale: 0.92, opacity: 0, y: 15 },
        { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
      );
    }
  };

  const closeVideoModal = () => {
    if (!videoModal || !videoIframe) return;
    const finishClose = () => {
      videoModal.classList.remove('open');
      videoModal.setAttribute('aria-hidden', 'true');
      videoIframe.src = '';
      document.body.style.overflow = '';
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    };

    if (!prefersReducedMotion) {
      gsap.to('.video-modal-card', {
        scale: 0.94,
        opacity: 0,
        y: 10,
        duration: 0.22,
        ease: 'power2.in',
        onComplete: finishClose
      });
    } else {
      finishClose();
    }
  };

  document.querySelectorAll('.project-video-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    const title = card.getAttribute('data-video-title') || 'Project Video';
    if (!card.hasAttribute('aria-label')) {
      card.setAttribute('aria-label', `Play project video: ${title}`);
    }

    card.addEventListener('click', (e) => {
      if (e.target.closest('.card-external-link')) return;
      const videoUrl = card.getAttribute('data-video-url');
      const cardTitle = card.getAttribute('data-video-title');
      const tag = card.getAttribute('data-video-tag');
      const postUrl = card.getAttribute('data-video-post');
      openVideoModal(videoUrl, cardTitle, tag, postUrl);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  if (videoModalClose) videoModalClose.addEventListener('click', closeVideoModal);
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('open')) {
      closeVideoModal();
    }
  });

  // ==========================================================================
  // 5. Interactive Underline Form Submission
  // ==========================================================================
  const quoteForm = document.getElementById('quoteForm');
  const statusMsg = document.getElementById('formStatusMsg');

  if (quoteForm && statusMsg) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('userName').value.trim();
      const town = document.getElementById('userTown').value;
      const service = document.getElementById('userService').value;

      statusMsg.textContent = `Thank you, ${name}! Mert will contact you with your ${town} estimate for ${service} within 24 hours.`;
      statusMsg.style.color = '#277035';
      quoteForm.reset();

      if (!prefersReducedMotion) {
        gsap.fromTo(statusMsg,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
        );
      }

      setTimeout(() => {
        if (!prefersReducedMotion) {
          gsap.to(statusMsg, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => { statusMsg.textContent = ''; }
          });
        } else {
          statusMsg.textContent = '';
        }
      }, 8000);
    });
  }

  // ==========================================================================
  // 6. Mobile Menu Drawer Toggle & Touch Handling (WCAG compliant)
  // ==========================================================================
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');
  if (mobileToggle && navLinks) {
    const toggleMobileMenu = (forceClose = false) => {
      const isCurrentlyOpen = navLinks.classList.contains('mobile-open');
      if (forceClose || isCurrentlyOpen) {
        navLinks.classList.remove('mobile-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      } else {
        navLinks.classList.add('mobile-open');
        mobileToggle.setAttribute('aria-expanded', 'true');
        if (!prefersReducedMotion) {
          gsap.fromTo(navLinks,
            { opacity: 0, y: -8 },
            { opacity: 1, y: 0, duration: 0.22, ease: 'power2.out' }
          );
        }
      }
    };

    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('mobile-open')) {
        if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
          toggleMobileMenu(true);
        }
      }
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('mobile-open')) {
        toggleMobileMenu(true);
        mobileToggle.focus();
      }
    });

    // Handle link clicks inside mobile menu
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        // If clicking the dropdown toggle on small screens, toggle the sub-menu instead of leaving
        if (link.classList.contains('dropdown-toggle') && window.innerWidth <= 900) {
          const dropdownParent = link.closest('.nav-item-dropdown');
          if (dropdownParent) {
            e.preventDefault();
            dropdownParent.classList.toggle('expanded');
            return;
          }
        }
        // Destination link clicked: close menu
        toggleMobileMenu(true);
      });
    });
  }
});
