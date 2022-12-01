class Accordion {
  static FIRST_ACCORDION_ITEM = 0;
  static ITEM_CLASS = 'accordion-item';
  static HEADER_CLASS = 'accordion-item-header';
  static CONTENT_CLASS = 'accordion-item-content';
  static OPEN_CLASS = 'open';

  constructor(rootEl, defaultOpenIndex = Accordion.FIRST_ACCORDION_ITEM) {
    this.rootEl = rootEl;
    this.accordionItems = Array.from(this.rootEl.children); // HTMLCollection -> Array

    this.bindStyles();
    this.bindEvents();
    this.openContentByIndex(defaultOpenIndex);
  }

  bindStyles() {
    this.accordionItems.forEach((accordionItem) => {
      const [header, content] = accordionItem.children;

      accordionItem.classList.add(Accordion.ITEM_CLASS);
      header.classList.add(Accordion.HEADER_CLASS);
      content.classList.add(Accordion.CONTENT_CLASS);
    })
  }

  bindEvents() {
    // this.rootEl.addEventListener('click', e => this.onRootElClick(e));
    this.rootEl.addEventListener('click', this.onRootElClick.bind(this))
  }

  onRootElClick(e) {
    const headerEl = e.target.closest('.' + Accordion.HEADER_CLASS);

    if (headerEl) {
      const contentEl = this.getContentEl(e.target);
      const contentOpenEl = this.getOpenContentEl(e.target);

      if (contentOpenEl && contentEl !== contentOpenEl) {
        this.contentClose(contentOpenEl);
      }

      this.contentToggle(contentEl);
    }
  }

  getContentEl(el) {
    const accordionItemEl = el.closest('.' + Accordion.ITEM_CLASS);

    return accordionItemEl.querySelector('.' + Accordion.CONTENT_CLASS);
  }

  contentToggle(contentEl) {
    contentEl.classList.toggle(Accordion.OPEN_CLASS);
  }

  contentClose(contentEl) {
    contentEl.classList.remove(Accordion.OPEN_CLASS);
  }

  getOpenContentEl() {
    return this.rootEl.querySelector('.' + Accordion.OPEN_CLASS);
  }

  openContentByIndex(index) {
    const contentEl = this.getContentEl(this.accordionItems[index]);

    this.contentToggle(contentEl);
  }
}
