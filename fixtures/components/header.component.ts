import { Component, ExpectedConditionKwargs, ExpectedConditionOptions, LocatorConditions } from "@iamkenos/kyoko";

export class Header extends Component {

  constructor() {
    super("//header");
  }

  themeSelector = () => this.locator("//button[@role='switch']").first();
  themeSelectorBtn = (theme: string) => this.themeSelector().locator(`//*[@data-lit-dark-mode-toggle-button='${theme}']`);

  async selectTheme(theme: string) {
    await this.themeSelectorBtn(theme).first().click()
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
