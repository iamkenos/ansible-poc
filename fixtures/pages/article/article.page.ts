import { HomePage } from "../home.page";

export class ArticlePage extends HomePage {
  override url = "/";
  override title = "";

  breadcrumbs = () => this.page.locator("//*[@id='lit-content-above']");
  breadcrumb = (item: string) => this.breadcrumbs().locator(`//li[normalize-space()="${item}"]`);
  content = () => this.page.locator("//main");
}
