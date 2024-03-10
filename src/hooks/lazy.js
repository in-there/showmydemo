function DefineLazy(app) {
  app.directive("lazy", {
    mounted(el, binding) {
      const observer = new IntersectionObserver(([{ intersectionRatio }]) => {
        if (intersectionRatio > 0) {
          const img = el.children[1];
          const loading = el.children[0];
          img.src = binding.value;
          img.onload = () => {
            img.classList.remove("fade");
            loading.classList.add("hide");
          };
          observer.unobserve(el);
        }
      });
      observer.observe(el);
    },
    updated(el, binding) {
      console.log("Lazy updated", el, binding.value);
      const img = el.children[1];
      img.classList.remove("fade");
    },
  });
}

export default DefineLazy;
