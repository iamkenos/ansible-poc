Feature: Themes

  Scenario Outline: S01: Switch to <theme> theme
    Given the "home" page is opened
    When the "<theme>" theme is selected from the header theme selector
    Then the "home" page theme should be "<theme>"

    Examples:
      | theme |
      | light |
      | dark  |
