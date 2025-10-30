import { When } from "@cucumber/cucumber";
import { Context } from "@iamkenos/kyoko";

import { SearchPage } from "./search.page";

When(
  "the {input_string} category filter is selected from the {page_object} page search form",
  async function (this: Context, category: string, page: SearchPage) {
    await page.selectCategoryFilter(category);
  }
);

When(
  "the {input_string} article is clicked from the {page_object} page search results",
  async function (this: Context, article: string, page: SearchPage) {
    await page.searchResult(article).scrollIntoView();
    await page.searchResult(article).click();
  }
);
