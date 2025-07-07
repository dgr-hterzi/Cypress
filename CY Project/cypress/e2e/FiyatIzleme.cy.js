

describe('This test scenario for only Cypress demonstration at TURIB BIS application', () => {
  
    beforeEach(() => {
    // Her testten önce yapılacak işlemler
    cy.log('Starting a new test')
    cy.clearCookies() // Çerezleri temizle
    cy.clearLocalStorage() // LocalStorage'u temizle
    cy.visit('http://bis.test11.turib.com.tr/giris') // Test sayfasına git
    cy.get('[data-testid="formItem-userName"]').type(Cypress.env('TEST_USER')) // Kullanıcı adını gir
    cy.get('[data-testid="formItem-password"]').type(Cypress.env('TEST_PASSWORD'))
    cy.get('[data-testid="formActionSubmit"]').click()
  })

  it('Check Fiyat İzleme ve Sözleşme Bilgiler Kontrol', () => {
    cy.wait(5000) // Sayfanın yüklenmesi için bekle
    cy.get('body').find('.css-1v03ed0')
    cy.get('.flexlayout__tab_button_content').should('have.text', 'Fiyat İzleme')
    cy.get('.ag-header-row-column-group > .ag-column-first').should('contain.text', 'GENEL BİLGİLER')
    cy.get('[col-id="1_0"]').should('contain.text', 'EMİR İSTATİSTİKLERİ')
    cy.get('body').should('contain', 'Sözleşme')
    cy.get('body').should('contain', 'Piyasa')
    cy.get('body').should('contain', 'Pazar')
    cy.get('body').should('contain', 'Pazar Alt Segmenti')
    cy.get('body').should('contain', 'Durum')
    cy.get('body').should('contain', 'Piyasa Seans Durumu')
    cy.fixture('sozlesme.json').then((sozlesme) => {
      cy.get('.ag-row-even > .ag-column-first').should('have.text', sozlesme.sozlesme)
      cy.get('.ag-row-even > [col-id="marketPlaceCode"]').should('have.text', sozlesme.piyasa)
      cy.get('.ag-row-even > [col-id="marketSegmentCode"]').should('have.text', sozlesme.pazar)
      cy.get('.ag-row-even > [col-id="marketSubSegmentCode"]').should('have.text', sozlesme.pazarAltSegmenti)
      cy.get('.ag-row-even > [col-id="tradingStatus.description"]').should('have.text', sozlesme.durum)
      cy.get('.ag-row-even > [col-id="actualTradingSessionCode"]').should('have.text', sozlesme.piyasaSeansDurumu)
    })
    //Sözleşme aksiyon menüsündeki öğeleri kontrol et
    cy.get('[data-testid="actions"] > .MuiButtonBase-root').click()
    cy.get('[data-testid="tableMenuAction-viewInstrumentDetail"]').should('contain.text', 'Sözleşme Bilgi Ekranı') 
    cy.get('[data-testid="tableMenuAction-viewPriceDepth"]').should('contain.text', 'Fiyat Derinlik') 
    cy.get('[data-testid="tableMenuAction-viewOrderDepth"]').should('contain.text', 'Emir Derinlik') 
    cy.get('[data-testid="tableMenuAction-orderEntryBuy"]').should('contain.text', 'Alış') 
    cy.get('[data-testid="tableMenuAction-orderEntrySell"]').should('contain.text', 'Satış')
    cy.realPress('{esc}') // Aksiyon menüsünü kapat
    cy.get('[data-testid="tableMenuAction-viewInstrumentDetail"]').should('not.be.visible')
    

    cy.get('body').find('.css-1v03ed0').click()
    cy.xpath("//button[contains(., 'VADELİ')]").click()
    cy.get('body').should('contain', 'Sözleşme Bilgi Ekranı')
    cy.get('body').should('contain', 'Fiyat Derinlik')
    cy.get('body').should('contain', 'Emir Derinlik')
    cy.contains('Sözleşme Bilgi Ekranı').click()
    cy.get('.MuiDialogContent-root').should('be.visible')
    cy.get('.Mui-selected').should('contain.text', 'GENEL ÖZELLİKLER')
    cy.get('.MuiTabs-flexContainer > :nth-child(2)').should('contain.text', 'SEANS BİLGİLERİ')
    cy.get('.MuiTabs-flexContainer > :nth-child(3)').should('contain.text', 'FİYAT LİMİTLERİ')
    cy.get('.MuiTabs-flexContainer > :nth-child(4)').should('contain.text', 'DAYANAK BÖLGE - İL')
    cy.get('.MuiTabs-flexContainer > :nth-child(5)').should('contain.text', 'VADELİ - SPOT DAYANAK')
    cy.get('[data-testid="formItem-instrument"]').click()
    cy.get('[data-testid="formItem-instrument"]').type('FBEK42{downarrow}{enter}') // Sözleşme kodunu gir
    cy.checkSozlesmeGrid(0,'ISIN', 0, 'FBEK42111111')
    cy.checkSozlesmeGrid(1,'Sözleşme', 1, 'FBEK42')
    cy.checkSozlesmeGrid(2,'Durum', 2, 'Aktif')
    cy.checkSozlesmeGrid(3,'Vade Tarihi', 3, '22.11.2024')
    cy.checkSozlesmeGrid(4,'Borsa', 4, 'TÜRİB')
    cy.checkSozlesmeGrid(5,'Pazar', 5, 'Vadeli ELUS Hububat Pazarı')
    cy.checkSozlesmeGrid(6,'Pazar Alt Segmenti', 6, 'VADELI_ELUS_BUGDAY_ALT_PAZARI')
    cy.checkSozlesmeGrid(7,'Fiziksel Teslimat Tarihi', 7, '01.01.1970')
    cy.checkSozlesmeGrid(8,'Vade Sonu Entegre Fiyat Kodu', 8, '-')
    cy.checkSozlesmeGrid(9,'Teorik Fiyat', 9, '3,2222')
    cy.checkSozlesmeGrid(10,'Dayanak Varlık', 10, 'Buğday Ekmeklik 2. sınıf')
    cy.checkSozlesmeGrid(11,'Dayanak İlişkilendirme Türü', 11, 'ELUS')
    cy.checkSozlesmeGrid(12,'Uzlaşma Yöntemi', 12, 'Nakdi')
    cy.checkSozlesmeGrid(13,'Uzlaşma Fiyatı', 13, '2,2222')
    cy.checkSozlesmeGrid(14,'Uzlaşma Fiyatı Hesaplama Tarihi', 14, '17.06.2025')
  })

  afterEach(() => {
    // Her testten sonra yapılacak işlemler
    cy.get('.MuiToolbar-root > :nth-child(8)').click()
    cy.get('.css-1xlzx9v > :nth-child(6)').should('contain.text', 'Çıkış Yap').click()
    cy.get('.MuiDialogActions-root > .MuiButton-outlined > .MuiBox-root').should('contain.text', 'Kaydetme').click()
    cy.log('Test completed')
  })


})