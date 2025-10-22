import { defineParameterType, When } from "@cucumber/cucumber";
import { Header } from "./header.component";

import type { Context } from "~/fixtures/pages/home.steps";

defineParameterType({
  name: "header_component",
  regexp: /header component/,
  transformer(this: Context) { return this.page.component(Header); }
});

When(
  "the {header_component} {input_string} theme is clicked",
  async function(this: Context, component: Header, theme: string) {
    await component.selectTheme(theme);
  }
);
