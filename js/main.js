(() => {
  // ========================================================= HELPERS - START =========================================================
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [
    ...root.querySelectorAll(selector),
  ];
  // ========================================================= HELPERS - END =========================================================

  // =========================================================
  // NAVIGATION – START
  // =========================================================

  const toggle = $(".nav-toggle");
  const links = $(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");

      toggle.setAttribute("aria-expanded", String(open));

      toggle.innerHTML = open
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });

    $$(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("open");

        toggle.setAttribute("aria-expanded", "false");

        toggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });

    document.addEventListener("click", (event) => {
      const clickedInside =
        links.contains(event.target) || toggle.contains(event.target);

      if (!clickedInside && links.classList.contains("open")) {
        links.classList.remove("open");

        toggle.setAttribute("aria-expanded", "false");

        toggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  }

  // =========================================================
  // NAVIGATION – END
  // =========================================================

  // ========================================================= CONFIGURATOR STATE - START =========================================================
  const modal = $("#configModal");
  let base = "Döner";
  let protein = "Dönerfleisch";
  let sauce = "Knoblauchsoße";

  const checked = (selector) =>
    $$(selector + " input:checked").map((input) => input.value);

  function update() {
    const extras = checked(".checks").filter((value) =>
      ["Weichkäse", "Jalapeños", "Halloumi", "Extra Fleisch"].includes(value),
    );
    const menu = [];
    const all = checked(".checks");
    const normal = all.filter((value) => !extras.includes(value));

    if (normal.length) menu.push(normal.join(", "));
    menu.push(sauce);
    if (extras.length) menu.push("Extras: " + extras.join(", "));
    if ($("#drinkUp")?.checked) menu.push("Getränk dazu");
    if ($("#sideUp")?.checked) menu.push("Beilage dazu");

    if ($("#summary")) {
      $("#summary").textContent = `${base} · ${protein} · ${menu.join(" · ")}`;
    }
  }

  function open(kind) {
    base = kind;
    $("#configTitle").textContent = kind + " konfigurieren";
    modal?.classList.add("open");
    document.body.classList.add("modal-open");
    update();
  }

  function close() {
    modal?.classList.remove("open");
    document.body.classList.remove("modal-open");
  }
  // ========================================================= CONFIGURATOR STATE - END =========================================================

  // ========================================================= CONFIGURATOR EVENTS - START =========================================================
  $$(".builder button").forEach((button) =>
    button.addEventListener("click", () => open(button.dataset.config)),
  );
  $$("[data-close]").forEach((element) =>
    element.addEventListener("click", close),
  );
  $$("#proteins button").forEach((button) =>
    button.addEventListener("click", () => {
      $$("#proteins button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      protein = button.dataset.value;
      update();
    }),
  );
  $$("#sauces button").forEach((button) =>
    button.addEventListener("click", () => {
      $$("#sauces button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      sauce = button.dataset.value;
      update();
    }),
  );
  // ========================================================= CONFIGURATOR EVENTS - END =========================================================

  // ========================================================= KEYBOARD EVENTS - START =========================================================
  $$(".panel input").forEach((input) =>
    input.addEventListener("change", update),
  );
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
  // ========================================================= KEYBOARD EVENTS - END =========================================================
})();
