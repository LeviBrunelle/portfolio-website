import { mountNavbar } from "../components/navbar";
import { typewriter } from "../components/typewriter";
import { revealStagger } from "../components/reveal";


export function mountAbout(){
  mountNavbar("about");

  const main = document.querySelector("main")!;
  main.className = "about-page"; 

  main.innerHTML = `
    <h1 id="about-hero" class="about-hero typewriter no-caret"></h1>

    <!-- ROW 1: text (label+paragraph) → image -->
    <section class="about-row">
      <div class="text">
        <div class="vlabel">Academic</div>
        <article class="copy">
          Nanotechnology Engineering graduate from the University of Waterloo with a Quantum
          Engineering specialization and several extra classes in Operations Research.
          My technical background spans cleanroom fabrication, semiconductor devices, lithography, 
          optics, batteries, materials science and characterization, surface chemistry, organic chemistry, 
          electrochemistry, and process optimization.
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
          I build practical tools for difficult experimental problems: optical simulations, 
          lithography calibration pipelines, surface-chemistry workflows, custom test fixtures, 
          and machined hardware for R&D environments. I'm currently looking for full-time engineering roles 
          where hands-on experimentation, data analysis, and process improvement meet.
        </article>
      </div>
    </section>

    <!-- ROW 3: text (label+paragraph) → image -->
    <section class="about-row">
      <div class="text">
        <div class="vlabel">Personal</div>
        <article class="copy">
          Outside of work, I'm a craftsman. Archangel Ironworks is my after hours passion: 
          forging custom blades and jewelry, experimenting with fun Damascus steel patterns, 
          and fabricating awesome equipment for the shop. Away from the anvil, I'm an 
          amateur perfumer and musical theatre nerd.
        </article>
      </div>
      <figure class="figure">
        <img src="/images/personal.png" alt="Workshop imagery">
      </figure>
    </section>
  `;

  // Typewriter for the hero
  typewriter(document.querySelector("#about-hero")!, "Hi! I'm Levi.");
}

// === About reveals ===
// Headers (vertical labels) + images first
const _aboutHeaders = document.querySelectorAll<HTMLElement>(".about-row .vlabel");
const _aboutImages  = document.querySelectorAll<HTMLElement>(".about-row .figure");
[..._aboutHeaders, ..._aboutImages].forEach(el => el.classList.add("reveal-base","reveal-up"));
revealStagger([..._aboutHeaders, ..._aboutImages], { step: 120, start: 0 });

// Then paragraphs (slide out from under the headers)
const _aboutParas = document.querySelectorAll<HTMLElement>(".about-row .copy");
_aboutParas.forEach(el => el.classList.add("reveal-base","reveal-up"));
revealStagger(_aboutParas, { step: 120, start: 240 });

