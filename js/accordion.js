function toggleAccordion(event) {
  const accordionComponent = event.target.closest(".accordion-component");
  accordionComponent.classList.toggle("is-opened");
}
