Feature: Search

  Scenario Outline: S01: Article search: <article>
    Given the "home" page is opened
    When the "<query_string>" query string is searched from the header search bar
    And the "<article>" article is clicked from the "search" page search results
    Then the "<article>" content should be displayed on the "article" page

    Examples:
      | query_string | article           |
      | income       | Employment income |

  Scenario Outline: S02: Article search in <category>
    Given the "home" page is opened
    When the "<query_string>" query string is searched from the header search bar
    And the "<category>" category filter is selected from the "search" page search form
    And the "<article>" article is clicked from the "search" page search results
    Then the "<article>" content should be displayed on the "article" page

    Examples:
      | category             | query_string        | article                                |
      | Individuals          | age pension         | How to claim Age Pension               |
      | Health professionals | medicare incentives | MyMedicare incentives                  |
      | Businesses           | employer reporting  | Employer reporting service             |
      | Community group      | volunteering        | Providing documents for voluntary work |
