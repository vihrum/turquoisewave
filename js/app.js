/**
 * ==============================================================================
 * TOPAZ APPLICATION LOGIC
 * ==============================================================================
 * Handles navigation, dropdowns, mobile drawer, hash routing,
 * dynamic service views, and contact form submission.
 */

document.addEventListener('DOMContentLoaded', () => {
  // References to Views
  const homeView = document.getElementById('home-view');
  const detailView = document.getElementById('detail-view');
  const contactView = document.getElementById('contact-view');

  // Navigation & Dropdown elements
  const btnServices = document.getElementById('nav-services-btn');
  const btnCompany = document.getElementById('nav-company-btn');
  const panelServices = document.getElementById('panel-services');
  const panelCompany = document.getElementById('panel-company');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerClose = document.getElementById('drawer-close');

  // Contact Form elements
  const contactForm = document.getElementById('contact-form');
  const contactFormContainer = document.getElementById('contact-form-container');
  const thanksCard = document.getElementById('thanks-card');
  const thanksBackBtn = document.getElementById('thanks-back-btn');
  const selectTargetService = document.getElementById('f-service');

  // --------------------------------------------------------------------------
  // DROPDOWN MENUS (Desktop)
  // --------------------------------------------------------------------------
  function closeAllDropdowns() {
    if (panelServices) panelServices.classList.remove('is-open');
    if (panelCompany) panelCompany.classList.remove('is-open');
    if (btnServices) btnServices.setAttribute('aria-expanded', 'false');
    if (btnCompany) btnCompany.setAttribute('aria-expanded', 'false');
  }

  if (btnServices && panelServices) {
    btnServices.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = panelServices.classList.contains('is-open');
      closeAllDropdowns();
      if (!isOpen) {
        panelServices.classList.add('is-open');
        btnServices.setAttribute('aria-expanded', 'true');
      }
    });
  }

  if (btnCompany && panelCompany) {
    btnCompany.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = panelCompany.classList.contains('is-open');
      closeAllDropdowns();
      if (!isOpen) {
        panelCompany.classList.add('is-open');
        btnCompany.setAttribute('aria-expanded', 'true');
      }
    });
  }

  // Close dropdowns on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.site-header')) {
      closeAllDropdowns();
    }
  });

  // --------------------------------------------------------------------------
  // MOBILE DRAWER
  // --------------------------------------------------------------------------
  function openDrawer() {
    closeAllDropdowns();
    if (drawerOverlay) drawerOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (drawerOverlay) drawerOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', (e) => {
      if (e.target === drawerOverlay) closeDrawer();
    });
  }

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllDropdowns();
      closeDrawer();
    }
  });

  // --------------------------------------------------------------------------
  // SERVICE DETAIL RENDERING
  // --------------------------------------------------------------------------
  function renderServiceDetail(slug) {
    if (!SITE_CONTENT || !SITE_CONTENT.services || !SITE_CONTENT.services[slug]) {
      navigateTo('home');
      return;
    }

    const s = SITE_CONTENT.services[slug];
    const L = SITE_CONTENT.detailPage;

    // Breadcrumbs & Headers
    document.getElementById('detail-title').textContent = s.title;
    document.getElementById('detail-cat-badge').textContent = s.cat;
    document.getElementById('detail-lead').textContent = s.lead;
    document.getElementById('detail-crumb-current').textContent = s.title;

    // Use cases
    const usesContainer = document.getElementById('detail-uses-list');
    usesContainer.innerHTML = '';
    (s.uses || []).forEach(useText => {
      const li = document.createElement('li');
      li.className = 'detail-use-item';
      li.textContent = useText;
      usesContainer.appendChild(li);
    });

    // Features
    const featuresContainer = document.getElementById('detail-features-grid');
    featuresContainer.innerHTML = '';
    (s.features || []).forEach(f => {
      const card = document.createElement('div');
      card.className = 'feature-card';
      card.innerHTML = `
        <h4 class="feature-title">${f.t || f.title}</h4>
        <p class="feature-desc">${f.d || f.desc}</p>
      `;
      featuresContainer.appendChild(card);
    });

    // Specifications
    const specsContainer = document.getElementById('detail-specs-table');
    specsContainer.innerHTML = '';
    (s.specs || []).forEach(sp => {
      const row = document.createElement('div');
      row.className = 'spec-row';
      row.innerHTML = `
        <div class="spec-key">${sp.k || sp.label}</div>
        <div class="spec-val">${sp.v || sp.value}</div>
      `;
      specsContainer.appendChild(row);
    });

    // Link CTA to Contact with pre-selected service
    const ctaBtn = document.getElementById('detail-cta-btn');
    if (ctaBtn) {
      ctaBtn.onclick = () => {
        navigateTo('contact', { service: s.title });
      };
    }
  }

  // --------------------------------------------------------------------------
  // HASH ROUTER
  // --------------------------------------------------------------------------
  function navigateTo(route, params = {}) {
    closeAllDropdowns();
    closeDrawer();

    if (route === 'home' || !route) {
      if (homeView) homeView.style.display = 'block';
      if (detailView) detailView.classList.remove('is-active');
      if (contactView) contactView.classList.remove('is-active');
      if (params.scrollTarget) {
        scrollToElement(params.scrollTarget);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (route.startsWith('service/')) {
      const slug = route.replace('service/', '');
      renderServiceDetail(slug);
      if (homeView) homeView.style.display = 'none';
      if (contactView) contactView.classList.remove('is-active');
      if (detailView) detailView.classList.add('is-active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (route === 'contact') {
      if (homeView) homeView.style.display = 'none';
      if (detailView) detailView.classList.remove('is-active');
      if (contactView) contactView.classList.add('is-active');

      if (params.service && selectTargetService) {
        selectTargetService.value = params.service;
      }
      // Reset form view state
      if (contactFormContainer) contactFormContainer.style.display = 'block';
      if (thanksCard) thanksCard.classList.remove('is-active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function scrollToElement(id) {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const offset = 76;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const targetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  }

  function handleHash() {
    const rawHash = window.location.hash.replace(/^#/, '');
    if (!rawHash || rawHash === 'top' || rawHash === 'home') {
      navigateTo('home');
      return;
    }

    if (rawHash.startsWith('service/')) {
      navigateTo(rawHash);
      return;
    }

    if (rawHash.startsWith('contact')) {
      const urlParams = new URLSearchParams(rawHash.split('?')[1] || '');
      const svc = urlParams.get('service');
      navigateTo('contact', { service: svc });
      return;
    }

    // Anchor on home page (e.g. telecom, trust, results, company)
    navigateTo('home', { scrollTarget: rawHash });
  }

  window.addEventListener('hashchange', handleHash);

  // Initial Route Dispatch
  handleHash();

  // --------------------------------------------------------------------------
  // CONTACT FORM SUBMISSION
  // --------------------------------------------------------------------------
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!contactForm.reportValidity()) return;

      const agreeCheckbox = document.getElementById('f-agree');
      if (agreeCheckbox && !agreeCheckbox.checked) {
        alert('Please agree to the privacy policy before submitting.');
        return;
      }

      // Collect form data
      const formData = new FormData(contactForm);
      const submissionData = Object.fromEntries(formData.entries());
      console.log('[Topaz Inquiry Submitted]', submissionData);

      // Transition to thank you state
      if (contactFormContainer) contactFormContainer.style.display = 'none';
      if (thanksCard) thanksCard.classList.add('is-active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (thanksBackBtn) {
    thanksBackBtn.addEventListener('click', () => {
      if (contactForm) contactForm.reset();
      window.location.hash = '';
      navigateTo('home');
    });
  }

  // --------------------------------------------------------------------------
  // BIND DELEGATED CLICKS FOR ANCHORS & ROUTER
  // --------------------------------------------------------------------------
  document.querySelectorAll('[data-route]').forEach(el => {
    el.addEventListener('click', (e) => {
      const target = el.getAttribute('data-route');
      if (target) {
        window.location.hash = target;
      }
    });
  });

  // Back to top buttons
  document.querySelectorAll('.back-to-top-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
});
