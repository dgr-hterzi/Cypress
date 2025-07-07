import emirGiris from '../pages/emirgiris.js';


describe('This test scenario for only Cypress demonstration at TURIB BIS application', () => {
  const eg = new emirGiris();

  beforeEach(() => {
    // Her testten önce yapılacak işlemler
    cy.log('Starting a new test')
    cy.clearCookies() // Çerezleri temizle
    cy.clearLocalStorage() // LocalStorage'u temizle
    cy.visit('http://bis.test11.turib.com.tr/giris') // Test sayfasına git
    cy.get('[data-testid="formItem-userName"]').type('MHR_MUHARREM_NIRGIZ') // Kullanıcı adını gir
    cy.get('[data-testid="formItem-password"]').type('123456')
    cy.get('[data-testid="formActionSubmit"]').click()
  })
  it('Check Emir Giriş Dialog', () => {
    cy.wait(5000) // Sayfanın yüklenmesi için bekle
    cy.get('body').find('.css-1v03ed0').click()
    cy.contains('Emir Giriş').click()
    cy.get('[data-testid="dialog-orderEntry"]').should('be.visible') // Emir Giriş dialogunun görünür olduğunu kontrol et
    cy.get('[data-testid="tab-buy"]').should('have.text', 'Alış') // Alış sekmesinin metnini kontrol et
    cy.get('[data-testid="tab-sell"]').should('have.text', 'Satış') // Satış sekmesinin metnini kontrol et
    cy.get('body').should('not.contain', 'Limit')
    cy.get('body').should('not.contain', 'Gün')
    cy.get('body').should('not.contain', 'Son Fiyat')
    cy.get('body').should('not.contain', 'Değişim')
    cy.get('body').should('not.contain', 'Önceki Gün Uzlaşma Fiyatı')
    cy.selectFromDropdown('.css-1tvux47 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root', 'FBEK42') // Piyasa seçeneğini dropdown'dan seç
    cy.get('body').contains('Son Fiyat')
    cy.get('body').contains('Değişim')
    cy.get('body').contains('Önceki Gün Uzlaşma Fiyatı')
    cy.get('[data-testid="formItem-orderType"]').should('have.value','Limit')
    cy.get('[data-testid="formItem-timeInForce"]').should('have.value','Gün')
    cy.get('.css-gcbejb > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root').click() // Piyasa seçeneğini dropdown'dan seç
    cy.get('[data-testid="formItem-price"]').should('have.attr','value','').type('2')
    cy.get('[data-testid="formItem-orderQty"]').should('have.attr','value','').type('1000')
    
    eg.getHesapField().type('2234');
    cy.wait(250)
    eg.getHesapField().click().type('{downarrow}{enter}')
    cy.get('[data-testid="action-submit"]').should('have.text', 'Gönder') // Gönder butonunun metnini kontrol et
    cy.get('[data-testid="action-submit"]').click() // Gönder butonuna tıkla
    cy.get('.MuiDialog-container > .MuiPaper-root > .MuiDialogContent-root').should('be.visible')

  })
})