/**
 * KAMAL SELECTIONS - INTERACTIVE HERO SECTION SCRIPT
 * Features:
 * - Parallax background effect
 * - Sticky navigation glassmorphism transition on scroll
 * - Mobile hamburger menu drawer
 * - Store locator modal popup
 * - Search modal overlay
 * - Interactive size guide tabs modal
 * - Active navigation link highlighter
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. STICKY NAVBAR TRANSITION ON SCROLL
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. PARALLAX BACKGROUND EFFECT ON SCROLL & MOUSE MOVEMENT
  const heroBgImg = document.getElementById('hero-bg-img');
  
  if (heroBgImg) {
    // Parallax on scroll
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      if (scrolled < window.innerHeight) {
        heroBgImg.style.transform = `scale(1.02) translateY(${scrolled * 0.25}px)`;
      }
    });

    // Subtle tilt on mouse movement (Desktop only)
    if (window.innerWidth > 992) {
      document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        heroBgImg.style.transform = `scale(1.04) translate(${mouseX * -15}px, ${mouseY * -15}px)`;
      });
    }
  }

  // 3. MOBILE DRAWER NAVIGATION
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    mobileDrawer.classList.add('active');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('active');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // 4. STORE LOCATOR MODAL
  const openStoreModalNav = document.getElementById('open-store-modal-nav');
  const openStoreModalBtn = document.getElementById('open-store-modal-btn');
  const mobileStoreLink = document.getElementById('mobile-store-link');
  const drawerVisitBtn = document.getElementById('drawer-visit-btn');
  const storeModal = document.getElementById('store-modal');
  const closeStoreModalBtn = document.getElementById('close-store-modal');
  const storeModalBackdrop = document.getElementById('store-modal-backdrop');

  function openStoreModal(e) {
    if (e) e.preventDefault();
    closeDrawer();
    storeModal.classList.add('active');
    storeModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeStoreModal() {
    storeModal.classList.remove('active');
    storeModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (openStoreModalNav) openStoreModalNav.addEventListener('click', openStoreModal);
  if (openStoreModalBtn) openStoreModalBtn.addEventListener('click', openStoreModal);
  if (mobileStoreLink) mobileStoreLink.addEventListener('click', openStoreModal);
  if (drawerVisitBtn) drawerVisitBtn.addEventListener('click', openStoreModal);
  if (closeStoreModalBtn) closeStoreModalBtn.addEventListener('click', closeStoreModal);
  if (storeModalBackdrop) storeModalBackdrop.addEventListener('click', closeStoreModal);

  // 5. SEARCH OVERLAY MODAL
  const searchBtn = document.getElementById('search-btn');
  const searchModal = document.getElementById('search-modal');
  const closeSearchModal = document.getElementById('close-search-modal');
  const searchInput = document.getElementById('search-input');

  function openSearch() {
    searchModal.classList.add('active');
    searchModal.setAttribute('aria-hidden', 'false');
    if (searchInput) setTimeout(() => searchInput.focus(), 200);
    document.body.style.overflow = 'hidden';
  }

  function closeSearch() {
    searchModal.classList.remove('active');
    searchModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (searchBtn) searchBtn.addEventListener('click', openSearch);
  if (closeSearchModal) closeSearchModal.addEventListener('click', closeSearch);

  // 6. SIZE GUIDE MODAL
  const openSizeGuideNav = document.getElementById('open-size-guide-nav');
  const mobileSizeLink = document.getElementById('mobile-size-link');
  const sizeGuideModal = document.getElementById('size-guide-modal');
  const closeSizeGuideModal = document.getElementById('close-size-guide-modal');
  const sizeGuideBackdrop = document.getElementById('size-guide-backdrop');

  function openSizeGuide(e) {
    if (e) e.preventDefault();
    closeDrawer();
    sizeGuideModal.classList.add('active');
    sizeGuideModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeSizeGuide() {
    sizeGuideModal.classList.remove('active');
    sizeGuideModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (openSizeGuideNav) openSizeGuideNav.addEventListener('click', openSizeGuide);
  if (mobileSizeLink) mobileSizeLink.addEventListener('click', openSizeGuide);
  if (closeSizeGuideModal) closeSizeGuideModal.addEventListener('click', closeSizeGuide);
  if (sizeGuideBackdrop) sizeGuideBackdrop.addEventListener('click', closeSizeGuide);

  // Size Guide Tab Switching
  const sizeTabs = document.querySelectorAll('.size-tab');
  const tabWomens = document.getElementById('tab-womens');
  const tabKids = document.getElementById('tab-kids');

  sizeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      sizeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetTab = tab.dataset.tab;
      if (targetTab === 'womens') {
        tabWomens.style.display = 'block';
        tabKids.style.display = 'none';
      } else {
        tabWomens.style.display = 'none';
        tabKids.style.display = 'block';
      }
    });
  });

  // 7. KEYBOARD ESCAPE TO CLOSE ANY MODAL
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      closeStoreModal();
      closeSearch();
      closeSizeGuide();
    }
  });

  // 8. ACTIVE NAV LINK ON SCROLL
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

});
