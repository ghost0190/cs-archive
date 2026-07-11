(() => {
  document.documentElement.classList.add("js");
  const modified = new Date(document.lastModified);
  const syncLabel = Number.isNaN(modified.getTime())
    ? "UNKNOWN"
    : `${modified.getFullYear()}.${String(modified.getMonth() + 1).padStart(2, "0")}`;
  document.querySelectorAll("[data-build-date]").forEach((item) => {
    item.textContent = syncLabel;
  });
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const revealItems = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  }

  if (!reduceMotion && matchMedia("(pointer: fine)").matches) {
    document.addEventListener("pointermove", (event) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    }, { passive: true });
  }

  const search = document.querySelector("#course-search");
  const filters = [...document.querySelectorAll("[data-filter]")];
  const courses = [...document.querySelectorAll(".course-tile, .course-entry")];
  const groups = [...document.querySelectorAll(".directory-group")];
  const count = document.querySelector(".result-count strong");
  const empty = document.querySelector(".empty-state");
  let activeFilter = "all";

  const filterCourses = () => {
    const query = search?.value.trim().toLocaleLowerCase("zh-CN") ?? "";
    let visible = 0;
    courses.forEach((course) => {
      const matchesText = !query || course.textContent.toLocaleLowerCase("zh-CN").includes(query);
      const matchesFilter = activeFilter === "all" || course.dataset.category.split(" ").includes(activeFilter);
      course.hidden = !(matchesText && matchesFilter);
      if (!course.hidden) visible += 1;
    });
    if (count) count.textContent = String(visible).padStart(2, "0");
    if (empty) empty.hidden = visible !== 0;
    groups.forEach((group) => {
      group.hidden = ![...group.querySelectorAll(".course-entry")].some((course) => !course.hidden);
    });
  };

  search?.addEventListener("input", filterCourses);
  filters.forEach((button) => button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filters.forEach((item) => item.classList.toggle("active", item === button));
    filterCourses();
  }));

  const initialQuery = new URLSearchParams(location.search).get("q");
  if (search && initialQuery) {
    search.value = initialQuery;
    filterCourses();
  }
})();
