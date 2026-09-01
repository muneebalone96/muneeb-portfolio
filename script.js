/* ===========================================================
   MUNEEB UR RAHMAN — PORTFOLIO
   Content data + interactivity
   =========================================================== */
(function(){
  "use strict";

  /* ---------- ICONS (inline SVG, currentColor) ---------- */
  const ICON = {
    ai: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2 2M17 17l2 2M19.1 4.9l-2 2M7 17l-2 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    web: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M3 9h18M8 21h8" stroke="currentColor" stroke-width="1.6"/></svg>',
    design: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 20l4-1 10-10-3-3L5 16l-1 4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    image: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.6"/><circle cx="9" cy="10" r="1.6" fill="currentColor"/><path d="M4 17l5-5 4 4 3-3 4 4" stroke="currentColor" stroke-width="1.6"/></svg>',
    prompt: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 5h16M4 12h10M4 19h13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    product: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" stroke="currentColor" stroke-width="1.6"/><path d="M4.5 7.5L12 12l7.5-4.5M12 12v9" stroke="currentColor" stroke-width="1.6"/></svg>',
    marketing: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 11l14-6v14L3 13v-2z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M17 9a4 4 0 010 6" stroke="currentColor" stroke-width="1.6"/><path d="M7 13v4a2 2 0 002 2h1" stroke="currentColor" stroke-width="1.6"/></svg>',
    network: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="6" r="2.4" stroke="currentColor" stroke-width="1.6"/><circle cx="18" cy="6" r="2.4" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="18" r="2.4" stroke="currentColor" stroke-width="1.6"/><path d="M8 7l3 9M16 7l-3 9M8.4 6h7.2" stroke="currentColor" stroke-width="1.6"/></svg>',
    business: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    teach: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M2 8l10-4 10 4-10 4-10-4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" stroke="currentColor" stroke-width="1.6"/></svg>',
    idea: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M7 9a5 5 0 1110 0c0 2-1 3-2 4.2-.6.7-1 1.3-1 1.8H10c0-.5-.4-1.1-1-1.8C8 12 7 11 7 9z" stroke="currentColor" stroke-width="1.6"/></svg>',
    chat: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 5h16v11H8l-4 4V5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    learn: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 19V6a2 2 0 012-2h9l5 5v10a2 2 0 01-2 2H6a2 2 0 01-2-2z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8 12h8M8 16h5" stroke="currentColor" stroke-width="1.6"/></svg>',
    focus: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="3.4" stroke="currentColor" stroke-width="1.6"/></svg>',
    puzzle: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 4v2.3a1.7 1.7 0 003.3 0V4h3a1 1 0 011 1v3h-2.3a1.7 1.7 0 000 3.3H16v3a1 1 0 01-1 1h-3v-2.3a1.7 1.7 0 00-3.3 0V15H6a1 1 0 01-1-1v-3h2.3a1.7 1.7 0 000-3.3H5V5a1 1 0 011-1h3z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>',
    arrow: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    game: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="10" rx="5" stroke="currentColor" stroke-width="1.6"/><path d="M7 10v4M5 12h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="16" cy="10.5" r="1" fill="currentColor"/><circle cx="18.2" cy="12.8" r="1" fill="currentColor"/></svg>'
  };

  /* ---------- SERVICES ---------- */
  const services = [
    {icon:'ai', title:'AI-Powered Digital Solutions', text:'Using AI tools to plan, build and refine digital experiences faster and smarter.'},
    {icon:'web', title:'Website Development', text:'Modern, responsive websites built with an AI-assisted development workflow.'},
    {icon:'design', title:'Digital Design', text:'Clean, purposeful visual design for brands, businesses and digital products.'},
    {icon:'image', title:'AI Image & Video Creation', text:'Producing creative visuals and video concepts using modern AI generation tools.'},
    {icon:'prompt', title:'AI Prompt Engineering', text:'Crafting effective prompts to get consistent, high-quality AI outputs.'},
    {icon:'product', title:'Digital Product Creation', text:'Building digital products such as e-books, prompt bundles and downloadable assets.'},
    {icon:'marketing', title:'Marketing & Sales', text:'Practical marketing and sales approaches shaped by real customer communication.'},
    {icon:'network', title:'Network Marketing', text:'Hands-on experience building relationships and growth within network marketing.'},
    {icon:'business', title:'Business Development', text:'Helping ideas move from concept to a working, presentable business asset.'},
    {icon:'teach', title:'Teaching & Training', text:'Years of classroom experience translated into clear, structured guidance.'}
  ];

  /* ---------- AI & DIGITAL TECHNOLOGY CARDS (uses supplied imagery) ---------- */
  const aiCards = [
    {img:'assets/images/ai-technology.jpg', label:'AI', title:'Artificial Intelligence'},
    {img:'assets/images/coding-web-development.jpg', label:'Development', title:'Web Development'},
    {img:'assets/images/creative-design.jpg', label:'Design', title:'Digital Design'},
    {img:'assets/images/dashboard-ui.jpg', label:'Interfaces', title:'AI Image Generation'},
    {img:'assets/images/ai-robot.jpg', label:'Automation', title:'AI Video Generation'},
    {img:'assets/images/digital-creator-workspace.jpg', label:'Workflow', title:'Prompt Engineering'},
    {img:'assets/images/digital-products.jpg', label:'Products', title:'Digital Products'},
    {img:'assets/images/network-marketing.jpg', label:'Assistants', title:'AI Assistants'},
    {img:'assets/images/gaming.jpg', label:'Interactive', title:'Game Development'},
    {img:'assets/images/marketing-strategy.jpg', label:'Growth', title:'Marketing Technology'}
  ];

  /* ---------- TOOLS ---------- */
  const tools = ['HTML','CSS','JavaScript','React','Next.js','Tailwind CSS','TypeScript','Vite','Node.js','GitHub','GitHub Pages','Android Studio','Capacitor','Electron','Google AI Studio','DeepSeek','Claude','OpenAI','ElevenLabs','CapCut'];

  /* ---------- PROJECTS ---------- */
  const projects = [
    {
      id:'digital-hub', name:'Digital Hub', category:'Digital Products Marketplace',
      desc:'A modern digital marketplace concept for selling apps, websites, e-books and other digital products.',
      tags:['Digital Products','E-commerce','Website Design','AI','UI/UX'],
      img:'assets/images/digital-hub.jpg'
    },
    {
      id:'qari-scrap', name:'Qari Scrap', category:'Scrap Buying & Selling Website',
      desc:'A business website concept for scrap buying and selling with item categories, rates and an admin management system.',
      tags:['Business Website','Admin Dashboard','Rates','UI/UX'],
      img:'assets/images/qari-scrap.jpg'
    },
    {
      id:'afridi-gym', name:'Afridi Gym', category:'Gym Business Website',
      desc:'A professional gym website concept with modern branding, services and fitness-focused visual presentation.',
      tags:['Gym Website','Business Website','Design','Responsive UI'],
      img:'assets/images/afridi-gym.jpg'
    },
    {
      id:'nitro-rush', name:'Nitro Rush — Street Legends', category:'AI-assisted Game Development',
      desc:'An AI-assisted racing game project developed as an interactive digital game experience.',
      tags:['Game Development','AI','Web Game','Interactive Design'],
      img:'assets/images/nitro-rush.jpg'
    },
    {
      id:'nexora', name:'Nexora', category:'AI Voice Assistant',
      desc:'An AI voice assistant concept featuring voice interaction, speech recognition and a futuristic digital interface.',
      tags:['Next.js','TypeScript','Tailwind CSS','AI SDK','Speech API','ElevenLabs'],
      img:'assets/images/nexora.jpg'
    },
    {
      id:'ai-prompts', name:'500+ AI Image Prompts Bundle', category:'AI Digital Product / PDF',
      desc:'A digital product containing a large collection of AI image prompts designed for creative AI image generation.',
      tags:['AI','Digital Product','Prompt Engineering','Creative AI'],
      img:'assets/images/ai-prompts-bundle.png', fit:'contain'
    },
    {
      id:'quran-academy', name:'Saad Ibny Waqas Quran Academy', category:'Quran Academy Branding & Digital Project',
      desc:'A digital branding and website concept for an online Quran academy.',
      tags:['Branding','Website','Digital Design','Education'],
      img:'assets/images/quran-academy.jpg'
    }
  ];

  /* ---------- WHY WORK WITH ME ---------- */
  const whyItems = [
    {icon:'idea', title:'Creative Thinking', text:'Approaching each project with fresh ideas rather than a copy-paste template.'},
    {icon:'ai', title:'AI-Powered Approach', text:'Using AI tools deliberately to move faster without losing quality or care.'},
    {icon:'business', title:'Business & Marketing Understanding', text:'Real-world marketing and sales experience shapes practical, useful outcomes.'},
    {icon:'chat', title:'Communication Skills', text:'Years of teaching built clear, patient communication with people of all backgrounds.'},
    {icon:'learn', title:'Continuous Learning', text:'Actively exploring new AI tools, frameworks and digital techniques.'},
    {icon:'puzzle', title:'Problem Solving', text:'Breaking down a request into a workable, structured plan of action.'},
    {icon:'design', title:'Digital Creativity', text:'A steady interest in design, visuals and building things that look considered.'},
    {icon:'focus', title:'Customer Focus', text:'Listening first, then building around what the person actually needs.'}
  ];

  /* ---------- RENDER HELPERS ---------- */
  function el(html){
    const t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  function renderServices(){
    const grid = document.getElementById('servicesGrid');
    services.forEach((s,i)=>{
      const card = el(`
        <div class="service-card reveal" style="--i:${i}">
          <div class="service-icon">${ICON[s.icon]}</div>
          <h3>${s.title}</h3>
          <p>${s.text}</p>
          <a href="#contact" class="service-link">View Service ${ICON.arrow}</a>
        </div>`);
      grid.appendChild(card);
    });
  }

  function renderAiGrid(){
    const grid = document.getElementById('aiGrid');
    aiCards.forEach((c,i)=>{
      const card = el(`
        <div class="ai-card reveal" style="--i:${i}">
          <img src="${c.img}" alt="${c.title}" loading="lazy">
          <div class="ai-card-label"><span>${c.label}</span>${c.title}</div>
        </div>`);
      grid.appendChild(card);
    });
  }

  function renderTools(){
    const wrap = document.getElementById('toolsWrap');
    tools.forEach(t=>{
      wrap.appendChild(el(`<span class="tool-pill">${t}</span>`));
    });
  }

  function projectMedia(p){
    if(p.img){
      const containClass = p.fit === 'contain' ? ' contain' : '';
      return `<div class="project-media${containClass}"><img src="${p.img}" alt="${p.name} project preview" loading="lazy"><span class="project-category">${p.category}</span></div>`;
    }
    return `<div class="project-media placeholder">
        ${ICON.product}
        <span>Preview coming soon</span>
        <span class="project-category" style="position:absolute;top:1rem;left:1rem;">${p.category}</span>
      </div>`;
  }

  function renderProjects(){
    const grid = document.getElementById('projectsGrid');
    projects.forEach((p,i)=>{
      const card = el(`
        <article class="project-card reveal" style="--i:${i}">
          ${projectMedia(p)}
          <div class="project-body">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <div class="project-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>
            <div class="project-foot">
              <button class="project-view" data-project="${p.id}">View Case Study ${ICON.arrow}</button>
            </div>
          </div>
        </article>`);
      grid.appendChild(card);
    });
  }

  function renderWhy(){
    const grid = document.getElementById('whyGrid');
    whyItems.forEach((w,i)=>{
      grid.appendChild(el(`
        <div class="why-card reveal" style="--i:${i}">
          <div class="why-icon">${ICON[w.icon]}</div>
          <h3>${w.title}</h3>
          <p>${w.text}</p>
        </div>`));
    });
  }

  renderServices();
  renderAiGrid();
  renderTools();
  renderProjects();
  renderWhy();

  /* ---------- NAV: scroll state + mobile menu ---------- */
  const nav = document.getElementById('siteNav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  function onScroll(){
    nav.classList.toggle('is-scrolled', window.scrollY > 30);
  }
  document.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  navToggle.addEventListener('click', ()=>{
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('active', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=>{
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded','false');
    });
  });

  /* ---------- SCROLL REVEAL ---------- */
  const revealTargets = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
  revealTargets.forEach(t=>io.observe(t));

  document.querySelectorAll('.reveal-group').forEach(group=>{
    io.observe(group);
    group.classList.add('in-view'); // children handle their own reveal via .reveal
  });

  /* ---------- PROJECT MODAL ---------- */
  const overlay = document.getElementById('modalOverlay');
  const modalMedia = document.getElementById('modalMedia');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalTags = document.getElementById('modalTags');
  const modalClose = document.getElementById('modalClose');

  function openModal(p){
    modalMedia.innerHTML = p.img
      ? `<img src="${p.img}" alt="${p.name} project preview">`
      : `<div class="modal-media placeholder" style="width:100%;height:100%;">${ICON.product}</div>`;
    modalMedia.classList.toggle('contain', p.fit === 'contain');
    modalCategory.textContent = p.category;
    modalTitle.textContent = p.name;
    modalDescription.textContent = p.desc;
    modalTags.innerHTML = p.tags.map(t=>`<span>${t}</span>`).join('');
    overlay.classList.add('open');
    document.body.classList.add('modal-open');
  }
  function closeModal(){
    overlay.classList.remove('open');
    document.body.classList.remove('modal-open');
  }
  document.getElementById('projectsGrid').addEventListener('click', (e)=>{
    const btn = e.target.closest('[data-project]');
    if(!btn) return;
    const p = projects.find(pr=>pr.id === btn.dataset.project);
    if(p) openModal(p);
  });
  modalClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e)=>{ if(e.target === overlay) closeModal(); });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });

  /* ---------- CONTACT FORM: Formspree submission ---------- */
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqpkpqbw';
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const submitBtn = document.getElementById('cfSubmit');

  function validateField(field, isValid){
    field.closest('.field').classList.toggle('invalid', !isValid);
    return isValid;
  }

  function setStatus(message, tone){
    status.textContent = message;
    status.classList.remove('show','status-error','status-success');
    if(tone === 'error') status.classList.add('status-error');
    if(tone === 'success') status.classList.add('status-success');
    if(message) status.classList.add('show');
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = form.querySelector('#cf-name');
    const email = form.querySelector('#cf-email');
    const message = form.querySelector('#cf-message');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validName = validateField(name, name.value.trim().length > 1);
    const validEmail = validateField(email, emailPattern.test(email.value.trim()));
    const validMessage = validateField(message, message.value.trim().length > 4);

    if(!(validName && validEmail && validMessage)){
      setStatus('', null);
      return;
    }

    const originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    setStatus('', null);

    fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    }).then(response => {
      if(response.ok){
        setStatus('✓ Message Sent Successfully!', 'success');
        form.reset();
      } else {
        setStatus('Something went wrong. Please try again.', 'error');
      }
    }).catch(() => {
      setStatus('Something went wrong. Please try again.', 'error');
    }).finally(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    });
  });

})();
