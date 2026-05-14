import { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    id: "l1",
    kategori: "Temel Kavramlar",
    baslik: "React'a Giriş",
    slug: "react-giris",
    aciklama: "React nedir, Virtual DOM nasıl çalışır ve bileşen yapısı.",
    icerik: [
      "React, kullanıcı arayüzleri oluşturmak için kullanılan bildirimsel ve esnek bir JavaScript kütüphanesidir. Karmaşık arayüzleri küçük ve bağımsız kod parçalarından, yani bileşenlerden oluşturmanızı sağlar.",
      "React'in en önemli kavramlarından biri Virtual DOM'dur. React, yavaş olabilen gerçek DOM'u doğrudan değiştirmek yerine, bellekte hafif bir kopya oluşturur.",
      "Bir nesnenin durumu değiştiğinde, React Virtual DOM'u günceller, önceki sürümle karşılaştırır ve gerçek DOM'a uygulanacak en verimli yolu hesaplar."
    ],
    kodOrnegi: `import React from 'react';

export default function MerhabaDunya() {
  return (
    <div>
      <h1>Merhaba Dünya!</h1>
      <p>React Mastery'ye hoş geldiniz.</p>
    </div>
  );
}`,
    beklenenCikti: "Merhaba Dünya!",
    gorevKodu: `export default function Uygulama() {
  return (
    <div>
      {/* TODO: İçine 'Merhaba Dünya!' yazan bir h1 elementi ekleyin */}
      
    </div>
  );
}`,
    quizSorulari: [
      {
        soru: "React arayüzü verimli bir şekilde güncellemek için ne kullanır?",
        secenekler: ["Gerçek DOM", "Virtual DOM", "Shadow DOM", "String DOM"],
        dogruCevap: 1
      },
      {
        soru: "React'in temel yapı taşı nedir?",
        secenekler: ["Modüller", "Sınıflar", "Bileşenler", "Şablonlar"],
        dogruCevap: 2
      },
      {
        soru: "React ne tür bir kütüphanedir?",
        secenekler: ["Veritabanı", "Sunucu", "Kullanıcı Arayüzü (UI)", "Stil"],
        dogruCevap: 2
      }
    ]
  },
  {
    id: "l2",
    kategori: "Temel Kavramlar",
    baslik: "JSX ve TSX",
    slug: "jsx-ve-tsx",
    aciklama: "JSX sözdizimi, süslü parantez kullanımı, className ve ifadeler.",
    icerik: [
      "JSX, JavaScript için XML veya HTML'ye benzeyen bir sözdizimi uzantısıdır. TSX ise JSX'in TypeScript dosyalarında kullanılmasıdır.",
      "JSX, HTML elementlerini JavaScript içinde yazmanıza ve createElement() kullanmadan DOM'a yerleştirmenize olanak tanır.",
      "Süslü parantez {} kullanarak herhangi bir JavaScript ifadesini JSX içine gömebilirsiniz. CSS sınıfları için 'class' yerine 'className' kullanmalısınız."
    ],
    kodOrnegi: `interface KullaniciProps {
  isim: string;
  yas: number;
}

export default function KullaniciProfili({ isim, yas }: KullaniciProps) {
  return (
    <div className="kullanici-profili">
      <h2>{isim}</h2>
      <p>Yaş: {yas}</p>
    </div>
  );
}`,
    beklenenCikti: "Bileşen çalışıyor.",
    gorevKodu: `export default function Goster() {
  const mesaj = "Bileşen çalışıyor.";
  return (
    <div>
      {/* TODO: mesaj değişkenini JSX içinde süslü parantezlerle gösterin */}
      
    </div>
  );
}`,
    quizSorulari: [
      {
        soru: "JSX içinde JavaScript ifadelerini nasıl kullanırız?",
        secenekler: ["Kare parantez []", "Süslü parantez {}", "Normal parantez ()", "Tırnak işareti ''"],
        dogruCevap: 1
      },
      {
        soru: "JSX'te CSS sınıfı eklemek için hangi özellik kullanılır?",
        secenekler: ["class", "className", "styleClass", "cssClass"],
        dogruCevap: 1
      },
      {
        soru: "JSX dosyaları TypeScript ile kullanıldığında hangi uzantıyı alır?",
        secenekler: [".ts", ".jsx", ".tsx", ".jts"],
        dogruCevap: 2
      }
    ]
  },
  {
    id: "l3",
    kategori: "Temel Kavramlar",
    baslik: "Bileşenler",
    slug: "bilesenler",
    aciklama: "Fonksiyonel bileşenler ve bileşenleri birleştirme.",
    icerik: [
      "Bileşenler herhangi bir React uygulamasının yapı taşlarıdır. Bir bileşen temel olarak JSX döndüren bir JavaScript fonksiyonudur.",
      "Karmaşık arayüzler oluşturmak için bileşenleri birleştirebilirsiniz. Örneğin bir Ana bileşen; Navbar, Sidebar ve Icerik bileşenlerini içerebilir.",
      "Her React bileşeni en üst seviyede tek bir element, bir dizi, bir fragment (<></>) veya null döndürmelidir."
    ],
    kodOrnegi: `function Baslik() {
  return <h2>Bileşen Başlığı</h2>;
}

export default function Kart() {
  return (
    <div className="kart">
      <Baslik />
      <p>Bu bir kart bileşenidir.</p>
    </div>
  );
}`,
    beklenenCikti: "Bileşen çalışıyor.",
    gorevKodu: `function Icerik() {
  return <p>Bileşen çalışıyor.</p>;
}

export default function Uygulama() {
  return (
    <div>
      {/* TODO: Icerik bileşenini burada render edin */}
      
    </div>
  );
}`,
    quizSorulari: [
      {
        soru: "Her React bileşeni ne döndürmek zorundadır?",
        secenekler: ["Bir string", "JSX veya null", "Bir nesne", "Bir sayı"],
        dogruCevap: 1
      },
      {
        soru: "Bileşen isimleri nasıl başlamalıdır?",
        secenekler: ["Küçük harfle", "Büyük harfle", "Sayıyla", "Alt çizgiyle"],
        dogruCevap: 1
      },
      {
        soru: "Birden fazla elementi saran görünmez kapsayıcıya ne ad verilir?",
        secenekler: ["Div", "Wrapper", "Fragment", "Container"],
        dogruCevap: 2
      }
    ]
  },
  {
    id: "l4",
    kategori: "Temel Kavramlar",
    baslik: "Props ve Interface",
    slug: "props-ve-interface",
    aciklama: "Prop tanımlama, aktarma ve TypeScript interface kullanımı.",
    icerik: [
      "Props (özellikler), React bileşenlerinin birbirleriyle iletişim kurma yoludur. Veriler her zaman üst bileşenden alt bileşene doğru akar.",
      "Props'lar salt okunurdur. Bir bileşen kendisine gelen props'ları asla değiştirmemelidir.",
      "TypeScript'te props'ların yapısını tanımlamak için interface veya type kullanırız. Bu bize otomatik tamamlama ve tip güvenliği sağlar."
    ],
    kodOrnegi: `interface ButonProps {
  etiket: string;
  renk?: string; // İsteğe bağlı
}

export default function Buton({ etiket, renk = "mavi" }: ButonProps) {
  return (
    <button style={{ backgroundColor: renk }}>
      {etiket}
    </button>
  );
}`,
    beklenenCikti: "Kullanıcı: Ahmet",
    gorevKodu: `interface KullaniciProps {
  isim: string;
}

function Profil({ isim }: KullaniciProps) {
  return <span>Kullanıcı: {isim}</span>;
}

export default function Uygulama() {
  return (
    <div>
      {/* TODO: Profil bileşenine isim="Ahmet" prop'unu geçin */}
      
    </div>
  );
}`,
    quizSorulari: [
      {
        soru: "Props'lar hangi yönde akar?",
        secenekler: ["Alttan üste", "Üstten alta", "İki yönde", "Rastgele"],
        dogruCevap: 1
      },
      {
        soru: "Bir bileşen kendi props'larını değiştirebilir mi?",
        secenekler: ["Evet, her zaman", "Hayır, props'lar salt okunurdur", "Sadece state yoksa", "Evet, setState ile"],
        dogruCevap: 1
      },
      {
        soru: "TypeScript'te isteğe bağlı bir prop nasıl belirtilir?",
        secenekler: ["isim: string | null", "isim?: string", "isim*: string", "isim!: string"],
        dogruCevap: 1
      }
    ]
  },
  {
    id: "l5",
    kategori: "Temel Kavramlar",
    baslik: "State Yönetimi",
    slug: "state-yonetimi",
    aciklama: "State kavramı, verinin değişimi ve bileşenlerin yeniden çizilmesi (re-render).",
    icerik: [
      "State (durum), bir bileşenin zaman içinde değişebilen ve kullanıcının gördüğü arayüzü etkileyen özel verisidir.",
      "Props'ların aksine state, bileşenin kendi içinde yönetilir ve güncellenebilir.",
      "Bir bileşenin state'i her değiştiğinde, React o bileşeni ve onun alt bileşenlerini güncel state değerleriyle yeniden çizer (re-render)."
    ],
    kodOrnegi: `import { useState } from 'react';

export default function Sayac() {
  const [deger, degerAyarla] = useState(0);

  return (
    <button onClick={() => degerAyarla(deger + 1)}>
      Tıklanma: {deger}
    </button>
  );
}`,
    beklenenCikti: "Sayaç: 0",
    gorevKodu: `export default function Uygulama() {
  // TODO: useState kullanarak baslangic degeri 0 olan bir 'sayac' state'i oluşturun ve ekrana 'Sayaç: 0' yazdırın
  
  return (
    <div>
      
    </div>
  );
}`,
    quizSorulari: [
      {
        soru: "State güncellendiğinde ne olur?",
        secenekler: ["Sayfa yenilenir", "Bileşen yeniden çizilir (re-render)", "Uygulama çöker", "Hiçbir şey olmaz"],
        dogruCevap: 1
      },
      {
        soru: "State ile Props arasındaki temel fark nedir?",
        secenekler: ["Fark yoktur", "Props değişebilir, State sabittir", "State değişebilir, Props salt okunurdur", "State sadece class bileşenlerinde olur"],
        dogruCevap: 2
      },
      {
        soru: "State'i doğrudan değiştirmek (örn: state = yeniDeger) doğru mudur?",
        secenekler: ["Evet, en hızlı yoldur", "Sadece string ise evet", "Hayır, state güncelleme fonksiyonu kullanılmalıdır", "Bazen"],
        dogruCevap: 2
      }
    ]
  },
  {
    id: "l6",
    kategori: "Hook'lar",
    baslik: "useState Hook",
    slug: "usestate-hook",
    aciklama: "useState fonksiyonu, değer atama ve tip belirleme.",
    icerik: [
      "useState hook'u, fonksiyonel bileşenlerde yerel state (durum) yönetmemizi sağlar. Parametre olarak state'in başlangıç değerini alır.",
      "useState bize iki elemanlı bir dizi döndürür: mevcut state değeri ve bu değeri güncelleyecek bir fonksiyon.",
      "TypeScript ile kullanırken state'in tipini belirtebiliriz (örn: useState<number>(0)), böylece tip güvenliği sağlamış oluruz."
    ],
    kodOrnegi: `import { useState } from 'react';

export default function MetinKutusu() {
  const [metin, setMetin] = useState<string>("");

  return (
    <div>
      <input 
        value={metin} 
        onChange={(e) => setMetin(e.target.value)} 
      />
      <p>Yazdığınız: {metin}</p>
    </div>
  );
}`,
    beklenenCikti: "Sayaç: 0",
    gorevKodu: `import { useState } from 'react';

export default function Sayac() {
  // TODO: count adında ve başlangıç değeri 0 olan bir state oluşturun
  
  return (
    <div>
      <p>Sayaç: 0</p>
    </div>
  );
}`,
    quizSorulari: [
      {
        soru: "useState fonksiyonu ne döndürür?",
        secenekler: ["Sadece bir değer", "İki fonksiyon", "Değer ve güncelleme fonksiyonu içeren bir dizi", "Bir nesne"],
        dogruCevap: 2
      },
      {
        soru: "TypeScript'te boolean bir state nasıl tanımlanır?",
        secenekler: ["useState(boolean)", "useState<boolean>(false)", "useState: boolean", "useState[boolean]"],
        dogruCevap: 1
      },
      {
        soru: "Başlangıç değeri nerede verilir?",
        secenekler: ["useState'in parametresi olarak", "Bileşen props'u olarak", "Dönüş değerinde", "Global olarak"],
        dogruCevap: 0
      }
    ]
  },
  {
    id: "l7",
    kategori: "Hook'lar",
    baslik: "useEffect Hook",
    slug: "useeffect-hook",
    aciklama: "Yan etkiler (side effects), bağımlılık dizisi ve temizleme (cleanup).",
    icerik: [
      "useEffect hook'u, fonksiyonel bileşenlerde yan etkiler (veri çekme, DOM manipülasyonu, abonelikler vb.) gerçekleştirmenizi sağlar.",
      "useEffect iki parametre alır: çalıştırılacak fonksiyon ve isteğe bağlı bir bağımlılık dizisi.",
      "Bağımlılık dizisi boş ise [] sadece bileşen ilk yüklendiğinde çalışır. Diziye değişkenler eklerseniz, bu değişkenler değiştiğinde tekrar çalışır."
    ],
    kodOrnegi: `import { useState, useEffect } from 'react';

export default function Zamanlayici() {
  const [saniye, setSaniye] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSaniye(s => s + 1);
    }, 1000);

    // Temizleme (cleanup) fonksiyonu
    return () => clearInterval(interval);
  }, []); // Sadece ilk yüklemede çalışır

  return <p>Geçen süre: {saniye} saniye</p>;
}`,
    beklenenCikti: "Bileşen yüklendi.",
    gorevKodu: `import { useState, useEffect } from 'react';

export default function BilgiGoster() {
  const [mesaj, setMesaj] = useState("Bekleniyor...");

  useEffect(() => {
    // TODO: Burada setMesaj ile mesajı 'Bileşen yüklendi.' olarak değiştirin
    
  }, []);

  return <p>{mesaj}</p>;
}`,
    quizSorulari: [
      {
        soru: "Boş bir bağımlılık dizisi [] useEffect'in ne zaman çalışmasını sağlar?",
        secenekler: ["Her render işleminde", "Sadece bileşen ekrana ilk çizildiğinde", "Hiçbir zaman", "Sadece bileşen ekrandan kalkarken"],
        dogruCevap: 1
      },
      {
        soru: "useEffect içinden dönen (return) fonksiyon ne işe yarar?",
        secenekler: ["Yeni bir state döndürür", "Hata ayıklama sağlar", "Temizleme (cleanup) işlemi yapar", "Bileşeni re-render eder"],
        dogruCevap: 2
      },
      {
        soru: "Bağımlılık dizisi hiç verilmezse (parametre atlanırsa) ne olur?",
        secenekler: ["Hiç çalışmaz", "Sadece ilk render'da çalışır", "Her render'dan sonra çalışır", "Hata verir"],
        dogruCevap: 2
      }
    ]
  },
  {
    id: "l8",
    kategori: "Hook'lar",
    baslik: "Olay Yönetimi",
    slug: "olay-yonetimi",
    aciklama: "onClick, onChange olayları ve TypeScript event tipleri.",
    icerik: [
      "React'te olayları yönetmek, standart DOM olaylarını yönetmeye çok benzer. Ancak React olayları lowercase yerine camelCase olarak adlandırılır (onclick yerine onClick).",
      "Olay işleyicilerine bir string değil, bir fonksiyon referansı geçirirsiniz.",
      "TypeScript'te olay (event) nesnelerini tiplemek önemlidir. Tıklama için React.MouseEvent, input değişimi için React.ChangeEvent kullanılır."
    ],
    kodOrnegi: `import React, { useState } from 'react';

export default function AramaKutusu() {
  const [kelime, setKelime] = useState("");

  const degisimIsleyici = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKelime(e.target.value);
  };

  const tiklamaIsleyici = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert("Aranan: " + kelime);
  };

  return (
    <div>
      <input type="text" onChange={degisimIsleyici} />
      <button onClick={tiklamaIsleyici}>Ara</button>
    </div>
  );
}`,
    beklenenCikti: "Butona tıklandı",
    gorevKodu: `export default function ButonBileseni() {
  const tiklaIslemi = () => {
    // TODO: console.log ile 'Butona tıklandı' yazdırın (beklenen çıktı kontrolü için)
    console.log("Butona tıklandı");
  };

  return (
    <button onClick={tiklaIslemi}>Tıkla</button>
  );
}`,
    quizSorulari: [
      {
        soru: "React olay isimleri nasıl yazılır?",
        secenekler: ["Tümü küçük harf (onclick)", "camelCase (onClick)", "PascalCase (OnClick)", "kebab-case (on-click)"],
        dogruCevap: 1
      },
      {
        soru: "Bir input'un değeri değiştiğinde hangi event tetiklenir?",
        secenekler: ["onClick", "onHover", "onChange", "onSubmit"],
        dogruCevap: 2
      },
      {
        soru: "Input değişimi (onChange) için TypeScript'te hangi event tipi kullanılır?",
        secenekler: ["React.MouseEvent", "React.KeyboardEvent", "React.ChangeEvent", "React.InputEvent"],
        dogruCevap: 2
      }
    ]
  },
  {
    id: "l9",
    kategori: "İleri Seviye",
    baslik: "Context API",
    slug: "context-api",
    aciklama: "Prop drilling'i çözmek, createContext ve useContext kullanımı.",
    icerik: [
      "Context API, props'ları her seviyedeki bileşenden tek tek geçirmek (prop drilling) zorunda kalmadan, verileri bileşen ağacı boyunca paylaşmanızı sağlar.",
      "React.createContext ile bir bağlam oluşturulur ve Provider ile bu değer alt bileşenlere sunulur.",
      "Alt bileşenlerde ise useContext hook'u kullanarak bu verilere doğrudan erişebiliriz."
    ],
    kodOrnegi: `import React, { createContext, useContext } from 'react';

const TemaContext = createContext('acik');

function Yazi() {
  const tema = useContext(TemaContext);
  return <p>Mevcut tema: {tema}</p>;
}

export default function Uygulama() {
  return (
    <TemaContext.Provider value="koyu">
      <Yazi />
    </TemaContext.Provider>
  );
}`,
    beklenenCikti: "Koyu Tema",
    gorevKodu: `import React, { createContext, useContext } from 'react';

// TODO: Baslangic degeri 'Acik Tema' olan bir TemaBaglami (Context) olusturun
const TemaBaglami = createContext('Acik Tema');

function Gosterge() {
  const tema = useContext(TemaBaglami);
  return <span>Koyu Tema</span>;
}

export default function Uygulama() {
  return (
    <TemaBaglami.Provider value="Koyu Tema">
      <Gosterge />
    </TemaBaglami.Provider>
  );
}`,
    quizSorulari: [
      {
        soru: "Context API'nin çözdüğü temel sorun nedir?",
        secenekler: ["Performans sorunları", "Prop drilling (props'ları çok derinlere taşıma)", "Routing", "CSS stilleri"],
        dogruCevap: 1
      },
      {
        soru: "Context içindeki veriyi kullanmak için hangi hook kullanılır?",
        secenekler: ["useContext", "useState", "useReducer", "useRef"],
        dogruCevap: 0
      },
      {
        soru: "Context verisini alt bileşenlere sarmalamak için ne kullanılır?",
        secenekler: ["Context.Consumer", "Context.Wrapper", "Context.Provider", "Context.Sender"],
        dogruCevap: 2
      }
    ]
  },
  {
    id: "l10",
    kategori: "İleri Seviye",
    baslik: "Koşullu Render",
    slug: "kosullu-render",
    aciklama: "Ternary operatörü, mantıksal && kullanımı.",
    icerik: [
      "React'te, uygulamanızın durumuna göre sadece bazı bileşenleri çizebilirsiniz (koşullu render).",
      "Basit koşullar için mantıksal && operatörünü kullanabilirsiniz (Koşul && <Bilesen />). Bu durumda koşul doğruysa bileşen çizilir, yanlışsa hiçbir şey çizilmez.",
      "İki seçenekli koşullar için ternary (üçlü) operatörünü kullanabilirsiniz (Koşul ? <Dogru /> : <Yanlis />)."
    ],
    kodOrnegi: `interface Props {
  girisYapildiMi: boolean;
}

export default function KullaniciMenu({ girisYapildiMi }: Props) {
  return (
    <div>
      {/* Ternary ile iki seçenek */}
      {girisYapildiMi ? <span>Hoş Geldin</span> : <span>Giriş Yap</span>}
      
      {/* Mantıksal && ile tek seçenek */}
      {girisYapildiMi && <button>Çıkış Yap</button>}
    </div>
  );
}`,
    beklenenCikti: "Giriş başarılı.",
    gorevKodu: `export default function Uygulama() {
  const girisBasarili = true;
  
  return (
    <div>
      {/* TODO: girisBasarili true ise 'Giriş başarılı.' yazan bir p elementi gösterin */}
      {girisBasarili && <p>Giriş başarılı.</p>}
    </div>
  );
}`,
    quizSorulari: [
      {
        soru: "A ? B : C ifadesinde A doğruysa (true) hangisi çizilir?",
        secenekler: ["A", "B", "C", "Hiçbiri"],
        dogruCevap: 1
      },
      {
        soru: "Bir koşul sağlandığında bileşeni çizmek, sağlanmadığında hiçbir şey çizmemek için hangisi daha uygundur?",
        secenekler: ["Ternary (A ? B : C)", "Mantıksal && (A && B)", "if-else blokları", "switch-case"],
        dogruCevap: 1
      },
      {
        soru: "Koşullu render nerelerde kullanılabilir?",
        secenekler: ["Sadece return içinde", "Sadece fonksiyon dışında", "Hem return içinde JSX olarak hem de fonksiyon bloğunda if ile", "Sadece class bileşenlerinde"],
        dogruCevap: 2
      }
    ]
  },
  {
    id: "l11",
    kategori: "İleri Seviye",
    baslik: "Liste ve Anahtarlar",
    slug: "liste-ve-anahtarlar",
    aciklama: ".map() fonksiyonu ve key prop'unun önemi.",
    icerik: [
      "React'te listeleri ekrana yazdırmak için genellikle JavaScript'in map() fonksiyonu kullanılır.",
      "Listelerdeki her bir elemanı render ederken, React'in hangi öğelerin değiştiğini, eklendiğini veya silindiğini takip edebilmesi için 'key' (anahtar) prop'u zorunludur.",
      "Key prop'u dizideki her bir öğe için benzersiz olmalıdır (genellikle veri tabanından gelen id'ler kullanılır). Dizi indeksini key olarak kullanmak son çare olmalıdır."
    ],
    kodOrnegi: `const diller = [
  { id: 1, isim: 'React' },
  { id: 2, isim: 'Vue' },
  { id: 3, isim: 'Angular' }
];

export default function Liste() {
  return (
    <ul>
      {diller.map((dil) => (
        <li key={dil.id}>{dil.isim}</li>
      ))}
    </ul>
  );
}`,
    beklenenCikti: "Liste Elemanı",
    gorevKodu: `export default function Uygulama() {
  const veriler = [{id: 1, metin: 'Liste Elemanı'}];
  
  return (
    <ul>
      {/* TODO: veriler dizisini map ile donun ve id'yi key olarak verin */}
      {veriler.map(item => (
        <li key={item.id}>{item.metin}</li>
      ))}
    </ul>
  );
}`,
    quizSorulari: [
      {
        soru: "React'te listeleri döngüyle yazdırmak için en yaygın hangi JavaScript metodu kullanılır?",
        secenekler: [".forEach()", ".map()", ".filter()", ".reduce()"],
        dogruCevap: 1
      },
      {
        soru: "Liste elemanlarında zorunlu olan özel prop nedir?",
        secenekler: ["id", "index", "key", "name"],
        dogruCevap: 2
      },
      {
        soru: "Key prop'u neden gereklidir?",
        secenekler: ["CSS stillerini uygulamak için", "React'in DOM güncellemelerini verimli yapabilmesi için", "Veritabanı bağlantısı için", "Sıralama yapmak için"],
        dogruCevap: 1
      }
    ]
  },
  {
    id: "l12",
    kategori: "İleri Seviye",
    baslik: "Form Yönetimi",
    slug: "form-yonetimi",
    aciklama: "Kontrollü bileşenler (controlled inputs) ve form submit işlemleri.",
    icerik: [
      "React'te form elemanlarının (input, textarea, select) değerini genellikle state içinde tutarız. Buna 'Kontrollü Bileşenler' (Controlled Components) denir.",
      "Input'un value prop'una state değişkenini, onChange prop'una ise state'i güncelleyen fonksiyonu atarız.",
      "Form gönderildiğinde (onSubmit), sayfanın yenilenmesini engellemek için event.preventDefault() çağrılmalıdır."
    ],
    kodOrnegi: `import { useState } from 'react';

export default function IletisimFormu() {
  const [isim, setIsim] = useState('');

  const formGonder = (e: React.FormEvent) => {
    e.preventDefault(); // Sayfa yenilenmesini engeller
    alert('Gönderilen: ' + isim);
  };

  return (
    <form onSubmit={formGonder}>
      <input 
        value={isim} 
        onChange={(e) => setIsim(e.target.value)} 
      />
      <button type="submit">Gönder</button>
    </form>
  );
}`,
    beklenenCikti: "Form kontrol ediliyor.",
    gorevKodu: `export default function Uygulama() {
  const gonderimiEngelle = (e) => {
    e.preventDefault();
    console.log("Form kontrol ediliyor.");
  };

  return (
    // TODO: form gonderildiginde gonderimiEngelle fonksiyonunu calistirin
    <form onSubmit={gonderimiEngelle}>
      <button type="submit">Gönder</button>
    </form>
  );
}`,
    quizSorulari: [
      {
        soru: "Değeri React state'i tarafından yönetilen input'lara ne ad verilir?",
        secenekler: ["Kontrolsüz Bileşen", "Kontrollü Bileşen", "Statik Bileşen", "Dinamik Bileşen"],
        dogruCevap: 1
      },
      {
        soru: "Form gönderildiğinde sayfanın yenilenmesini önleyen metod hangisidir?",
        secenekler: ["e.stopPropagation()", "e.halt()", "e.preventDefault()", "e.stop()"],
        dogruCevap: 2
      },
      {
        soru: "Form'un gönderilme olayını yakalamak için form elementine hangi prop eklenir?",
        secenekler: ["onClick", "onSubmit", "onChange", "onSend"],
        dogruCevap: 1
      }
    ]
  }
];