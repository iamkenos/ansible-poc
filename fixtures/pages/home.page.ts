import { PageObject } from "@iamkenos/kyoko";
import { Header } from "~/fixtures/components/header.component";
import type { Parameters } from "./home.steps";

export class HomePage extends PageObject<Parameters> {
  url = "/";
  title = "Services Australia";

  header = () => this.page.component(Header);
}
