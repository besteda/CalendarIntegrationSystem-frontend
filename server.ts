import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr'; // Angular Universal için gerekli olan CommonEngine
import express from 'express'; // Express framework'ünü kullanacağımızı belirtiyoruz
import { fileURLToPath } from 'node:url'; // Dosya yolunu çözmek için gerekli olan URL modülü
import { dirname, join, resolve } from 'node:path'; // Dosya yollarını işlemek için gerekli olan path modülü
import bootstrap from './src/main.server'; // Angular uygulamasını başlatan bootstrap fonksiyonu, proje yapısına göre düzenleyin

// Express uygulamasını dış dünya ile paylaşmak için bir fonksiyon oluşturuyoruz
export function app(): express.Express {
  const server = express(); // Express uygulamasını oluşturuyoruz
  const serverDistFolder = dirname(fileURLToPath(import.meta.url)); // Sunucu dağıtım klasörünün yolu
  const browserDistFolder = resolve(serverDistFolder, '../browser'); // Tarayıcı dağıtım klasörünün yolu
  const indexHtml = join(serverDistFolder, 'index.server.html'); // Sunucu tarafı index.html dosyasının yolu

  const commonEngine = new CommonEngine(); // Angular Universal için CommonEngine nesnesini oluşturuyoruz

  server.set('view engine', 'html'); // View motorunu HTML olarak ayarlıyoruz
  server.set('views', browserDistFolder); // Görünümlerin klasörünü tarayıcı dağıtım klasörü olarak ayarlıyoruz

  // Statik dosyaları /browser klasöründen sunuyoruz
  server.get('**', express.static(browserDistFolder, {
    maxAge: '1y', // Önbellek süresi 1 yıl olarak ayarlanmış
    index: 'index.html', // İndex dosyası olarak index.html kullanılıyor
  }));

  // Tüm normal rotaları Angular motoru ile işliyoruz
  server.get('**', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req; // İstek bilgilerini alıyoruz

    commonEngine
      .render({
        bootstrap, // Angular uygulamasını başlatan fonksiyon
        documentFilePath: indexHtml, // HTML dosyasının yolu
        url: `${protocol}://${headers.host}${originalUrl}`, // İstek URL'si
        publicPath: browserDistFolder, // Genel yol, tarayıcı dağıtım klasörü
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }], // Angular için sağlayıcılar
      })
      .then((html) => res.send(html)) // Render edilmiş HTML'i yanıt olarak gönderiyoruz
      .catch((err) => next(err)); // Hata olması durumunda hatayı yöneticiye iletiyoruz
  });

  return server; // Sunucu uygulamasını dışa döndürüyoruz
}

function run(): void {
  const port = process.env['PORT'] || 4000; // Port numarasını belirliyoruz, varsayılan olarak 4000 kullanıyoruz

  // Node sunucusunu başlatıyoruz
  const server = app(); // Express uygulamasını oluşturuyoruz
  server.listen(port, () => { // Belirtilen port üzerinde dinlemeye başlıyoruz
    console.log(`Node Express sunucusu http://localhost:${port} üzerinde dinleniyor`); // Başlangıç mesajını konsola yazdırıyoruz
  });
}

run(); // Uygulamayı çalıştırıyoruz
