const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'z6uc2h',
  // Dosya değişikliklerini izleme kapalı
  e2e: {
     watchForFileChanges: false,
    // Test dosyalarının konumu
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    
    
    // Base URL - test ettiğiniz uygulamanın ana adresi
    baseUrl: 'http://bis.test11.turib.com.tr/',
    
    // Viewport boyutları
    viewportWidth: 1920,
    viewportHeight: 1080,
    
    // Test timeout süreleri
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    requestTimeout: 10000,
    
    // Video ve screenshot ayarları
    video: true,
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    
    // Test retry ayarları
    retries: {
      runMode: 2,    // CI/CD'de 2 kez retry
      openMode: 0    // Geliştirme modunda retry yok
    },
    
    // Browser ayarları
    chromeWebSecurity: false, // CORS sorunları için
    
    // Test isolation - her test arasında temizlik
    testIsolation: true,
    
    // Dosya değişikliklerini izleme
    //watchForFileChanges: true,
    
    // Test raporları
    reporter: 'spec',

    env: {
      // Environment değişkenleri
      TEST_USER: 'KNN_KENAN_KUNC_2',
      TEST_PASSWORD: '123456'
    },
    
    setupNodeEvents(on, config) {
      // Plugin'ler ve özel event'ler buraya
      
      // Task'lar - Node.js kodlarını test içinden çalıştırmak için
      on('task', {
        log(message) {
          console.log(message)
          return null
        }
      })

      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--incognito')
          return launchOptions
        }
      })
      
      
    },
  },
  
  // Component testing ayarları (ihtiyaç halinde)
  component: {
    devServer: {
      framework: 'react', // veya 'vue', 'angular' vs.
      bundler: 'webpack', // veya 'vite'
    },
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
  },
  
  // Global ayarlar
  env: {
    // Environment değişkenleri
    // Bu değerlere Cypress.env('variableName') ile erişebilirsiniz
  },
  
  // Dosya yolları
  fixturesFolder: 'cypress/fixtures',
  
  // Ekstra ayarlar
  numTestsKeptInMemory: 50,
  experimentalStudio: true, // Test Studio için
  experimentalWebKitSupport: false // WebKit desteği için
})