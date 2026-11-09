/*
 * Renders the portfolio from js/data.js.
 * You normally don't need to edit this file. Change js/data.js instead.
 */
(function () {
  "use strict";

  var D = window.PORTFOLIO;
  if (!D) { console.error("js/data.js did not load"); return; }

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  // escape, then turn **bold** into <strong>
  function fmt(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"); }
  function $(id) { return document.getElementById(id); }
  function each(list, fn) { return (list || []).map(fn).join(""); }

  var ICONS = {
    shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    phone:  '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
    scan:   '<path d="M4 8V5a1 1 0 011-1h3M16 4h3a1 1 0 011 1v3M20 16v3a1 1 0 01-1 1h-3M8 20H5a1 1 0 01-1-1v-3"/><circle cx="12" cy="12" r="3"/>',
    school: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/>',
    pin:    '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0112 2.5a7 7 0 017 7C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    screen: '<rect x="2.5" y="4" width="19" height="13" rx="2"/><path d="M10 8.5v5l4-2.5z"/><path d="M8 21h8"/>',
    lock:   '<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 018 0v3.5"/>',
    chat:   '<path d="M4 5h16v11H9l-5 4z"/>',
    car:    '<path d="M5 16V11l2-5h10l2 5v5"/><path d="M3 16h18v3H3z"/><circle cx="7.5" cy="16" r="1"/><circle cx="16.5" cy="16" r="1"/>'
  };
  function icon(name) {
    return '<div class="ico"><svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS.phone) + "</svg></div>";
  }

  /* ---------- hero ---------- */
  var P = D.profile;
  $("hero-copy").innerHTML =
    '<span class="avail"><span class="pulse"></span>' + esc(P.availability) + "</span>" +
    '<h1>' + esc(P.name) + ' <span class="l2">' + esc(P.title) + "</span></h1>" +
    '<p class="role">' + esc(P.tagline) + "</p>" +
    '<p class="lede">' + fmt(P.intro) + "</p>" +
    '<div class="actions"><a class="btn primary" href="#work">See my work →</a>' +
    '<a class="btn ghost" href="#contact">Get in touch</a></div>';

  $("stats").innerHTML = each(D.stats, function (s) {
    return '<div class="stat"><b>' + esc(s.value) + "</b><span>" + esc(s.label) + "</span></div>";
  });

  var tick = each(D.ticker, function (t) { return "<span>" + esc(t) + "</span>"; });
  $("ticker-track").innerHTML = tick + tick; // doubled for a seamless loop

  /* ---------- featured projects ---------- */
  function flow(p) {
    if (!p.architecture || !p.architecture.length) return "";
    var nodes = p.architecture.map(function (n) {
      return '<div class="node ' + esc(n.kind || "device") + '"><b>' + esc(n.title) + "</b><span>" + esc(n.sub) + "</span></div>";
    }).join('<div class="arrow" aria-hidden="true">→</div>');
    return '<div class="arch"><p class="mini">Architecture</p><div class="flow-wrap"><div class="flow">' + nodes + "</div></div>" +
      (p.architectureNote ? '<p class="arch-note">↩ ' + esc(p.architectureNote) + "</p>" : "") + "</div>";
  }
  function caseStudy(c) {
    if (!c) return "";
    return '<div class="case"><p class="mini">Case study</p>' +
      '<div class="case-row"><span class="k k1">Problem</span><p>' + fmt(c.problem) + "</p></div>" +
      '<div class="case-row"><span class="k k2">What I did</span><p>' + fmt(c.solution) + "</p></div>" +
      '<div class="case-row"><span class="k k3">Result</span><p>' + fmt(c.result) + "</p></div></div>";
  }
  function tags(list) { return '<div class="tags">' + each(list, function (t) { return '<span class="tag">' + esc(t) + "</span>"; }) + "</div>"; }
  function store(url) { return url ? '<a class="store" href="' + esc(url) + '" target="_blank" rel="noopener">View on Google Play ↗</a>' : ""; }
  function bullets(list) { return list && list.length ? "<ul>" + each(list, function (h) { return "<li>" + fmt(h) + "</li>"; }) + "</ul>" : ""; }

  $("projects").innerHTML = each(D.featured, function (p) {
    var head = '<div class="p-top"><span class="cat">' + esc(p.category) + "</span>" + icon(p.icon) + "</div>" +
      "<h3>" + esc(p.name) + '</h3><span class="org">' + esc(p.company) + "</span>";

    if (p.layout === "hero") {
      return '<article class="proj hero-proj">' +
        '<div class="p-main">' + head + "<p>" + fmt(p.summary) + "</p>" + tags(p.tags) + store(p.playStore) + "</div>" +
        '<div class="feat-grid">' + each(p.features, function (f) {
          return '<div class="feat"><b>' + esc(f.title) + "</b><span>" + fmt(f.text) + "</span></div>";
        }) + "</div>" +
        '<div class="hero-extra">' + flow(p) + caseStudy(p.caseStudy) + "</div>" +
        "</article>";
    }

    var extra = flow(p) + caseStudy(p.caseStudy);
    return '<article class="proj' + (p.layout === "wide" ? " wide" : "") + '">' + head +
      "<p>" + fmt(p.summary) + "</p>" + bullets(p.highlights) +
      (extra ? '<details class="more"><summary>Case study' + (p.architecture && p.architecture.length ? " &amp; architecture" : "") + "</summary>" + extra + "</details>" : "") +
      tags(p.tags) + store(p.playStore) + "</article>";
  });

  // a lone last card in the 2-column grid stretches to full width
  var half = D.featured.filter(function (p) { return p.layout !== "hero" && p.layout !== "wide"; });
  if (half.length % 2 === 1) {
    var cards = document.querySelectorAll("#projects .proj:not(.hero-proj):not(.wide)");
    if (cards.length) cards[cards.length - 1].classList.add("wide");
  }

  /* ---------- other apps ---------- */
  var total = 0;
  $("other-apps").innerHTML = each(D.otherApps, function (g) {
    total += g.apps.length;
    return '<details class="og-row"><summary><span class="og-co">' + esc(g.company) + '</span><span class="og-names">' +
      g.apps.map(function (a) { return esc(a.name); }).join(" · ") +
      '</span><span class="og-more">Details</span></summary><div class="ad-grid">' +
      each(g.apps, function (a) { return '<div class="ad"><b>' + esc(a.name) + "</b><span>" + fmt(a.text) + "</span></div>"; }) +
      "</div></details>";
  });
  $("other-count").textContent = total + " more apps I have built";

  /* ---------- experience & education ---------- */
  $("timeline").innerHTML = each(D.experience, function (j) {
    return '<div class="job' + (j.current ? " now" : "") + '"><div class="when">' + esc(j.dates) +
      (j.current ? '<span class="badge">CURRENT</span>' : "") + "</div><div><h3>" + esc(j.company) +
      '</h3><p class="rl">' + esc(j.role) + "</p>" + bullets(j.points) + "</div></div>";
  });
  $("education").innerHTML = each(D.education, function (e) {
    return '<div class="edu-c"><span class="yr">' + esc(e.year) + " · " + esc(e.score) + "</span><h3>" + esc(e.degree) + "</h3><p>" + esc(e.school) + "</p></div>";
  });

  /* ---------- skills ---------- */
  $("skills-grid").innerHTML = each(D.skills, function (s) {
    return '<div class="sk"><h3>' + esc(s.group) + '</h3><div class="chips">' +
      each(s.items, function (i) { return '<span class="chip">' + esc(i) + "</span>"; }) + "</div></div>";
  });

  /* ---------- contact ---------- */
  $("contact-text").textContent = P.contactText;
  var links =
    '<div class="cline"><div><small>Email</small><span class="val" id="email">' + esc(P.email) + "</span></div>" +
    '<button class="copy" id="copy-email" type="button">Copy</button></div>' +
    '<a class="cline" href="' + esc(P.linkedin) + '" target="_blank" rel="noopener"><div><small>LinkedIn</small><span class="val">' +
    esc(P.linkedinLabel) + '</span></div><span class="val go">↗</span></a>';
  if (P.github) {
    links += '<a class="cline" href="' + esc(P.github) + '" target="_blank" rel="noopener"><div><small>GitHub</small><span class="val">' +
      esc(P.github.replace(/^https?:\/\//, "")) + '</span></div><span class="val go">↗</span></a>';
  }
  $("contact-links").innerHTML = links;
  $("footer-name").textContent = P.name + " · Senior " + P.title;
  $("year").textContent = new Date().getFullYear();

  $("copy-email").addEventListener("click", function () {
    var btn = this, el = $("email");
    function done(msg) { btn.textContent = msg; setTimeout(function () { btn.textContent = "Copy"; }, 1800); }
    function fallback() {
      var r = document.createRange(); r.selectNodeContents(el);
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); done("Selected");
    }
    try { navigator.clipboard.writeText(el.textContent).then(function () { done("Copied"); }, fallback); }
    catch (e) { fallback(); }
  });
})();
