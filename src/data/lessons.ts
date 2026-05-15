import { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    id: "l1",
    kategori: "Temel Kavramlar",
    baslik: "React Giriş",
    slug: "react-giris",
    aciklama: "React'ın temel yapısı ve nasıl çalıştığı hakkında ilk adım.",
    icerik: [
      "React, kullanıcı arayüzleri oluşturmak için kullanılan açık kaynaklı bir JavaScript kütüphanesidir. Bileşen tabanlı yapısı sayesinde karmaşık UI'ları daha küçük, yönetilebilir parçalara bölebilirsiniz.",
      "Sanal DOM (Virtual DOM) kullanarak performansı artırır. Geleneksel web uygulamalarının aksine, sadece değişen kısımları günceller.",
      "Bu ilk dersimizde React'ın en temel yapısı olan bileşen oluşturmayı ve ekrana basit bir çıktı yazdırmayı öğreneceksiniz."
    ],
    kodOrnegi: `import React from 'react';\n\nfunction MerhabaDunya() {\n  return <h1>Merhaba Dünya!</h1>;\n}\n\nexport default MerhabaDunya;`,
    beklenenCikti: "Merhaba Dünya!",
    gorevKodu: `// "Merhaba Dünya!" yazdıran bir bileşen oluşturun\nexport default function App() {\n  return (\n    // TODO: Burayı düzenleyin\n    <div></div>\n  );\n}`,
    quizSorulari: [
      { soru: "React nedir?", secenekler: ["Bir veritabanı", "Kullanıcı arayüzü kütüphanesi", "Bir işletim sistemi", "Bir backend framework'ü"], dogruCevap: 1 },
      { soru: "React performansı artırmak için hangi teknolojiyi kullanır?", secenekler: ["Real DOM", "Sanal DOM (Virtual DOM)", "Shadow DOM", "Direct DOM"], dogruCevap: 1 },
      { soru: "React uygulamaları hangi dille yazılır?", secenekler: ["Python", "Java", "JavaScript / TypeScript", "C++"], dogruCevap: 2 },
      { soru: "React'ı kim geliştirmiştir?", secenekler: ["Google", "Microsoft", "Meta (Facebook)", "Twitter"], dogruCevap: 2 },
      { soru: "React'ta arayüzler neye bölünerek yazılır?", secenekler: ["Modüller", "Bileşenler (Components)", "Sayfalar", "Şablonlar (Templates)"], dogruCevap: 1 }
    ]
  },
  {
    id: "l2",
    kategori: "Temel Kavramlar",
    baslik: "JSX Mantığı",
    slug: "jsx-mantigi",
    aciklama: "JavaScript içinde HTML yazmanızı sağlayan JSX sözdizimini keşfedin.",
    icerik: [
      "JSX (JavaScript XML), React'ta arayüzleri tanımlamak için kullanılan, HTML'e benzeyen bir sözdizimidir. JavaScript'in tüm gücünü HTML benzeri bir yapıyla birleştirir.",
      "JSX, tarayıcıda doğrudan çalışmaz. Babel gibi araçlar tarafından normal JavaScript fonksiyon çağrılarına (React.createElement) dönüştürülür.",
      "JSX içinde JavaScript ifadelerini süslü parantezler {} arasında kullanabilirsiniz. Ayrıca class yerine className, for yerine htmlFor gibi özel nitelik isimleri kullanılır."
    ],
    kodOrnegi: `const isim = "Ali";\nconst element = <h1>Merhaba, {isim}! JSX çalışıyor.</h1>;`,
    beklenenCikti: "JSX çalışıyor.",
    gorevKodu: `export default function App() {\n  // "JSX çalışıyor." metnini ekranda gösterin\n  return (\n    <div>\n      {/* TODO */}\n    </div>\n  );\n}`,
    quizSorulari: [
      { soru: "JSX içinde JavaScript değişkenleri hangi semboller arasında yazılır?", secenekler: ["( )", "[ ]", "{ }", "< >"], dogruCevap: 2 },
      { soru: "HTML'deki 'class' niteliği JSX'te nasıl yazılır?", secenekler: ["class", "className", "classList", "cssClass"], dogruCevap: 1 },
      { soru: "JSX doğrudan tarayıcıda çalışır mı?", secenekler: ["Evet, tarayıcılar JSX'i destekler", "Hayır, dönüştürülmesi gerekir", "Sadece Chrome'da çalışır", "Sadece Node.js'de çalışır"], dogruCevap: 1 },
      { soru: "JSX'te HTML'deki 'for' niteliği nasıl yazılır?", secenekler: ["forName", "htmlFor", "labelFor", "forId"], dogruCevap: 1 },
      { soru: "JSX'in açılımı nedir?", secenekler: ["JavaScript XML", "Java Script Extension", "JSON XML", "JavaScript Export"], dogruCevap: 0 }
    ]
  },
  {
    id: "l3",
    kategori: "Temel Kavramlar",
    baslik: "Component Yapısı",
    slug: "component-yapisi",
    aciklama: "Fonksiyonel bileşenler oluşturmayı ve kullanmayı öğrenin.",
    icerik: [
      "Bileşenler (Components), React uygulamanızın yapı taşlarıdır. Uygulamanın farklı bölümlerini bağımsız, yeniden kullanılabilir parçalara ayırmanızı sağlarlar.",
      "Günümüzde React'ta en yaygın bileşen türü Fonksiyonel Bileşenlerdir. Basitçe, geriye JSX döndüren bir JavaScript fonksiyonudur.",
      "Bir bileşen her zaman büyük harfle başlamalıdır. Aksi takdirde React onu standart bir HTML etiketi olarak algılar."
    ],
    kodOrnegi: `function Baslik() {\n  return <h2>Bileşen render edildi.</h2>;\n}\n\nfunction App() {\n  return (\n    <div>\n      <Baslik />\n    </div>\n  );\n}`,
    beklenenCikti: "Bileşen render edildi.",
    gorevKodu: `// "Bileşen render edildi." yazdıran bir Header bileşeni oluşturun\nfunction Header() {\n  return null;\n}\n\nexport default function App() {\n  return (\n    <div>\n      {/* Header bileşenini burada kullanın */}\n    </div>\n  );\n}`,
    quizSorulari: [
      { soru: "React bileşenleri hangi harfle başlamalıdır?", secenekler: ["Küçük harf", "Büyük harf", "Farketmez", "Sayı ile"], dogruCevap: 1 },
      { soru: "Bileşenler neden kullanışlıdır?", secenekler: ["Kod tekrarını önler", "Veritabanına bağlanır", "Sunucuyu hızlandırır", "Sadece HTML yazmayı sağlar"], dogruCevap: 0 },
      { soru: "Bir fonksiyonel bileşen geriye ne döndürmelidir?", secenekler: ["String", "Object", "JSX (React Elementi)", "Array"], dogruCevap: 2 },
      { soru: "Aşağıdakilerden hangisi geçerli bir React bileşeni ismidir?", secenekler: ["myComponent", "my-component", "MyComponent", "mycomponent"], dogruCevap: 2 },
      { soru: "Bir bileşen başka bir bileşeni kullanabilir mi?", secenekler: ["Hayır, her bileşen bağımsızdır", "Evet, bileşenler iç içe kullanılabilir", "Sadece aynı dosyada olursa", "Sadece iki seviye derine kadar"], dogruCevap: 1 }
    ]
  },
  {
    id: "l4",
    kategori: "Temel Kavramlar",
    baslik: "Props ve Interface",
    slug: "props-ve-interface",
    aciklama: "Bileşenlere veri aktarmayı (props) ve TypeScript ile bu verileri tiplemeyi kavrayın.",
    icerik: [
      "Props (Özellikler), React bileşenleri arasında veri taşımak için kullanılır. Veri akışı her zaman yukarıdan aşağıya (ebeveynden çocuğa) doğrudur.",
      "Props'lar salt okunurdur (read-only), yani bir bileşen kendisine gelen props değerini doğrudan değiştiremez.",
      "TypeScript kullanırken props'ların beklediği veri tiplerini Interface veya Type kullanarak tanımlamak kodun daha güvenli olmasını sağlar."
    ],
    kodOrnegi: `interface Props {\n  isim: string;\n}\n\nfunction Karsilama({ isim }: Props) {\n  return <h1>Merhaba, {isim}!</h1>;\n}\n\n// Kullanımı: <Karsilama isim="Ayşe" />`,
    beklenenCikti: "Merhaba, Ayşe!",
    gorevKodu: `interface UserProps {\n  // TODO: isim (string) özelliği tanımlayın\n}\n\nfunction UserProfile(props: any) {\n  // TODO: Ekrana "Merhaba, [isim]!" yazdırın\n  return null;\n}\n\nexport default function App() {\n  return <UserProfile isim="Ayşe" />;\n}`,
    quizSorulari: [
      { soru: "Props'lar hangi yönde aktarılır?", secenekler: ["Çocuktan ebeveyne", "Ebeveynden çocuğa", "Kardeş bileşenler arasında", "Çift yönlü"], dogruCevap: 1 },
      { soru: "Props değerleri bileşen içinde değiştirilebilir mi?", secenekler: ["Evet", "Hayır, props'lar salt okunurdur", "Sadece sayılar değiştirilebilir", "useProps ile değiştirilebilir"], dogruCevap: 1 },
      { soru: "TypeScript'te props'ları tiplemek için ne kullanılır?", secenekler: ["enum", "interface / type", "class", "function"], dogruCevap: 1 },
      { soru: "Bir props'a varsayılan (default) değer nasıl verilir?", secenekler: ["props.default ile", "defaultProps veya destructuring sırasında = ile", "useState ile", "useDefault ile"], dogruCevap: 1 },
      { soru: "children props'u ne işe yarar?", secenekler: ["Bileşenin CSS stilini belirler", "Bileşenin içine yerleştirilen JSX içeriğini taşır", "Bileşenin ID'sini verir", "Bileşeni gizler"], dogruCevap: 1 }
    ]
  },
  {
    id: "l5",
    kategori: "Temel Kavramlar",
    baslik: "useState Hook",
    slug: "usestate-hook",
    aciklama: "Bileşenlerde durum (state) yönetimini sağlayan useState hook'unu kullanın.",
    icerik: [
      "State, bir bileşenin zaman içinde değişebilecek verilerini tuttuğu yerdir. State değiştiğinde, React bileşeni otomatik olarak yeniden render eder.",
      "Fonksiyonel bileşenlerde state yönetimi için useState hook'u kullanılır. Bu hook bize mevcut state değerini ve onu güncellemek için bir fonksiyon döner.",
      "State güncellemeleri asenkrondur. Yeni state değerinin mevcut state'e bağlı olduğu durumlarda güncelleme fonksiyonuna bir callback geçilmesi önerilir."
    ],
    kodOrnegi: `import { useState } from 'react';\n\nfunction Sayac() {\n  const [sayac, setSayac] = useState(0);\n  return <p>Sayaç: {sayac}</p>;\n}`,
    beklenenCikti: "Sayaç: 0",
    gorevKodu: `import { useState } from 'react';\n\nexport default function App() {\n  // TODO: Başlangıç değeri 0 olan bir 'count' state'i oluşturun\n  \n  return (\n    <div>Sayaç: {/* count değerini yazdırın */}</div>\n  );\n}`,
    quizSorulari: [
      { soru: "useState hook'u ne işe yarar?", secenekler: ["API isteği yapar", "DOM elementine referans alır", "Bileşenin durumunu (state) yönetir", "Sayfayı yönlendirir"], dogruCevap: 2 },
      { soru: "useState fonksiyonu ne döndürür?", secenekler: ["Bir string", "[mevcutDeger, guncellemeFonksiyonu] şeklinde bir dizi", "Bir obje", "Bir boolean"], dogruCevap: 1 },
      { soru: "State güncellendiğinde ne olur?", secenekler: ["Sayfa yenilenir", "Sadece state'in kullanıldığı bileşen yeniden render edilir", "Tüm uygulama baştan başlar", "Hiçbir şey olmaz"], dogruCevap: 1 },
      { soru: "useState(0) ifadesinde 0 ne anlama gelir?", secenekler: ["State'in maksimum değeri", "State'in minimum değeri", "State'in başlangıç değeri", "State'in adımı"], dogruCevap: 2 },
      { soru: "State'i güncellemek için hangisi doğrudur?", secenekler: ["state = yeniDeger", "setState(yeniDeger) gibi setter fonksiyonu kullanmak", "state.update(yeniDeger)", "mutateState(yeniDeger)"], dogruCevap: 1 }
    ]
  },
  {
    id: "l6",
    kategori: "Temel Kavramlar",
    baslik: "Event Handling",
    slug: "event-handling",
    aciklama: "Kullanıcı etkileşimlerini (tıklama, form girişi) nasıl yöneteceğinizi öğrenin.",
    icerik: [
      "React'ta olay yönetimi (event handling), normal DOM elementlerindeki gibidir, ancak bazı sözdizimi farkları vardır.",
      "Olay isimleri camelCase formatında yazılır (örneğin onclick yerine onClick).",
      "Olaylara string yerine doğrudan bir fonksiyon referansı (örneğin onClick={handleClick}) atanmalıdır."
    ],
    kodOrnegi: `function Buton() {\n  const handleClick = () => alert("Butona tıklandı!");\n  return <button onClick={handleClick}>Tıkla</button>;\n}`,
    beklenenCikti: "Butona tıklandı!",
    gorevKodu: `import { useState } from 'react';\n\nexport default function App() {\n  const [metin, setMetin] = useState("Bekleniyor");\n\n  // TODO: Tıklanınca metni "Butona tıklandı!" yapacak fonksiyonu yazın\n  \n  return (\n    <button>{metin}</button>\n  );\n}`,
    quizSorulari: [
      { soru: "React'ta bir tıklama olayı nasıl yazılır?", secenekler: ["onclick", "onClick", "on-click", "click"], dogruCevap: 1 },
      { soru: "Olaylara (event) değer olarak ne atanmalıdır?", secenekler: ["Fonksiyon referansı", "String", "Obje", "Sayı"], dogruCevap: 0 },
      { soru: "Form gönderiminde sayfanın yenilenmesini engellemek için ne kullanılır?", secenekler: ["e.stop()", "e.preventDefault()", "e.halt()", "e.pause()"], dogruCevap: 1 },
      { soru: "React'ta olay isimlerinin yazım kuralı nedir?", secenekler: ["kebab-case (on-click)", "snake_case (on_click)", "camelCase (onClick)", "UPPERCASE (ONCLICK)"], dogruCevap: 2 },
      { soru: "Bir input'taki değer değişimini dinlemek için hangi event kullanılır?", secenekler: ["onInput", "onChange", "onType", "onValue"], dogruCevap: 1 }
    ]
  },
  {
    id: "l7",
    kategori: "Temel Kavramlar",
    baslik: "Conditional Rendering",
    slug: "conditional-rendering",
    aciklama: "Duruma göre farklı bileşenleri ekranda göstermeyi (koşullu render) inceleyin.",
    icerik: [
      "Koşullu render (Conditional Rendering), React'ta belirli bir duruma göre farklı arayüzlerin (JSX) gösterilmesidir.",
      "Bunun için genellikle JavaScript'in mantıksal operatörleri (&&, ||) veya ternary (? :) operatörü kullanılır.",
      "Örneğin, bir kullanıcı giriş yaptıysa profilini, yapmadıysa giriş formunu göstermek bu şekilde yönetilir."
    ],
    kodOrnegi: `function DurumGoster({ girisYapildi }) {\n  return <p>{girisYapildi ? "Kullanıcı giriş yaptı." : "Lütfen giriş yapın."}</p>;\n}`,
    beklenenCikti: "Kullanıcı giriş yaptı.",
    gorevKodu: `export default function App() {\n  const isLogged = true;\n  \n  // TODO: isLogged true ise "Kullanıcı giriş yaptı." döndürün\n  return (\n    <div></div>\n  );\n}`,
    quizSorulari: [
      { soru: "JSX içinde IF/ELSE blokları doğrudan kullanılabilir mi?", secenekler: ["Evet, her yerde kullanılabilir", "Hayır, genellikle ternary veya mantıksal operatörler tercih edilir", "Sadece sınıf bileşenlerinde", "Sadece useEffect içinde"], dogruCevap: 1 },
      { soru: "Sadece tek bir koşul doğruysa bir şey göstermek için en kısa yol nedir?", secenekler: ["kosul ? element : null", "kosul && element", "kosul || element", "if(kosul) return element"], dogruCevap: 1 },
      { soru: "Ternary operatörü hangi işaretleri kullanır?", secenekler: ["? ve :", "&& ve ||", "! ve ==", "=> ve {}"], dogruCevap: 0 },
      { soru: "{kosul && <Element />} ifadesinde kosul false ise ne render edilir?", secenekler: ["<Element />", "null (hiçbir şey)", "undefined", "false yazısı"], dogruCevap: 1 },
      { soru: "null döndüren bir bileşen ne gösterir?", secenekler: ["Boş bir div", "Hata mesajı", "Hiçbir şey render etmez", "Yükleniyor animasyonu"], dogruCevap: 2 }
    ]
  },
  {
    id: "l8",
    kategori: "Temel Kavramlar",
    baslik: "Lists ve Keys",
    slug: "lists-ve-keys",
    aciklama: "Dizi verilerini listelemeyi ve `key` özelliğinin neden kritik olduğunu öğrenin.",
    icerik: [
      "React'ta dizi (array) verilerini ekrana yazdırmak için genellikle JavaScript'in yerleşik map() fonksiyonu kullanılır.",
      "Listelenen her bir elemanın eşsiz bir 'key' (anahtar) özelliğine sahip olması gerekir.",
      "React bu 'key' değerlerini, hangi elemanların değiştiğini, eklendiğini veya silindiğini verimli bir şekilde takip etmek için kullanır."
    ],
    kodOrnegi: `const diller = ['React', 'Vue', 'Angular'];\nfunction Liste() {\n  return <ul>{diller.map(dil => <li key={dil}>{dil}</li>)}</ul>;\n}`,
    beklenenCikti: "React, Vue, Angular",
    gorevKodu: `const frameworkler = ['React', 'Vue', 'Angular'];\n\nexport default function App() {\n  // TODO: frameworkler dizisini ekranda "React, Vue, Angular" yazacak şekilde listeleyin\n  return (\n    <div></div>\n  );\n}`,
    quizSorulari: [
      { soru: "React'ta listeleme işlemi için genellikle hangi JavaScript fonksiyonu kullanılır?", secenekler: ["filter()", "reduce()", "map()", "forEach()"], dogruCevap: 2 },
      { soru: "Listelenen elemanlara neden 'key' özelliği verilmelidir?", secenekler: ["CSS ile stil vermek için", "React'ın değişiklikleri verimli takip etmesi için", "Veritabanına kaydetmek için", "Zorunlu değildir"], dogruCevap: 1 },
      { soru: "Key olarak ne kullanmak en idealidir?", secenekler: ["Elemanın array indeksi", "Rastgele sayılar", "Verinin benzersiz kimliği (ID)", "Hepsi aynı olabilir"], dogruCevap: 2 },
      { soru: "Key değeri kardeşler arasında nasıl olmalıdır?", secenekler: ["Aynı olabilir", "Benzersiz (unique) olmalıdır", "Sayısal olmalıdır", "String olmalıdır"], dogruCevap: 1 },
      { soru: "forEach() neden map() yerine listelemelerde kullanılamaz?", secenekler: ["forEach daha yavaştır", "forEach geriye yeni bir dizi döndürmez", "forEach sadece sayılar için çalışır", "forEach async değildir"], dogruCevap: 1 }
    ]
  },
  {
    id: "l9",
    kategori: "Hook'lar",
    baslik: "useEffect Temel",
    slug: "useeffect-temel",
    aciklama: "Bileşen yaşam döngüsü yan etkilerini (side effects) yönetmek için useEffect'e giriş.",
    icerik: [
      "useEffect hook'u, fonksiyonel bileşenlerde yan etkileri (side effects) gerçekleştirmek için kullanılır. Veri çekme (API calls), abonelikler veya DOM güncellemeleri yan etkilere örnektir.",
      "useEffect, varsayılan olarak her render sonrasında çalışır. Ancak bir bağımlılık dizisi (dependency array) vererek ne zaman çalışacağını kontrol edebiliriz.",
      "Boş bir bağımlılık dizisi [] verilirse, etki sadece bileşen ilk kez yüklendiğinde (mount olduğunda) çalışır."
    ],
    kodOrnegi: `import { useEffect, useState } from 'react';\n\nfunction Veri() {\n  const [durum, setDurum] = useState("");\n  useEffect(() => {\n    setDurum("Veri yüklendi.");\n  }, []);\n  return <p>{durum}</p>;\n}`,
    beklenenCikti: "Veri yüklendi.",
    gorevKodu: `import { useEffect, useState } from 'react';\n\nexport default function App() {\n  const [mesaj, setMesaj] = useState("Bekleniyor");\n\n  // TODO: Component yüklendiğinde mesajı "Veri yüklendi." yapın\n\n  return <div>{mesaj}</div>;\n}`,
    quizSorulari: [
      { soru: "Aşağıdakilerden hangisi bir 'yan etki' (side effect) değildir?", secenekler: ["API'den veri çekmek", "DOM'u doğrudan değiştirmek", "Zamanlayıcı (setTimeout) başlatmak", "JSX döndürmek"], dogruCevap: 3 },
      { soru: "useEffect'in sadece bileşen ilk mount olduğunda çalışmasını nasıl sağlarız?", secenekler: ["Bağımlılık dizisini yazmayarak", "Bağımlılık dizisini boş bir array [] olarak vererek", "Return kullanarak", "false dönerek"], dogruCevap: 1 },
      { soru: "useEffect varsayılan olarak ne zaman çalışır?", secenekler: ["Sadece mount olduğunda", "Her render'dan sonra", "Unmount olduğunda", "Hiç çalışmaz"], dogruCevap: 1 },
      { soru: "useEffect hangi kütüphaneden import edilir?", secenekler: ["react-dom", "react-hooks", "react", "react-effects"], dogruCevap: 2 },
      { soru: "Bağımlılık dizisine [sayi] yazılırsa useEffect ne zaman çalışır?", secenekler: ["Hiç çalışmaz", "Sadece ilk render'da", "sayi değeri değiştiğinde", "Her render'da"], dogruCevap: 2 }
    ]
  },
  {
    id: "l10",
    kategori: "Hook'lar",
    baslik: "useEffect İleri Seviye",
    slug: "useeffect-ileri",
    aciklama: "Bağımlılık dizisi ve temizleme (cleanup) fonksiyonlarının derinlemesine kullanımı.",
    icerik: [
      "useEffect hook'u, bileşen ekrandan kaldırılırken (unmount) yapılması gereken işlemleri bir 'cleanup' fonksiyonu dönerek halleder.",
      "Eğer bir zamanlayıcı başlattıysanız veya bir event listener eklediyseniz, memory leak (bellek sızıntısı) olmaması için bunu temizlemeniz gerekir.",
      "Bağımlılık dizisine yazılan değişkenler değiştiğinde useEffect tekrar çalışır. Önce eski etkinin temizleme fonksiyonu çalışır, sonra yeni etki."
    ],
    kodOrnegi: `useEffect(() => {\n  const timer = setTimeout(() => console.log('Zaman doldu'), 1000);\n  return () => {\n    clearTimeout(timer);\n    console.log('Temizleme çalıştı.');\n  };\n}, []);`,
    beklenenCikti: "Temizleme çalıştı.",
    gorevKodu: `import { useEffect, useState } from 'react';\n\nexport default function App() {\n  const [mesaj, setMesaj] = useState("");\n\n  useEffect(() => {\n    // Cleanup fonksiyonu "Temizleme çalıştı." değerini set etmelidir.\n    return () => {\n      // TODO\n    };\n  }, []);\n\n  return <div>{mesaj || "Bileşen aktif"}</div>;\n}`,
    quizSorulari: [
      { soru: "Cleanup fonksiyonu useEffect içinde nasıl tanımlanır?", secenekler: ["cleanup() fonksiyonunu çağırarak", "useEffect içinde return ile bir fonksiyon dönerek", "İkinci bir useEffect yazarak", "Destructor metoduyla"], dogruCevap: 1 },
      { soru: "Cleanup fonksiyonu ne zaman çalışır?", secenekler: ["Sadece ilk render'da", "Bileşen unmount olduğunda veya bağımlılıklar değiştiğinde", "API isteği başarısız olduğunda", "Hata oluştuğunda"], dogruCevap: 1 },
      { soru: "Bağımlılık dizisine (dependency array) ne yazılmalıdır?", secenekler: ["Tüm state değişkenleri", "Hiçbir şey", "Etki içinde kullanılan tüm reaktif değerler (state, props)", "Sadece props'lar"], dogruCevap: 2 },
      { soru: "Memory leak nedir?", secenekler: ["Hafızadan dosya silmek", "Temizlenmeyen kaynakların belleği gereksiz işgal etmesi", "RAM'in dolması", "Bellek kartının bozulması"], dogruCevap: 1 },
      { soru: "Event listener eklendiğinde cleanup'ta ne yapılmalıdır?", secenekler: ["Listener sıfırlanmalı", "removeEventListener çağrılmalı", "useEffect tekrar çağrılmalı", "State sıfırlanmalı"], dogruCevap: 1 }
    ]
  },
  {
    id: "l11",
    kategori: "Hook'lar",
    baslik: "Form Yönetimi",
    slug: "form-yonetimi",
    aciklama: "React'ta kontrollü bileşenler (controlled components) ve form kullanımı.",
    icerik: [
      "React'ta form elemanları (input, textarea, select), kendi iç durumlarını tutmak yerine değerlerini React state'inden almalıdır. Buna 'Controlled Components' (Kontrollü Bileşenler) denir.",
      "Form elemanının value niteliğine state değeri bağlanır ve onChange olayında bu state güncellenir.",
      "Form submit edildiğinde sayfanın yenilenmesini engellemek için onSubmit olayında e.preventDefault() kullanılmalıdır."
    ],
    kodOrnegi: `const [isim, setIsim] = useState("");\nconst handleSubmit = (e) => {\n  e.preventDefault();\n  console.log("Form gönderildi: " + isim);\n};\nreturn <form onSubmit={handleSubmit}><input value={isim} onChange={e => setIsim(e.target.value)}/></form>;`,
    beklenenCikti: "Form gönderildi: Ahmet",
    gorevKodu: `import { useState } from 'react';\n\nexport default function App() {\n  const [isim, setIsim] = useState("Ahmet");\n  const [sonuc, setSonuc] = useState("");\n\n  // TODO: Submit fonksiyonunu tamamlayın\n  const onSubmit = (e: any) => {\n    // Form gönderildi: [isim] yazdırın\n  };\n\n  return (\n    <form onSubmit={onSubmit}>\n      <button type="submit">Gönder</button>\n    </form>\n  );\n}`,
    quizSorulari: [
      { soru: "Controlled Component nedir?", secenekler: ["Değerini DOM'un değil, React state'inin yönettiği form elemanlarıdır", "Şifreli form alanlarıdır", "Sadece adminlerin görebildiği bileşenlerdir", "Validasyon kütüphanesidir"], dogruCevap: 0 },
      { soru: "Bir input alanının değerini React state'ine nasıl bağlarız?", secenekler: ["id niteliği ile", "value={state} ve onChange={...} ile", "ref kullanarak", "name niteliği ile"], dogruCevap: 1 },
      { soru: "Form gönderildiğinde sayfanın yenilenmesini nasıl engelleriz?", secenekler: ["return false diyerek", "e.stopPropagation() ile", "e.preventDefault() ile", "Düğme tipini button yaparak"], dogruCevap: 2 },
      { soru: "Uncontrolled Component ne anlama gelir?", secenekler: ["Değeri React state'i yerine DOM tarafından yönetilen form elemanı", "Hatalı form elemanı", "Gizli form alanı", "Devre dışı bırakılmış input"], dogruCevap: 0 },
      { soru: "Bir form submit butonunun tipi ne olmalıdır?", secenekler: ['type="button"', 'type="submit"', 'type="form"', 'type="send"'], dogruCevap: 1 }
    ]
  },
  {
    id: "l12",
    kategori: "Hook'lar",
    baslik: "useRef Hook",
    slug: "useref-hook",
    aciklama: "Gerçek DOM elementlerine doğrudan erişmek ve render tetiklemeyen state tutmak.",
    icerik: [
      "useRef hook'u, React bileşeninin yaşam döngüsü boyunca kalıcı olan ancak güncellendiğinde bileşeni yeniden render etmeyen bir referans objesi oluşturur.",
      "İki ana kullanım amacı vardır: Birincisi, gerçek DOM elementlerine (örneğin bir input'a focus olmak) doğrudan erişmektir.",
      "İkincisi ise, bir değeri saklamak ancak o değer değiştiğinde ekranın güncellenmesini istemediğimiz (örneğin zamanlayıcı ID'leri tutmak) durumlardır."
    ],
    kodOrnegi: `const inputRef = useRef<HTMLInputElement>(null);\nconst odaklan = () => {\n  inputRef.current?.focus();\n};\nreturn <><input ref={inputRef} /><button onClick={odaklan}>Odaklan</button></>;`,
    beklenenCikti: "Odaklandı!",
    gorevKodu: `import { useRef, useState } from 'react';\n\nexport default function App() {\n  const [durum, setDurum] = useState("");\n  // TODO: Bir ref oluşturun\n\n  const handleFocus = () => {\n    // TODO: input alanına odaklanın ve durumu "Odaklandı!" yapın\n  };\n\n  return (\n    <div>\n      {/* input elemanına ref atayın */}\n      <input />\n      <button onClick={handleFocus}>Odaklan</button>\n      <p>{durum}</p>\n    </div>\n  );\n}`,
    quizSorulari: [
      { soru: "useRef değeri güncellendiğinde bileşen yeniden render edilir mi?", secenekler: ["Evet, her zaman", "Hayır, useRef güncellemeleri render tetiklemez", "Sadece string ise render edilir", "Emin değilim"], dogruCevap: 1 },
      { soru: "useRef'in tuttuğu asıl değere hangi özellik üzerinden erişilir?", secenekler: [".value", ".data", ".current", ".ref"], dogruCevap: 2 },
      { soru: "Bir DOM elementine referans atamak için hangi nitelik kullanılır?", secenekler: ["id", "name", "class", "ref"], dogruCevap: 3 },
      { soru: "useRef ile useState arasındaki temel fark nedir?", secenekler: ["useRef daha hızlıdır", "useRef değişiminde render tetiklenmez, useState'te tetiklenir", "useRef sadece string tutar", "useState kalıcıdır, useRef geçici"], dogruCevap: 1 },
      { soru: "useRef ne zaman kullanılmalıdır?", secenekler: ["Her state değişiminde", "DOM'a doğrudan erişmek veya render tetiklemeden değer saklamak için", "API çağrısı yapmak için", "Routing için"], dogruCevap: 1 }
    ]
  },
  {
    id: "l13",
    kategori: "Hook'lar",
    baslik: "useMemo ve useCallback",
    slug: "usememo-usecallback",
    aciklama: "Ağır hesaplamaları ve fonksiyon referanslarını önbelleğe (cache) alma.",
    icerik: [
      "React'ta bileşenler her render edildiğinde içlerindeki değişkenler ve fonksiyonlar yeniden oluşturulur. Bu performans sorunlarına yol açabilir.",
      "useMemo hook'u, ağır ve maliyetli bir hesaplamanın sonucunu (örneğin büyük bir listeyi filtreleme) bellekte tutar ve sadece bağımlılıkları değiştiğinde yeniden hesaplar.",
      "useCallback ise fonksiyonların referanslarını bellekte tutar. Bu sayede gereksiz yeniden render'ları önlemek için alt bileşenlere sürekli aynı fonksiyon referansını geçebilirsiniz."
    ],
    kodOrnegi: `const hesaplanmisDeger = useMemo(() => agirHesaplama(sayi), [sayi]);\nconst isleyici = useCallback(() => console.log(deger), [deger]);`,
    beklenenCikti: "Hesaplandı: 42",
    gorevKodu: `import { useMemo, useState } from 'react';\n\nexport default function App() {\n  const [deger, setDeger] = useState(42);\n  \n  // TODO: deger'i döndüren ve sadece deger değiştiğinde çalışan bir useMemo yazın\n  const sonuc = null;\n\n  return <div>Hesaplandı: {sonuc}</div>;\n}`,
    quizSorulari: [
      { soru: "useMemo neyi önbelleğe alır?", secenekler: ["Bir fonksiyon referansını", "Bir DOM elementini", "Bir fonksiyonun döndürdüğü değeri (hesaplamayı)", "Bileşenin kendisini"], dogruCevap: 2 },
      { soru: "useCallback genellikle ne için kullanılır?", secenekler: ["API isteği yapmak için", "Alt bileşenlere sürekli yeni referans gitmesini engellemek için", "State güncellemek için", "Zamanlayıcıları tutmak için"], dogruCevap: 1 },
      { soru: "useMemo ve useCallback ne zaman yeniden hesaplama yapar?", secenekler: ["Her render işleminde", "Hiçbir zaman", "Sadece bağımlılık dizisindeki değerler değiştiğinde", "Uygulama yeniden başladığında"], dogruCevap: 2 },
      { soru: "useMemo ve useCallback arasındaki fark nedir?", secenekler: ["useMemo değer, useCallback fonksiyon referansı döndürür", "useMemo daha hızlıdır", "useCallback bağımlılık almaz", "Fark yoktur"], dogruCevap: 0 },
      { soru: "Erken optimizasyon hakkında React'ın genel tavsiyesi nedir?", secenekler: ["Her zaman useMemo kullan", "Gerekmedikçe useMemo/useCallback ekleme, ölçüm yap", "useCallback her fonksiyon için zorunlu", "useMemo sadece büyük projelerde kullanılır"], dogruCevap: 1 }
    ]
  },
  {
    id: "l14",
    kategori: "Hook'lar",
    baslik: "Custom Hooks",
    slug: "custom-hooks",
    aciklama: "Birden fazla bileşende kullanılan mantıkları kendi hook'larınızda birleştirmeyi öğrenin.",
    icerik: [
      "Eğer iki farklı bileşen aynı state mantığını paylaşıyorsa, bu mantığı çıkarıp kendi Özel Hook'unuzu (Custom Hook) oluşturabilirsiniz.",
      "Özel hook'lar isimleri her zaman 'use' kelimesiyle başlayan normal JavaScript fonksiyonlarıdır (örneğin useFetch, useWindowSize).",
      "Kendi hook'larınızın içinde React'ın yerleşik hook'larını (useState, useEffect vb.) rahatlıkla kullanabilirsiniz."
    ],
    kodOrnegi: `function useToggle(baslangic = false) {\n  const [deger, setDeger] = useState(baslangic);\n  const toggle = () => setDeger(!deger);\n  return [deger, toggle];\n}`,
    beklenenCikti: "Hook çalıştı.",
    gorevKodu: `import { useState } from 'react';\n\n// TODO: basit bir Custom Hook yazın (useTest)\n// useTest bize "Hook çalıştı." string'ini dönsün\n\nexport default function App() {\n  // TODO: useTest hook'unu burada kullanın\n  const sonuc = "";\n  return <div>{sonuc}</div>;\n}`,
    quizSorulari: [
      { soru: "Özel hook isimleri hangi kelimeyle başlamalıdır?", secenekler: ["get", "fetch", "use", "make"], dogruCevap: 2 },
      { soru: "Özel hook'lar içinde diğer React hook'ları kullanılabilir mi?", secenekler: ["Evet, kullanılabilir", "Hayır, sadece fonksiyonel bileşenlerde kullanılır", "Sadece useState kullanılabilir", "Sadece useEffect kullanılabilir"], dogruCevap: 0 },
      { soru: "Özel hook'ların temel amacı nedir?", secenekler: ["Uygulama hızını artırmak", "DOM elementlerine daha hızlı erişmek", "Bileşenler arası state mantığını (logic) yeniden kullanılabilir yapmak", "Stilleri yönetmek"], dogruCevap: 2 },
      { soru: "useFetch adında bir custom hook ne yapıyor olabilir?", secenekler: ["CSS animasyonu çalar", "API'den veri çekme mantığını kapsar", "Form validasyonu yapar", "Router yönetir"], dogruCevap: 1 },
      { soru: "Custom hook'lar neye benzer?", secenekler: ["Sınıf bileşenlerine", "Normal JavaScript fonksiyonlarına (use prefix ile)", "React bileşenlerine (JSX döndürür)", "CSS modüllerine"], dogruCevap: 1 }
    ]
  },
  {
    id: "l15",
    kategori: "İleri Seviye",
    baslik: "Context API Giriş",
    slug: "context-api-giris",
    aciklama: "Prop drilling (sürekli prop aktarma) probleminden kurtulmak için Context API.",
    icerik: [
      "Bazen verileri (tema, kullanıcı bilgisi) uygulamanın çok alt kısımlarındaki bir bileşene iletmeniz gerekir. Props ile her katmandan tek tek aktarmak zordur (Prop Drilling).",
      "Context API, verileri bileşen ağacının her yerine doğrudan, ara katmanları atlayarak aktarmanızı sağlar.",
      "Bir Context oluşturmak için createContext() kullanılır ve bileşen ağacı bir Provider (Sağlayıcı) ile sarmalanır."
    ],
    kodOrnegi: `const TemaContext = createContext('light');\n// <TemaContext.Provider value="dark"> ...`,
    beklenenCikti: "Tema: Karanlık",
    gorevKodu: `import { createContext, useContext } from 'react';\n\nconst TemaContext = createContext("Aydınlık");\n\nfunction Icerik() {\n  // TODO: useContext kullanarak TemaContext verisini alın\n  return <div>Tema: Karanlık</div>;\n}\n\nexport default function App() {\n  return (\n    <TemaContext.Provider value="Karanlık">\n      <Icerik />\n    </TemaContext.Provider>\n  );\n}`,
    quizSorulari: [
      { soru: "Context API hangi problemi çözmek için tasarlanmıştır?", secenekler: ["Veritabanı bağlantısı", "Performans optimizasyonu", "Prop Drilling (Aşırı prop aktarımı)", "Routing (Sayfa yönlendirmesi)"], dogruCevap: 2 },
      { soru: "Context oluşturmak için hangi fonksiyon kullanılır?", secenekler: ["useContext()", "createContext()", "makeContext()", "getContext()"], dogruCevap: 1 },
      { soru: "Context verisini ağacın alt kısmına sağlamak için ne kullanılır?", secenekler: ["<Context.Provider>", "<Context.Consumer>", "<Context.Supplier>", "<Context.Source>"], dogruCevap: 0 },
      { soru: "Context değerini okumak için hangi hook kullanılır?", secenekler: ["useState", "useEffect", "useContext", "useProvider"], dogruCevap: 2 },
      { soru: "Prop Drilling nedir?", secenekler: ["Props ile performans testi yapmak", "Veriyi ihtiyaç duymayan katmanlardan geçirerek aşağıya aktarmak", "Props'ı silmek", "Bileşen yapısını bozmak"], dogruCevap: 1 }
    ]
  },
  {
    id: "l16",
    kategori: "İleri Seviye",
    baslik: "Context API İleri Seviye",
    slug: "context-api-ileri",
    aciklama: "Context değerlerini güncelleyen fonksiyonları alt bileşenlere sağlama.",
    icerik: [
      "Context ile sadece sabit verileri değil, state değişkenlerini ve onları güncelleyen fonksiyonları da aktarabilirsiniz.",
      "Böylece uygulamanın herhangi bir yerindeki bir bileşen, global bir state'i (örneğin kullanıcı girişi) kolaylıkla değiştirebilir.",
      "Context'ten değer okumak için güncel ve en pratik yöntem useContext hook'unu kullanmaktır."
    ],
    kodOrnegi: `const value = { user, setUser };\nreturn <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;`,
    beklenenCikti: "Kullanıcı güncellendi.",
    gorevKodu: `export default function App() {\n  // "Kullanıcı güncellendi." metnini dönün\n  return <div>Kullanıcı güncellendi.</div>;\n}`,
    quizSorulari: [
      { soru: "Context ile fonksiyon aktarılabilir mi?", secenekler: ["Evet, state ve güncelleme fonksiyonları value prop'una verilebilir", "Hayır, sadece string aktarılabilir", "Hayır, sadece sayı aktarılabilir", "Hayır, sadece boolean aktarılabilir"], dogruCevap: 0 },
      { soru: "Context verisini okumak için hangi hook kullanılır?", secenekler: ["useState", "useContext", "useProvider", "useGlobal"], dogruCevap: 1 },
      { soru: "Context değeri değiştiğinde, bu context'i kullanan bileşenlere ne olur?", secenekler: ["Hiçbir şey olmaz", "Sadece provider güncellenir", "Tüm uygulama baştan başlar", "Bu veriyi tüketen bileşenler otomatik olarak yeniden render edilir"], dogruCevap: 3 },
      { soru: "Context Provider'ı nereye yerleştirmek en doğrusudur?", secenekler: ["En alt bileşene", "Sadece bir bileşene", "Context'e ihtiyaç duyan tüm bileşenlerin üst katmanına", "Herhangi bir yere"], dogruCevap: 2 },
      { soru: "Context ne zaman Redux gibi bir alternatife ihtiyaç duyar?", secenekler: ["Her zaman", "Küçük projelerde", "Çok sık güncellenen karmaşık global state yönetiminde", "Hiçbir zaman"], dogruCevap: 2 }
    ]
  },
  {
    id: "l17",
    kategori: "İleri Seviye",
    baslik: "React Router Temelleri",
    slug: "react-router-temelleri",
    aciklama: "Single Page Application (SPA) içinde sayfa yönlendirmeleri yapma.",
    icerik: [
      "React Router, tek sayfalı uygulamalarda (SPA) sayfa yenilenmeden farklı bileşenleri ekran göstermeyi sağlayan standart kütüphanedir.",
      "Geleneksel 'a' etiketleri yerine 'Link' bileşeni kullanılarak sayfa geçişleri tarayıcı tarafında yönetilir.",
      "BrowserRouter, Routes ve Route temel bileşenlerdir. URL'deki yola (path) karşılık gelen bileşeni render ederler."
    ],
    kodOrnegi: `<Routes>\n  <Route path="/" element={<Home />} />\n  <Route path="/hakkinda" element={<About />} />\n</Routes>`,
    beklenenCikti: "Sayfa geçişi yapıldı.",
    gorevKodu: `export default function App() {\n  return <div>Sayfa geçişi yapıldı.</div>;\n}`,
    quizSorulari: [
      { soru: "React Router'da sayfa geçişi için hangi bileşen kullanılır?", secenekler: ["<a href=...>", "<Link to=...>", "<Redirect href=...>", "<Nav go=...>"], dogruCevap: 1 },
      { soru: "Bir rotayı tanımlamak için hangi bileşen kullanılır?", secenekler: ["<Path>", "<Url>", "<Route>", "<Location>"], dogruCevap: 2 },
      { soru: "React Router kullanmanın temel avantajı nedir?", secenekler: ["Daha hızlı veritabanı sorgusu", "CSS animasyonları sağlaması", "Sayfa yenilenmesi olmadan daha hızlı kullanıcı deneyimi sunması", "API kısıtlamalarını aşması"], dogruCevap: 2 },
      { soru: "URL parametrelerini (örn. /kullanici/:id) okumak için hangi hook kullanılır?", secenekler: ["useLocation", "useParams", "useNavigate", "useRoute"], dogruCevap: 1 },
      { soru: "Kod içinde programatik yönlendirme yapmak için hangi hook kullanılır?", secenekler: ["useRedirect", "useHistory", "useNavigate", "useRoute"], dogruCevap: 2 }
    ]
  },
  {
    id: "l18",
    kategori: "İleri Seviye",
    baslik: "API Fetching",
    slug: "api-fetching",
    aciklama: "Dış servislerden veri çekme, Loading ve Error durumlarını yönetme.",
    icerik: [
      "Modern web uygulamalarının çoğu harici API'lerden veri alır. Bu işlem genellikle useEffect içinde yerel fetch API'si veya Axios gibi araçlarla yapılır.",
      "Veri asenkron olarak gelir. Bu nedenle veri gelirken kullanıcıya bir 'Yükleniyor (Loading)' durumu göstermek iyi bir pratiktir.",
      "Aynı şekilde, ağ hatası gibi durumları da yakalayıp kullanıcıya bildirmek uygulamanın sağlamlığını artırır."
    ],
    kodOrnegi: `useEffect(() => {\n  setLoading(true);\n  fetch('api/veri').then(res => res.json())\n    .then(data => setData(data))\n    .catch(err => setError(err))\n    .finally(() => setLoading(false));\n}, []);`,
    beklenenCikti: "Veri alındı.",
    gorevKodu: `export default function App() {\n  // Uygulamanızda veri çekildi farz edelim\n  return <div>Veri alındı.</div>;\n}`,
    quizSorulari: [
      { soru: "API'den veri çekme işlemi genellikle hangi hook içinde başlatılır?", secenekler: ["useState", "useEffect", "useMemo", "useRef"], dogruCevap: 1 },
      { soru: "Asenkron veri isteklerinde kullanıcı deneyimi için ne gösterilmelidir?", secenekler: ["Boş beyaz sayfa", "Loading (Yükleniyor) durumu", "Hata mesajı", "Eski veri"], dogruCevap: 1 },
      { soru: "Fetch API kullanırken oluşan hatalar hangi blokta yakalanır?", secenekler: ["then()", "finally()", "catch()", "start()"], dogruCevap: 2 },
      { soru: "async/await ile fetch kullanırken hata yakalamak için ne kullanılır?", secenekler: ["if/else", "try/catch", "then/catch", "do/while"], dogruCevap: 1 },
      { soru: "JSON formatındaki fetch yanıtını parse etmek için ne çağrılır?", secenekler: ["response.text()", "response.json()", "JSON.parse(response)", "response.data()"], dogruCevap: 1 }
    ]
  },
  {
    id: "l19",
    kategori: "İleri Seviye",
    baslik: "Error Boundaries",
    slug: "error-boundaries",
    aciklama: "Uygulamanın çökmesini önlemek için React hata sınırlarını kullanma.",
    icerik: [
      "Bir React bileşeninde çalışma zamanında oluşan hatalar, yakalanmazsa tüm uygulamanın beyaz ekran vererek çökmesine neden olur.",
      "Hata Sınırları (Error Boundaries), alt bileşenlerindeki JavaScript hatalarını yakalayan ve uygulamanın çökmesi yerine bir 'fallback UI' (yedek arayüz) gösteren bileşenlerdir.",
      "Şu an itibariyle Hata Sınırları sadece Sınıf (Class) bileşenleriyle yazılabilmektedir (componentDidCatch metodu)."
    ],
    kodOrnegi: `class ErrorBoundary extends React.Component {\n  componentDidCatch(error: any) { this.setState({ hasError: true }); }\n  render() { return this.state.hasError ? <p>Hata</p> : this.props.children; }\n}`,
    beklenenCikti: "Hata yakalandı.",
    gorevKodu: `export default function App() {\n  return <div>Hata yakalandı.</div>;\n}`,
    quizSorulari: [
      { soru: "Hata Sınırları (Error Boundaries) ne işe yarar?", secenekler: ["API isteklerindeki hataları çözer", "Tarayıcı çökmelerini engeller", "Bileşen ağacındaki hataları yakalayıp uygulamanın çökmesini engeller", "Syntax hatalarını derleme zamanında bulur"], dogruCevap: 2 },
      { soru: "Şu an için Error Boundary bileşenleri nasıl yazılmalıdır?", secenekler: ["Sadece Fonksiyonel bileşenlerle", "Sadece Sınıf (Class) bileşenlerle", "Her ikisiyle de yazılabilir", "Hook'lar ile yazılır"], dogruCevap: 1 },
      { soru: "Yakalanmayan bir React hatası neye sebep olur?", secenekler: ["Console'da uyarı verip devam eder", "Sadece o bileşen render edilmez", "Tüm React uygulamasının çökmesine (beyaz ekran) sebep olur", "Sayfayı yeniler"], dogruCevap: 2 },
      { soru: "Fallback UI nedir?", secenekler: ["API yanıt şablonu", "Hata oluştuğunda gösterilen yedek arayüz", "Yükleme animasyonu", "Boş bileşen"], dogruCevap: 1 },
      { soru: "componentDidCatch metodu ne ile birlikte kullanılır?", secenekler: ["Fonksiyonel bileşenler", "Hook'lar", "Class bileşenleri", "Context"], dogruCevap: 2 }
    ]
  },
  {
    id: "l20",
    kategori: "İleri Seviye",
    baslik: "Performans Optimizasyonu",
    slug: "performans-optimizasyonu",
    aciklama: "React.memo ve Code Splitting (React.lazy) ile daha hızlı uygulamalar.",
    icerik: [
      "React uygulamanız büyüdükçe performans sorunları yaşanabilir. İlk kural, bir sorun görmeden erken optimizasyon yapmamaktır.",
      "React.memo, sadece aldığı proplar değiştiğinde bileşenin yeniden render edilmesini sağlayarak gereksiz güncellemeleri önler.",
      "React.lazy ve Suspense kullanarak Code Splitting (Kod Bölme) yapabilir, kullanıcı sadece ihtiyaç duyduğunda ilgili sayfaların kodlarını indirebilirsiniz."
    ],
    kodOrnegi: `const AgirBilesen = React.lazy(() => import('./AgirBilesen'));\n\n// Kullanımı: <Suspense fallback={<Loading />}><AgirBilesen /></Suspense>`,
    beklenenCikti: "Optimizasyon tamamlandı.",
    gorevKodu: `export default function App() {\n  return <div>Optimizasyon tamamlandı.</div>;\n}`,
    quizSorulari: [
      { soru: "React.lazy ne için kullanılır?", secenekler: ["Animasyonları yavaşlatmak için", "Zamanlayıcı (timer) oluşturmak için", "Kod bölme (Code splitting) ve asenkron bileşen yükleme için", "Uygulamayı dondurmak için"], dogruCevap: 2 },
      { soru: "React.memo bir bileşeni neye göre optimize eder?", secenekler: ["Props değerlerinin değişip değişmediğine bakarak", "Dosya boyutuna bakarak", "Kullanıcı sayısına göre", "Sayfa yüklenme süresine göre"], dogruCevap: 0 },
      { soru: "React.lazy ile asenkron yüklenen bileşenler hangi yapı ile sarmalanmalıdır?", secenekler: ["<ErrorBoundary>", "<Suspense>", "<Loading>", "<Async>"], dogruCevap: 1 },
      { soru: "Code Splitting'in amacı nedir?", secenekler: ["Kodu daha küçük parçalara bölerek ilk yüklenme süresini azaltmak", "Kodu şifrelemek", "Kodu farklı dillere çevirmek", "Kodu yedeklemek"], dogruCevap: 0 },
      { soru: "Performans optimizasyonuna ne zaman başlanmalıdır?", secenekler: ["Her zaman başlangıçta", "Asla yapılmamalı", "Gerçek bir performans sorunu tespit edildiğinde", "Sadece büyük projelerde"], dogruCevap: 2 }
    ]
  }
];
