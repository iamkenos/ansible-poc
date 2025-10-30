import { Then } from "@cucumber/cucumber";
import { Context } from "@iamkenos/kyoko";

import { ArticlePage } from "./article.page";

Then(
  "the {input_string} content should be displayed on the {page_object} page",
  async function (this: Context, article: string, page: ArticlePage) {
    await page.breadcrumbs().expect().exists().poll();
    await page.content().expect().exists().poll();
    await this.page.expect().titleContains(article).poll();
  }
);
