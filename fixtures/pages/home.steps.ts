import { Then, Given } from "@cucumber/cucumber";
import { Context } from "@iamkenos/kyoko";

import { HomePage } from "./home.page";

Given(
  "the {page_object} page is opened",
  async function (this: Context, page: HomePage) {
    await page.navigate();
  }
);

Then(
  "the {page_object} page theme {should_or_should_not} be {input_string}",
  async function (this: Context, page: HomePage, not: boolean, theme: string) {
    await page.header().expect().themeEnabled(theme, { not }).poll();
  }
);
