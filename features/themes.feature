Feature: Themes

  Background:
    Given I am on the "home" page

  Scenario Outline: S01: Switch to theme: <theme>
    When the header component "<theme>" theme is clicked
    Then the "home" page theme should be "<theme>"

    Examples:
      | theme |
      | light |
      | dark  |
