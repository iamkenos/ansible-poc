import { PageObject } from "@iamkenos/kyoko";
import { Header } from "~/fixtures/components/header.component";

export class HomePage extends PageObject {
  url = "/";
  title = "Services Australia";

  header = () => this.page.component(Header);
}
