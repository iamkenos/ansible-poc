import { defineParameterType, Then } from "@cucumber/cucumber";
import { Context as BaseContext } from "@iamkenos/kyoko";

import { HomePage } from "./home.page";

export interface Parameters {
}

/** Extend the `Context` type so you can access inherited properties from `this`. */
export interface Context extends BaseContext<Parameters> {
  homePage: HomePage;
}

Then(
  "the {page_object} page theme {should_or_should_not} be {input_string}",
  async function(this: Context, page: HomePage, not: boolean, theme: string) {
    await page.header().expect().themeEnabled(theme, { not }).poll();
  }
);
