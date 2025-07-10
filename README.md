# Cypress Otomasyon Testleri
Bu depo, modern web uygulamaları için uçtan uca (E2E) test otomasyonları yazmak üzere tasarlanmış güçlü bir araç olan Cypress kullanılarak geliştirilmiş otomasyon testlerini içerir. Bu proje, web uygulamalarının kullanıcı arayüzü ve işlevselliğinin güvenilirliğini sağlamayı hedefler.

# 🚀 Başlarken
Bu projeyi yerel ortamınızda kurmak ve çalıştırmak için aşağıdaki adımları izleyin.

# Ön Koşullar
Node.js (v16 veya üzeri önerilir)

npm (Node.js ile birlikte gelir) veya Yarn

# Kurulum
Depoyu klonlayın:

Bash

git clone https://github.com/dgr-hterzi/Cypress.git
cd Cypress
Bağımlılıkları yükleyin:

Bash

npm install
# veya
yarn install
🧪 Testleri Çalıştırma
Testleri farklı modlarda çalıştırabilirsiniz:

Cypress Test Runner ile Çalıştırma (Etkileşimli Mod)
Bu mod, testleri adım adım izlemenize ve hata ayıklamanıza olanak tanır.

Bash

npx cypress open
Bu komut Cypress Test Runner'ı başlatacak ve test dosyalarınızı (specs) seçebileceğiniz bir arayüz açacaktır.

Komut Satırı Üzerinden Çalıştırma (Headless Mod)
Testleri başsız (headless) modda, yani tarayıcı arayüzü olmadan çalıştırmak için kullanışlıdır. CI/CD ortamları için idealdir.

Bash

npx cypress run
Belirli bir testi çalıştırmak için:

Bash

npx cypress run --spec "cypress/e2e/example.cy.js"
Tarayıcı Seçerek Çalıştırma
Testleri belirli bir tarayıcıda çalıştırmak için --browser bayrağını kullanın:

Bash

npx cypress run --browser chrome
# veya
npx cypress run --browser firefox
# veya
npx cypress run --browser edge
📂 Proje Yapısı
Cypress projemizin temel dizin yapısı şöyledir:

Cypress/
├── cypress/
│   ├── e2e/              # Uçtan uca test dosyaları
│   │   └── *.cy.js
│   ├── fixtures/         # Test verileri (JSON, CSV vb.)
│   │   └── example.json
│   ├── support/          # Özel Cypress komutları ve global ayarlar
│   │   ├── commands.js
│   │   └── e2e.js
│   └── videos/           # Test çalıştırmalarının videoları (otomatik oluşturulur)
├── node_modules/         # Yüklü bağımlılıklar
├── cypress.config.js     # Cypress yapılandırma dosyası
├── package.json          # Proje bağımlılıkları ve script'ler
└── README.md             # Bu dosya
🤝 Katkıda Bulunma
Katkılarınız her zaman açığız! Eğer bir hata bulursanız veya bir özellik eklemek isterseniz, lütfen aşağıdaki adımları izleyin:

Depoyu çatallayın (fork).

Yeni bir dal (branch) oluşturun: git checkout -b feature/your-feature-name veya bugfix/your-bug-fix-name.

Değişikliklerinizi yapın ve commit edin.

Dalı orijinal depoya geri gönderin (push).

Bir Çekme İsteği (Pull Request) oluşturun.

📄 Lisans
Bu proje MIT Lisansı altında lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasına bakın.
