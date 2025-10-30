import { HomePage } from "../home.page";

export class SearchPage extends HomePage {
  override url = "/search";
  override title = "Search - Services Australia";

  form = () => this.page.locator("//form");
  categoryFilter = (category: string) => this.form().locator("//*[contains(@class,'group rounded')]//label", { hasText: category });

  searchResults = () => this.page.locator("//self::*[child::*[contains(@class,'result-wrapper')]]");
  searchResult = (title: string) => this.page.locator(`//h3[text()='${title}']`);

  async selectCategoryFilter(category: string) {
    await this.categoryFilter(category).click();
  }
}
