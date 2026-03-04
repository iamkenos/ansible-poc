import { Component, ExpectedConditionKwargs, ExpectedConditionOptions, LocatorConditions } from "@iamkenos/kyoko";

export class Header extends Component {

  constructor() {
    super("//header");
  }

  themeSelector = () => this.locator("//button[@role='switch']").first();
  themeSelectorBtn = (theme: string) => this.themeSelector().locator(`//*[@data-lit-dark-mode-toggle-button='${theme}']`);

  searchToggle = () => this.locator("//*[@id='lit-search-toggle']");
  searchModal = () => this.page().locator("//*[@id='lit-search-modal']");
  searchInput = () => this.searchModal().locator("//*[@name='search']");
  searchBtn = () => this.searchModal().locator("//button", { hasText: "Search" });

  async selectTheme(theme: string) {
    await this.themeSelectorBtn(theme).first().click()
  }

  async search(query: string) {
    await this.searchToggle().click();
    await this.searchInput().fill(query);
    await this.searchBtn().click();
  }

  override expect(options?: ExpectedConditionOptions) {
    return new HeaderConditions(this, options);
  }
}



class HeaderConditions extends LocatorConditions<Header> {

  themeEnabled(theme: string, kwargs?: ExpectedConditionKwargs) {
    return this.addCondition(this.locator.themeSelector().expect().attributeEquals("aria-checked", theme === "dark" ? "true" : "false", kwargs));
  }
}
