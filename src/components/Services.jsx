// import { Card } from "flowbite-react";
import { Card } from "@mui/material";
import "./Services.css";

function Services() {
  return (
    <div className="services-section container-fluid">
      {/* <section id="services"> */}
      <div>
        <span class="section-tag">What I offer</span>
        <h2 class="section-title">Services</h2>
        <p class="section-subtitle">
          Here's what I can help you build, from concept to production.
        </p>
      </div>

      <div class="services-grid fade-up">
        <div class="service-card">
          <span class="service-num">01</span>
          <span class="service-icon">🌐</span>
          <div class="service-title">Web Development</div>
          <p class="service-desc">
            Full-stack web applications built with React, Node.js, and modern
            tooling. Clean code, responsive design, and production-ready
            performance.
          </p>
        </div>

        <div class="service-card">
          <span class="service-num">02</span>
          <span class="service-icon">🖌</span>
          <div class="service-title">UI/UX Design</div>
          <p class="service-desc">
            User-centred interface design that balances aesthetics with
            usability. From wireframes to polished, pixel-perfect
            implementations.
          </p>
        </div>

        <div class="service-card">
          <span class="service-num">03</span>
          <span class="service-icon">🛒</span>
          <div class="service-title">E-Commerce Solutions</div>
          <p class="service-desc">
            Custom Shopify stores, Wordpress/WooCommerce builds, and bespoke
            ordering systems with payment integration.
          </p>
        </div>

        <div class="service-card">
          <span class="service-num">04</span>
          <span class="service-icon">⚙️</span>
          <div class="service-title">ERP &amp; Systems</div>
          <p class="service-desc">
            Custom business management systems, process automation, and data
            migration — built to scale and reduce operational overhead.
          </p>
        </div>

        <div class="service-card">
          <span class="service-num">05</span>
          <span class="service-icon">🔍</span>
          <div class="service-title">SEO &amp; Performance</div>
          <p class="service-desc">
            Optimise your existing site for search engines and performance. Fast
            load times, clean HTML, and technical SEO that drives results.
          </p>
        </div>

        <div class="service-card">
          <span class="service-num">06</span>
          <span class="service-icon">🖥</span>
          <div class="service-title">IT Support &amp; Networking</div>
          <p class="service-desc">
            Infrastructure setup, server administration, LAN/WAN configuration,
            and end-user technical support for businesses of all sizes.
          </p>
        </div>
      </div>
      {/* </section> */}
    </div>
  );
}

export default Services;
