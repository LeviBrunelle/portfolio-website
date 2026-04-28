(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();function g(e){const t=document.getElementById("navbar");if(!t)return;t.innerHTML=`
    <a class="brand" href="/index.html" aria-label="Home">
      <!-- Use your actual filename: Logo.png or Logo.svg -->
      <img src="/images/icons/Logo.png" alt="Levi Brunelle logo">
    </a>

    <nav class="links">
      <a href="/index.html"        data-key="about">About</a>
      <a href="/projects.html"     data-key="projects">Projects</a>
      <a href="/experience.html"   data-key="experience">Experience</a>
      <a href="/contact.html"      data-key="contact">Contact</a>
    </nav>
  `;const s=e??(()=>{const n=(location.pathname.split("/").pop()||"index.html").toLowerCase();return n.startsWith("index")?"about":n.startsWith("projects")?"projects":n.startsWith("experience")?"experience":n.startsWith("contact")?"contact":"about"})();t.querySelectorAll(".links a").forEach(n=>{n.dataset.key===s&&n.classList.add("active")})}function m(e,t,s=40){e.innerHTML='<span class="typewrite"><span class="text"></span><span class="caret"></span></span>';const n=e.querySelector(".text"),a=e.querySelector(".caret");let r=0;function i(){r<=t.length?(n.textContent=t.slice(0,r),r++,requestAnimationFrame(()=>setTimeout(i,s))):a.style.animationPlayState="running"}a.style.animationPlayState="paused",i()}function c(e,t={}){const s=t.step??90,n=t.start??0,a=new IntersectionObserver(i=>{i.forEach(l=>{l.isIntersecting&&(l.target.classList.add("reveal-in"),a.unobserve(l.target))})},{threshold:.12,rootMargin:"0px 0px -10% 0px"});let r=0;for(const i of e)i.style.setProperty("--d",`${n+r*s}ms`),a.observe(i),r++}function j(){const e=location.pathname;if(e.endsWith("/")||e.endsWith("/index.html")){const t=document.querySelectorAll(".about-row .figure, .about-row .figure img"),s=document.querySelectorAll(".about-row .copy");t.forEach(n=>n.classList.add("reveal-base","reveal-up")),s.forEach(n=>n.classList.add("reveal-base","reveal-up")),c(t,{step:60,start:0}),c(s,{step:60,start:120})}if(e.includes("projects")){const t=document.querySelectorAll("details.card, .card");t.forEach(s=>s.classList.add("reveal-base","reveal-up")),c(t,{step:90,start:0})}if(e.includes("experience")){const t=document.querySelectorAll(".xp-card, details.card, .card");t.forEach(s=>s.classList.add("reveal-base","reveal-up")),c(t,{step:90,start:0})}}function y(){g("about");const e=document.querySelector("main");e.className="about-page",e.innerHTML=`
    <h1 id="about-hero" class="about-hero typewriter no-caret"></h1>

    <!-- ROW 1: text (label+paragraph) → image -->
    <section class="about-row">
      <div class="text">
        <div class="vlabel">Academic</div>
        <article class="copy">
          Nanotechnology Engineering @ the University of Waterloo, Quantum
          Information specialization, and a minor in Combinatorics and Optimization.
          I spend a lot of time at the Quantum-Nano Centre, touching semiconductor
          fab, lithography and materials characterization. Next up: a deeper run
          into quantum physics &amp; computing, fueling a long-term curiosity for how
          matter behaves when the rules get weird.
        </article>
      </div>
      <figure class="figure">
        <img src="/images/qnc.png" alt="Quantum-Nano Centre">
      </figure>
    </section>

    <!-- ROW 2 (STAGGER): image → text (label+paragraph) -->
    <section class="about-row flip">
      <figure class="figure">
        <img src="/images/projects/lens-sim/gui4.png" alt="Project imagery">
      </figure>
      <div class="text">
        <div class="vlabel">Professional</div>
        <article class="copy">
          Coast-to-coast R&amp;D, from Los Angeles to Boston. I've designed microscope
          tooling, deployed data analysis and simulation tools, and turned one-off
          experiments into reliable workflows. I'm happiest solving problems that
          force me to learn new skills and result in dependable tools. 
        </article>
      </div>
    </section>

    <!-- ROW 3: text (label+paragraph) → image -->
    <section class="about-row">
      <div class="text">
        <div class="vlabel">Personal</div>
        <article class="copy">
          I'm a craftsman at heart, making real things that last. Archangel Ironworks 
          is my after hours passion: forging custom blades and jewelry, experimenting 
          with fun Damascus steel patterns, and fabricating awesome equipment for the shop. 
          I post some of the cool stuff I make on Instagram. Away from the anvil, I'm an 
          amateur perfumer and musical theatre nerd.
        </article>
      </div>
      <figure class="figure">
        <img src="/images/personal.png" alt="Workshop imagery">
      </figure>
    </section>
  `,m(document.querySelector("#about-hero"),"Hi! I'm Levi.")}const w=document.querySelectorAll(".about-row .vlabel"),k=document.querySelectorAll(".about-row .figure");[...w,...k].forEach(e=>e.classList.add("reveal-base","reveal-up"));c([...w,...k],{step:120,start:0});const x=document.querySelectorAll(".about-row .copy");x.forEach(e=>e.classList.add("reveal-base","reveal-up"));c(x,{step:120,start:240});const o=(e="")=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),L=e=>{if(Array.isArray(e.sections)&&e.sections.length)return e.sections.filter(s=>!!(s!=null&&s.title)&&(Array.isArray(s.body)&&s.body.length>0||Array.isArray(s.bullets)&&s.bullets.length>0));const t=[];return Array.isArray(e.bullets)&&e.bullets.length&&t.push({title:"Overview",bullets:e.bullets}),Array.isArray(e.details)&&e.details.length&&t.push({title:"Details",body:e.details}),t},M=e=>{const t=[];Array.isArray(e.links)&&t.push(...e.links.filter(r=>!!(r!=null&&r.label)&&!!(r!=null&&r.href)));const s=e.link_url??e.link,n=e.link_text??e.cta??e.linkText;s&&n&&t.push({label:n,href:s});const a=new Set;return t.filter(r=>{const i=`${r.label}__${r.href}`;return a.has(i)?!1:(a.add(i),!0)})},$=e=>e.length?`
    <div class="card-sections">
      ${e.map(t=>{const s=Array.isArray(t.body)?t.body.map(a=>`<p>${o(a)}</p>`).join(""):"",n=Array.isArray(t.bullets)&&t.bullets.length?`
                <ul>
                  ${t.bullets.map(a=>`<li>${o(a)}</li>`).join("")}
                </ul>
              `:"";return`
            <section class="card-section">
              <h3 class="card-section-title">${o(t.title)}</h3>
              ${s}
              ${n}
            </section>
          `}).join("")}
    </div>
  `:"",I=e=>e.length?`
    <div class="card-link">
      ${e.map(t=>`
            <a class="btn" href="${o(t.href)}" target="_blank" rel="noopener noreferrer">
              ${o(t.label)}
            </a>
          `).join("")}
    </div>
  `:"",E=(e=[])=>e.length?`
    <div class="gallery">
      ${e.map(t=>{const s=typeof t=="string"?t:t.src,n=typeof t=="string"?"":t.alt??"";return`
            <a class="thumb" href="${o(s)}" data-lb="${o(s)}" aria-label="Open image">
              <img src="${o(s)}" alt="${o(n)}" loading="lazy">
            </a>
          `}).join("")}
    </div>
  `:"",q=(e=[])=>e.length?`
    <div class="pills">
      ${e.map(t=>`<span class="pill">${o(t)}</span>`).join("")}
    </div>
  `:"";function S(e){const t=L(e),s=M(e),n=Array.isArray(e.gallery)?e.gallery:[],a=Array.isArray(e.skills)?e.skills:[];return`
<details class="card">
  <summary>
    ${e.cover?`<img class="cover" src="${o(e.cover)}" alt="">`:'<div class="cover"></div>'}
    <div class="card-summary-copy">
      <div class="title">${o(e.title)}</div>
      ${e.dates?`<div class="dates">${o(e.dates)}</div>`:""}
      ${e.blurb?`<p class="blurb">${o(e.blurb)}</p>`:""}
    </div>
  </summary>

  ${I(s)}

  <div class="card-body">
    <div class="card-inner">
      ${$(t)}
      ${E(n)}
      ${q(a)}
    </div>
  </div>
</details>`}const C=[{title:"Olevius",dates:"June 2025 - April 2026",blurb:"Cuffless, wrist-worn blood pressure monitoring prototype using a custom fiber-optic sensor embedded in a PDMS pouch.",cover:"/images/projects/olevius/Olevius.png",links:[{label:"View Slides",href:"/files/olevius-capstone-slides.pdf"}],sections:[{title:"Overview",body:["Fourth-year Nanotechnology Engineering capstone project focused on continuous, non-invasive blood pressure monitoring at the wrist."],bullets:["Developed as a proof-of-concept alternative to cuff-based monitoring and indirect optical wearable approaches.","Used a custom fiber-optic sensing element embedded in a glycerol-filled PDMS pouch to capture arterial pulse waveforms without a traditional cuff.","Integrated into a wrist-worn prototype with wireless signal streaming and mobile-app visualization."]},{title:"My Role",body:["I was the optomechanical lead, responsible for the core sensing hardware and physical integration of the device."],bullets:["Designed and machined custom aluminum molds for the multilayer PDMS pouch.","Developed the fabrication and assembly process, including PDMS casting, bonding, and glycerol filling.","Fabricated the embedded fiber-optic sensor and integrated it into the pouch.","Designed the wrist-mounted housing and explored miniature custom fiber couplers for a future miniaturized revision."]},{title:"Mechanism",body:["The sensing concept converted artery-driven deformation into a measurable optical signal."],bullets:["Light is transmitted between two aligned optical fibers, across a gap maintained between the fibers by means of a short length of microcatheter tubing.","Arterial pulses deform the sensor face, and the fluid-filled PDMS pouch transmits that force to the fiber joint.","Fiber misalignment changes optical transmission, producing a continuous pulse waveform for downstream processing."]},{title:"Results",body:["The final prototype demonstrated continuous wireless signal capture and preliminary blood-pressure prediction within the project target."],bullets:["Data was collected from 14 participants under resting and post-exercise conditions.","The preliminary model achieved mean absolute errors of 3.38 ± 4.00 mmHg for systolic pressure and 2.87 ± 3.28 mmHg for diastolic pressure.","The sensing hardware reached wearable scale, while electronics miniaturization remained future work for a V2 revision."]}],skills:["Fiber Optics","Optomechanical Design","PDMS Fabrication","Microfluidics","CNC Machining","Signal Processing","Python","COMSOL","Fusion 360"],gallery:["/images/projects/olevius/Device.png","/images/projects/olevius/Mechanism.png","/images/projects/olevius/Explosion.png","/images/projects/olevius/Molds.png","/images/projects/olevius/Sensor-parts.png","/images/projects/olevius/Finished-sensor.png","/images/projects/olevius/Joint.png"]},{title:"Autonomous EV Charging Location Optimizer",dates:"Dec 2025",blurb:"Mixed Integer Programming model to optimize locations for autonomous EV charging stations.",cover:"/images/projects/ev-optimizer/streetmap_final-results.png",link:"https://github.com/mqzpt/autonomous-fleet-charging-optimization",link_text:"View GitHub Repo",bullets:["Built a Python geospatial pipeline using OSMnx/NetworkX to pull the city road graph, generate candidate station sites, and compute network-based travel distances.","Formulated a Mixed-Integer Programming facility-location model to place new L2/DC fast-charging sites and optionally acquire/retrofit existing stations (from OpenChargeMap) under budget and capacity constraints.","Modeled demand as weighted nodes (weighted by the city's point-of-interest density) and minimized the demand-weighted travel distance for charging from each demand node using GurobiPy.","Implemented constraint logic for real-world feasibility (site selection, station capacities, upgrade decisions, and budget tradeoffs) and ran scenario sweeps to study how solutions change with assumptions.","Generated map-based visualizations of demand density and station locations to make the output interpretable and easy to validate."],skills:["Python","Data Processing","Gurobi","Integer Programming","Linear Programming","Operations Research"],gallery:["/images/projects/ev-optimizer/streetmap_basic.png","/images/projects/ev-optimizer/streetmap_candidates.png","/images/projects/ev-optimizer/streetmap_demand-node.png","/images/projects/ev-optimizer/streetmap_stations.png","/images/projects/ev-optimizer/streetmap_final-results.png"]},{title:"GPU-Accelerated Lens Simulator",dates:"June 2025 - July 2025",blurb:"GPU-accelerated diffraction modeling with a Streamlit UI.",cover:"/images/projects/lens-sim/1mm_biconvex_lens.png",link:"https://github.com/LeviBrunelle/PyTorch_Diffraction_Simulation",link_text:"View Github Repo",bullets:["~10x speedup (vs CPU) via GPU acceleration with PyTorch.","Can accommodate arbitrary number of lens elements in the optical path.","Simulation metrics include PSF, MTF, effective and back focal lengths.","Visualization of 2D intensity field with optional dark mode.","Custom Streamlit UI for fast, responsive parameter tweaking.","Plans to add many more features, including different optical components and metrics."],skills:["Python","PyTorch","Scalar Wave Optics","OOP","Streamlit"],gallery:["/images/projects/lens-sim/gui1.png","/images/projects/lens-sim/gui2.png","/images/projects/lens-sim/gui3.png","/images/projects/lens-sim/gui4.png"]},{title:"Knife Vise",dates:"September 2025",blurb:"3-axis benchtop vise for securely holding knives during hand sanding.",cover:"/images/projects/knife-vise/cover.png",bullets:["3 degrees of freedom allows for precise positioning and stability.","Features adjustable clamps to securely hold various blade shapes.","Compact design fits on most workbenches without sacrificing space.","Spring loaded jaws for quick and easy release of the blade.","Will be fabricated this winter break."],skills:["Fusion360"],gallery:["/images/projects/knife-vise/img1.png","/images/projects/knife-vise/img2.png","/images/projects/knife-vise/img3.png"]},{title:"2x72 Belt Grinder",dates:"February 2025",blurb:"3hp belt grinder for knife making and metal fabrication.",cover:"/images/projects/grinder/img1.png",bullets:["3hp motor with vfd means the belt will maintain speed under any load.","2-axis belt tracking system ensures consistent alignment and prevents wobble.","Can be tilted from 0-90 degrees for different grinding tasks.",`Accepts industry standard 1.5" square tooling arms in case I'd rather buy an attachment than make one.`,"Adjustable work rest, small wheel holder, various contact wheels, different platen hardnesses, and surface grinder"],skills:["Fusion360","Sheet Metal Design","MIG Welding","Manual Lathe","Manual Mill","CNC Laser Cutting"],gallery:["/images/projects/grinder/img1.png","/images/projects/grinder/img2.png","/images/projects/grinder/img3.png","/images/projects/grinder/img4.png","/images/projects/grinder/img5.png","/images/projects/grinder/img6.png"]},{title:"Surface Grinding Attachment",dates:"December 2025",blurb:"Attachment for 2x72 belt grinder to enable precise surface grinding capabilities.",cover:"/images/projects/surface/img1.png",bullets:['Standard 1.5" tooling arm to fit in most grinders',"Entirely manually machined aluminum body.","Includes 7 switchable magnets in the chuck to hold workpieces securely.","Rigid dovetail feed mechanism with UHMW gibs for smooth, tight control.","Sine bar built into the chuck to allow for grinding precise tapers.",'Extra wide 3" contact wheel for tracking back and forth across a wide workpiece.'],skills:["Fusion360","Manual Mill"],gallery:["/images/projects/surface/img1.png","/images/projects/surface/img2.png","/images/projects/surface/img3.png","/images/projects/surface/img4.png","/images/projects/surface/img5.png"]}],_={projects:C};function A(){let e=document.querySelector(".lb-backdrop");if(e||(e=document.createElement("div"),e.className="lb-backdrop",e.innerHTML=`
      <div class="lb-wrap">
        <img alt="">
      </div>
      <button class="lb-close" aria-label="Close">×</button>
    `,document.body.appendChild(e)),e.dataset.bound==="true")return;e.dataset.bound="true";const t=e.querySelector("img"),s=e.querySelector(".lb-close"),n=()=>{e.classList.remove("show"),document.body.style.overflow="",t.removeAttribute("src")};e.addEventListener("click",a=>{a.target===e&&n()}),s.addEventListener("click",n),window.addEventListener("keydown",a=>{a.key==="Escape"&&e.classList.contains("show")&&n()}),document.body.addEventListener("click",a=>{const r=a.target.closest("[data-lb], a.thumb");if(!r)return;const i=r.getAttribute("data-lb")||r.getAttribute("href")||"";i&&(a.preventDefault(),t.src=i,e.classList.add("show"),document.body.style.overflow="hidden")})}const D=_,P=e=>/^(https?:)?\/\//.test(e)||e.startsWith("data:"),f=e=>{if(e)return P(e)||e.startsWith("/")?e:e.startsWith("images/")?`/${e}`:`/images/${e}`},v=e=>{if(e)return P(e)||e.startsWith("/")?e:`/${e}`},O=e=>{const t=e.link_url??e.link,s=e.link_text??e.cta??e.linkText,n=[...Array.isArray(e.links)?e.links.filter(i=>(i==null?void 0:i.label)&&(i==null?void 0:i.href)).map(i=>({label:i.label,href:v(i.href)})):[],...t&&s?[{label:s,href:v(t)}]:[]],a=[],r=new Set;for(const i of n){const l=`${i.label}__${i.href}`;r.has(l)||(r.add(l),a.push(i))}return{...e,cover:f(e.logo||e.cover),links:a,gallery:Array.isArray(e.gallery)?e.gallery.map(i=>{if(typeof i=="string")return f(i)??i;const l=f(i==null?void 0:i.src);return l?{src:l,alt:i.alt??""}:null}).filter(Boolean):[]}};function z(){g("projects");const e=document.querySelector("main");if(!e)return;e.innerHTML='<h1 id="ty"></h1><div id="cards" class="proj-list"></div>',m(document.querySelector("#ty"),"I've been working on...");const t=document.querySelector("#cards");t&&(t.innerHTML=D.projects.map(s=>S(O(s))).join(""),e.classList.add("projects-page"),A())}const T=[{title:"Lithography Intern",company:"Irradiant Technologies",location:"Boston, MA",dates:"May 2025 - Aug 2025",logo:"/images/jobs/irradiant_logo.png",link:"https://github.com/LeviBrunelle/PyTorch_Diffraction_Simulation",link_text:"View Github Repo",bullets:["Proposed, designed, and built an image-processing pipeline in Python to detect sample interfaces on a 2-photon lithography system, applying piecewise regression models and vectorized array calculations to generate 3D surface maps of warping, tilt, and roughness for precise print-plane calibration.","Built a GPU-accelerated lens simulation tool in PyTorch with a Streamlit GUI, enabling ~10x speedup in realistic diffraction modeling of complex optical systems.","Synthesized porous silicon wafers via sol-gel processing and characterized microstructure-property relationships using SEM and mechanical testing (nanoindentation, tensile, compression), linking pore and crack morphology to strength for tuning supercritical CO2 drying and kiln-anneal process parameters.","Designed and fabricated optical components using 2-photon lithography, validated performance using image-analysis scripts and metrology tools.","Modeled and machined precise mounting components for optical breadboard setups, enabling the optical engineers to create more complex custom lithography and metrology systems."],skills:["Python","PyTorch","Scikit","SciPy","NumPy","Image Processing","Wave Optics","2-Photon Lithography","Confocal Microscopy","Streamlit"]},{title:"R&D Engineering Intern",company:"Terray Therapeutics",location:"Pasadena, CA",dates:"Sep 2023 - Apr 2024",logo:"/images/jobs/terray_logo.png",bullets:["Designed and fabricated a 3-axis AC electromagnetic microscope stage using Fusion360, CNC, and manual machining to enable live nanoparticle manipulation.","Developed image processing scripts using NumPy, Scikit-Learn, Pandas, and ImageJ to extract and analyze intensity data, ultimately discovering a more efficient surface chemistry for microarrays and improving loading efficiency by 20%.","Optimized microarray loading procedure by designing and printing custom sample holders, reducing touchpoints from 12 to 5.","Performed experiments on gold-thiol and nitride functionalized coatings for silicon microarrays to reduce non-specific binding of bio-enabled nanoparticles."],skills:["Surface Chemistry","Python","Image Processing","Electromag","DNA Click","Fluorescent Microscopy","Fusion360"]},{title:"Process Engineering Intern",company:"Evonik Industries",location:"Maitland, ON",dates:"May 2022 - Aug 2022",logo:"/images/jobs/evonik_logo.png",bullets:["Engineered a project to fix the RO water filtration system by processing instrument data with Pandas, performing water tests, and doing Root Cause Analysis to find and replace components and chemicals, saving the plant an estimated $60 000/year.","Specced, procured, and replaced plant instruments."],skills:["Data Processing","Root Cause Analysis","Plant Instrumentation","Process Engineering","Reverse Osmosis","Excel VBA"]},{title:"Bladesmith / Founder",company:"Archangel Ironworks",location:"Winnipeg, MB",dates:"Ongoing",logo:"/images/jobs/archangel_logo.jpg",link:"https://www.instagram.com/archangelironworks/",link_text:"View Instagram Profile",skills:["Bladesmithing","Blacksmithing","Welding","Metal Fabrication","Manual Machining","Woodworking","Jewelry Making"],bullets:["Designs and creates performance custom blades, pattern-welded (Damascus) steel, and jewelry.","Fabricates shop equipment such as belt grinders and forging presses using SMAW/GMAW, manual machining, and other fabrication techniques."]}],W={roles:T},F=e=>e?e.startsWith("/images/")?e:`/images/${e}`:void 0;function H(){g("experience");const e=document.querySelector("main");e.innerHTML='<h1 id="ty"></h1><div id="cards" class="xp-list"></div>',m(document.querySelector("#ty"),"My career so far.");const t=document.querySelector("#cards"),s=W.roles||[],n=s.map(i=>S({cover:F(i.logo),title:i.title,dates:i.dates,blurb:i.company,bullets:i.bullets,skills:i.skills,gallery:i.gallery,link_text:i.link_text??i.cta??i.linkText,link_url:i.link_url??i.link})).join("");t.innerHTML=n,t.querySelectorAll("details.card > summary .blurb").forEach((i,l)=>{var b;const h=(b=s[l])==null?void 0:b.location;if(!h)return;const p=document.createElement("div");p.className="location",p.textContent=h,i.insertAdjacentElement("afterend",p)}),document.querySelector("main").classList.add("experience-page"),A();const r=Array.from(document.querySelectorAll(".xp-list details.card"));r.forEach((i,l)=>i.style.setProperty("--d",`${l*90}ms`)),r.forEach(i=>i.classList.add("reveal-base","reveal-up")),c(r,{step:90,start:0})}function N(){g();const e=document.querySelector("main");e.innerHTML=`
    <h1 class="typewriter no-caret">Let's get in touch.</h1>

    <div class="contact-list" style="max-width:780px; margin-top:18px">
      ${u("/images/socials/email.png","Email","Fastest way to reach me for opportunities or questions.","mailto:lbrunell@uwaterloo.ca")}
      ${u("/images/socials/linkedin.png","LinkedIn","Professional updates and DMs—happy to connect.","https://www.linkedin.com/in/lbrunell/")}
      ${u("/images/socials/github.png","GitHub","Code, experiments, and work-in-progress projects.","https://github.com/levibrunelle/")}
      ${u("/images/socials/instagram.png","Instagram","Bladesmithing and other metal-related projects.","https://www.instagram.com/archangelironworks/")}
    </div>
  `,m(document.querySelector("h1"),"Let's get in touch.");const t=Array.from(document.querySelectorAll(".contact-item"));t.forEach((n,a)=>n.style.setProperty("--delay",`${a*90}ms`));const s=new IntersectionObserver(n=>{n.forEach(a=>{a.isIntersecting&&(a.target.classList.add("in"),s.unobserve(a.target))})},{threshold:.12,rootMargin:"0px 0px -10% 0px"});t.forEach(n=>s.observe(n))}function u(e,t,s,n){return`
    <div class="contact-item">
      <div style="display:grid; grid-template-columns:52px 1fr; gap:16px; align-items:center">
        <img class="contact-icon" src="${e}" alt="${t}" style="width:52px; height:52px" />
        <div>
          <div class="contact-title" style="font-weight:800; font-size:22px">${t}</div>
          <a class="contact-desc" href="${n}">${s}</a>
        </div>
      </div>
    </div>
  `}const d=location.pathname;async function G(){d.endsWith("/")||d.endsWith("/index.html")?await y():d.includes("projects")?await z():d.includes("experience")?await H():d.includes("contact")?await N():await y(),j()}G();
