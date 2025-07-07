Cypress.Commands.add('selectFromDropdown', (dropdownSelector, optionText) => {
  cy.get(dropdownSelector).click(); // Dropdown'u aç
  cy.get('ul[role="listbox"] li')  // Dropdown içindeki seçenekler
    .contains(optionText)          // Metni içeren elementi bul
    .click();                      // Seçimi yap
});


Cypress.Commands.add('checkSozlesmeGrid', (column1, column1Text, column2, column2Text) => {
cy.get('[data-testid="grid-general"] > [style="height: 100%;"] > .ag-root-wrapper > .ag-root-wrapper-body > .ag-root > .ag-body > .ag-body-viewport > .ag-center-cols-viewport > .ag-center-cols-container > [row-index="' + column1 + '"] > .ag-column-first').should('contain.text', column1Text)
cy.get('[data-testid="grid-general"] > [style="height: 100%;"] > .ag-root-wrapper > .ag-root-wrapper-body > .ag-root > .ag-body > .ag-body-viewport > .ag-center-cols-viewport > .ag-center-cols-container > [row-index="' + column2 + '"] > .ag-column-last').should('contain.text', column2Text)
cy.log('Grid kontrolü başarılı: ' + column1Text + ' ve ' + column2Text + ' değerleri doğrulandı.')
})

