import { defineParameterType, When } from "@cucumber/cucumber";
import { Context } from "@iamkenos/kyoko";

import { Header } from "./header.component";

defineParameterType({
  name: "header_component",
  regexp: /header/,
  transformer(this: Context) { return this.page.component(Header); },
});

When(
  "the {input_string} theme is selected from the {header_component} theme selector",
  async function (this: Context, theme: string, component: Header) {
    await component.selectTheme(theme);
  }
);

When(
  "the {input_string} query string is searched from the {header_component} search bar",
  async function (this: Context, query: string, component: Header) {
    await component.search(query);
  }
);
