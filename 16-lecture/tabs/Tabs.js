const NAV_ITEM_CLASS = 'nav-item';
const NAV_ITEM_ACTIVE_CLASS = 'nav-item-active';
const CONTENT_ITEM_CLASS = 'content-item';
const CONTENT_ITEM_ACTIVE_CLASS = 'content-item-active';


class Tabs {
  static ACTIVE_TAB_INDEX_DEFAULT = 0;

  constructor(rootEl, defaultActive = Tabs.ACTIVE_TAB_INDEX_DEFAULT) {
    const [navEl, contentEl] = rootEl.children;
    this.rootEl = rootEl;
    this.navElements = Array.from(navEl.children);
    this.contentElements = Array.from(contentEl.children);

    this.bindStyles()
    this.bindEvents()
    this.setActiveTab(defaultActive)
  }

  bindStyles() {
    this.navElements.forEach((navElement) => {
      navElement.classList.add(NAV_ITEM_CLASS);
    })
    this.contentElements.forEach((contentElement) => {
      contentElement.classList.add(CONTENT_ITEM_CLASS);
    })
  }

  bindEvents() {
    this.rootEl.addEventListener('click', e => this.onRootElClick(e))
  }

  onRootElClick(e) {
    if (e.target.classList.contains(NAV_ITEM_CLASS)) {
      const clickedTabIndex = this.getNavItemIndex(e.target);

      if (this.activeTabIndex !== clickedTabIndex) {
        this.hideActiveTab()
        this.setActiveTab(clickedTabIndex);
      }
    }
  }

  hideActiveTab() {
    this.navElements[this.activeTabIndex].classList.remove(NAV_ITEM_ACTIVE_CLASS);
    this.contentElements[this.activeTabIndex].classList.remove(CONTENT_ITEM_ACTIVE_CLASS);
  }

  setActiveTab(index) {
    this.activeTabIndex = index;
    this.navElements[index].classList.add(NAV_ITEM_ACTIVE_CLASS);
    this.contentElements[index].classList.add(CONTENT_ITEM_ACTIVE_CLASS);
  }

  getNavItemIndex(navEl) { // dom object
    // for (let i = 0; i < this.navElements.length; i++) {
    //   const carrentNavEl = this.navElements[i];
    //
    //   if (carrentNavEl === navEl) {
    //     return i;
    //   }
    // }

    return this.navElements.indexOf(navEl);
  }
}