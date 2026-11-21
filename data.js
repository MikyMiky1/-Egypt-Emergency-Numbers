const LANGS = [
  {code:"ar", native:"العربية"},
  {code:"en", native:"English"},
  {code:"ru", native:"Русский"},
  {code:"de", native:"Deutsch"},
  {code:"fr", native:"Français"},
  {code:"it", native:"Italiano"},
  {code:"es", native:"Español"},
  {code:"zh", native:"中文"},
  {code:"ja", native:"日本語"},
  {code:"pl", native:"Polski"},
  {code:"nl", native:"Nederlands"},
  {code:"uk", native:"Українська"},
  {code:"tr", native:"Türkçe"},
  {code:"cs", native:"Čeština"}
];

const T = {
ar:{title:"أرقام الطوارئ في مصر",subtitle:"كل أرقام الطوارئ الأساسية في مكان واحد — بالعربية والإنجليزية",
 langTitle:"اختر لغتك",search:"ابحث عن خدمة أو رقم…",call:"اتصال",copy:"نسخ",copied:"تم النسخ",noResults:"لا توجد نتائج مطابقة",
 notesTitle:"ملاحظات هامة",s1:"أرقام الطوارئ الأساسية",s2:"الطوارئ الطبية والصحية",s3:"الدعم الاجتماعي وحماية الفئات",
 s4:"المرافق والخدمات اليومية",s5:"النقل والطرق السريعة",s6:"الصحة النفسية وعلاج الإدمان",
 n1:"الأرقام التي تبدأ بـ 16 أو 19 غالباً مجانية من الهاتف الأرضي، وقد تكون بتكلفة من المحمول.",
 n2:"الرقم 112 هو الرقم الموحد الجديد ويغطي الشرطة والإسعاف والمطافئ تدريجياً، لكن الأرقام التخصصية تظل الأسرع.",
 n3:"احفظ هذه الأرقام في هاتفك قبل أن تحتاجها. في الطوارئ حافظ على هدوئك واذكر موقعك بوضوح.",
 footer:"هذا مرجع معلوماتي — قد تتغير الأرقام، تحقق دائماً من المصادر الرسمية."},

en:{title:"Egypt Emergency Numbers",subtitle:"All essential emergency numbers in one place — Arabic & English",
 langTitle:"Choose your language",search:"Search by service or number…",call:"Call",copy:"Copy",copied:"Copied",noResults:"No matching results",
 notesTitle:"Important Notes",s1:"Core Emergency Numbers",s2:"Medical & Health Emergency",s3:"Social Support & Protection",
 s4:"Utilities & Daily Services",s5:"Transport & Highways",s6:"Mental Health & Addiction",
 n1:"Numbers starting with 16 or 19 are usually free from landlines and may cost a fee from mobile phones.",
 n2:"112 is the new unified emergency number, gradually covering police, ambulance and fire. The dedicated numbers above are still the fastest.",
 n3:"Save these numbers in your phone before you need them. In an emergency, stay calm and state your location clearly.",
 footer:"Informational reference only — numbers may change, always verify with official sources."},

ru:{title:"Экстренные номера Египта",subtitle:"Все важные экстренные номера в одном месте — на арабском и английском",
 langTitle:"Выберите язык",search:"Поиск по услуге или номеру…",call:"Позвонить",copy:"Копировать",copied:"Скопировано",noResults:"Ничего не найдено",
 notesTitle:"Важные примечания",s1:"Основные экстренные номера",s2:"Медицинская помощь",s3:"Социальная поддержка и защита",
 s4:"Коммунальные службы",s5:"Транспорт и дороги",s6:"Психическое здоровье и зависимость",
 n1:"Номера, начинающиеся с 16 или 19, обычно бесплатны со стационарных телефонов и могут быть платными с мобильных.",
 n2:"112 — новый единый номер экстренных служб (полиция, скорая, пожарные). Специализированные номера пока быстрее.",
 n3:"Сохраните эти номера заранее. В экстренной ситуации сохраняйте спокойствие и чётко назовите своё местоположение.",
 footer:"Информационный справочник — номера могут меняться, проверяйте официальные источники."},

de:{title:"Notrufnummern in Ägypten",subtitle:"Alle wichtigen Notrufnummern an einem Ort — Arabisch und Englisch",
 langTitle:"Sprache wählen",search:"Nach Dienst oder Nummer suchen…",call:"Anrufen",copy:"Kopieren",copied:"Kopiert",noResults:"Keine Ergebnisse",
 notesTitle:"Wichtige Hinweise",s1:"Wichtigste Notrufnummern",s2:"Medizinischer Notfall",s3:"Soziale Unterstützung & Schutz",
 s4:"Versorgung & Alltagsservices",s5:"Verkehr & Schnellstraßen",s6:"Psychische Gesundheit & Sucht",
 n1:"Nummern mit 16 oder 19 sind vom Festnetz meist kostenlos, vom Handy eventuell kostenpflichtig.",
 n2:"112 ist die neue einheitliche Notrufnummer (Polizei, Rettung, Feuerwehr). Die speziellen Nummern sind weiterhin am schnellsten.",
 n3:"Speichern Sie diese Nummern vorher. Bleiben Sie im Notfall ruhig und nennen Sie Ihren Standort klar.",
 footer:"Nur zur Information — Nummern können sich ändern, prüfen Sie offizielle Quellen."},

fr:{title:"Numéros d'urgence en Égypte",subtitle:"Tous les numéros d'urgence essentiels au même endroit — arabe et anglais",
 langTitle:"Choisissez votre langue",search:"Rechercher un service ou un numéro…",call:"Appeler",copy:"Copier",copied:"Copié",noResults:"Aucun résultat",
 notesTitle:"Remarques importantes",s1:"Numéros d'urgence principaux",s2:"Urgences médicales et sanitaires",s3:"Soutien social et protection",
 s4:"Services et pannes du quotidien",s5:"Transports et autoroutes",s6:"Santé mentale et addictions",
 n1:"Les numéros commençant par 16 ou 19 sont généralement gratuits depuis un fixe et payants depuis un mobile.",
 n2:"Le 112 est le nouveau numéro d'urgence unique (police, ambulance, pompiers). Les numéros spécifiques restent les plus rapides.",
 n3:"Enregistrez ces numéros à l'avance. En cas d'urgence, restez calme et indiquez clairement votre position.",
 footer:"Référence informative — les numéros peuvent changer, vérifiez les sources officielles."},

it:{title:"Numeri di emergenza in Egitto",subtitle:"Tutti i numeri di emergenza essenziali in un unico posto — arabo e inglese",
 langTitle:"Scegli la lingua",search:"Cerca un servizio o un numero…",call:"Chiama",copy:"Copia",copied:"Copiato",noResults:"Nessun risultato",
 notesTitle:"Note importanti",s1:"Numeri di emergenza principali",s2:"Emergenze mediche e sanitarie",s3:"Sostegno sociale e protezione",
 s4:"Servizi e guasti quotidiani",s5:"Trasporti e autostrade",s6:"Salute mentale e dipendenze",
 n1:"I numeri che iniziano con 16 o 19 sono di solito gratuiti da rete fissa e a pagamento da cellulare.",
 n2:"Il 112 è il nuovo numero unico di emergenza (polizia, ambulanza, vigili del fuoco). I numeri specifici restano i più rapidi.",
 n3:"Salva questi numeri in anticipo. In emergenza mantieni la calma e indica chiaramente la tua posizione.",
 footer:"Solo riferimento informativo — i numeri possono cambiare, verifica le fonti ufficiali."},

es:{title:"Números de emergencia en Egipto",subtitle:"Todos los números de emergencia esenciales en un solo lugar — árabe e inglés",
 langTitle:"Elige tu idioma",search:"Buscar un servicio o número…",call:"Llamar",copy:"Copiar",copied:"Copiado",noResults:"Sin resultados",
 notesTitle:"Notas importantes",s1:"Números de emergencia principales",s2:"Emergencias médicas y sanitarias",s3:"Apoyo social y protección",
 s4:"Servicios y averías del día a día",s5:"Transporte y autopistas",s6:"Salud mental y adicciones",
 n1:"Los números que empiezan por 16 o 19 suelen ser gratuitos desde teléfono fijo y de pago desde móvil.",
 n2:"El 112 es el nuevo número único de emergencia (policía, ambulancia, bomberos). Los números específicos siguen siendo los más rápidos.",
 n3:"Guarda estos números con antelación. En una emergencia, mantén la calma e indica claramente tu ubicación.",
 footer:"Solo referencia informativa — los números pueden cambiar, verifica las fuentes oficiales."},

zh:{title:"埃及紧急电话号码",subtitle:"所有重要紧急电话汇总 — 阿拉伯语与英语",
 langTitle:"选择语言",search:"按服务或号码搜索…",call:"拨打",copy:"复制",copied:"已复制",noResults:"没有结果",
 notesTitle:"重要提示",s1:"主要紧急电话",s2:"医疗与卫生紧急情况",s3:"社会支持与保护",
 s4:"公共设施与日常服务",s5:"交通与高速公路",s6:"心理健康与戒瘾",
 n1:"以 16 或 19 开头的号码通常用固定电话拨打免费，用手机拨打可能收费。",
 n2:"112 是新的统一紧急号码（警察、救护车、消防）。专用号码目前仍是最快的。",
 n3:"请提前保存这些号码。遇到紧急情况时保持冷静，清楚说明您的位置。",
 footer:"仅供参考 — 号码可能变更，请以官方信息为准。"},

ja:{title:"エジプトの緊急電話番号",subtitle:"主要な緊急連絡先を一か所に — アラビア語と英語",
 langTitle:"言語を選択",search:"サービスまたは番号で検索…",call:"発信",copy:"コピー",copied:"コピーしました",noResults:"該当なし",
 notesTitle:"重要な注意",s1:"主要な緊急番号",s2:"医療・健康の緊急連絡先",s3:"社会的支援と保護",
 s4:"ライフライン・日常サービス",s5:"交通・高速道路",s6:"メンタルヘルスと依存症",
 n1:"16 または 19 で始まる番号は固定電話からは通常無料、携帯電話からは有料の場合があります。",
 n2:"112 は新しい統一緊急番号（警察・救急・消防）です。専用番号の方が今はまだ早い場合があります。",
 n3:"必要なときのために番号を保存してください。緊急時は落ち着いて、自分の位置をはっきり伝えましょう。",
 footer:"情報提供のみ — 番号は変更される場合があります。公式情報をご確認ください。"},

pl:{title:"Numery alarmowe w Egipcie",subtitle:"Wszystkie ważne numery alarmowe w jednym miejscu — po arabsku i angielsku",
 langTitle:"Wybierz język",search:"Szukaj usługi lub numeru…",call:"Zadzwoń",copy:"Kopiuj",copied:"Skopiowano",noResults:"Brak wyników",
 notesTitle:"Ważne uwagi",s1:"Podstawowe numery alarmowe",s2:"Nagłe wypadki medyczne",s3:"Wsparcie społeczne i ochrona",
 s4:"Media i usługi codzienne",s5:"Transport i autostrady",s6:"Zdrowie psychiczne i uzależnienia",
 n1:"Numery zaczynające się od 16 lub 19 są zwykle bezpłatne z telefonu stacjonarnego, a z komórki mogą być płatne.",
 n2:"112 to nowy wspólny numer alarmowy (policja, pogotowie, straż). Numery specjalne są nadal najszybsze.",
 n3:"Zapisz te numery wcześniej. W nagłym wypadku zachowaj spokój i wyraźnie podaj swoją lokalizację.",
 footer:"Informacja poglądowa — numery mogą się zmieniać, sprawdzaj oficjalne źródła."},

nl:{title:"Noodnummers in Egypte",subtitle:"Alle belangrijke noodnummers op één plek — Arabisch en Engels",
 langTitle:"Kies je taal",search:"Zoek op dienst of nummer…",call:"Bellen",copy:"Kopiëren",copied:"Gekopieerd",noResults:"Geen resultaten",
 notesTitle:"Belangrijke opmerkingen",s1:"Belangrijkste noodnummers",s2:"Medische noodgevallen",s3:"Sociale steun en bescherming",
 s4:"Nutsdiensten en dagelijkse services",s5:"Vervoer en snelwegen",s6:"Geestelijke gezondheid en verslaving",
 n1:"Nummers die beginnen met 16 of 19 zijn meestal gratis vanaf een vaste lijn en mogelijk betaald vanaf mobiel.",
 n2:"112 is het nieuwe uniforme noodnummer (politie, ambulance, brandweer). De speciale nummers zijn nog steeds het snelst.",
 n3:"Sla deze nummers vooraf op. Blijf kalm in een noodgeval en geef je locatie duidelijk door.",
 footer:"Alleen ter informatie — nummers kunnen wijzigen, controleer officiële bronnen."},

uk:{title:"Екстрені номери Єгипту",subtitle:"Усі важливі екстрені номери в одному місці — арабською та англійською",
 langTitle:"Оберіть мову",search:"Пошук за послугою або номером…",call:"Зателефонувати",copy:"Копіювати",copied:"Скопійовано",noResults:"Нічого не знайдено",
 notesTitle:"Важливі примітки",s1:"Основні екстрені номери",s2:"Медична допомога",s3:"Соціальна підтримка та захист",
 s4:"Комунальні служби",s5:"Транспорт і дороги",s6:"Психічне здоров'я та залежність",
 n1:"Номери, що починаються з 16 або 19, зазвичай безкоштовні зі стаціонарного телефону і можуть бути платними з мобільного.",
 n2:"112 — новий єдиний номер екстрених служб (поліція, швидка, пожежна). Спеціалізовані номери поки що швидші.",
 n3:"Збережіть ці номери заздалегідь. У надзвичайній ситуації зберігайте спокій і чітко назвіть своє місцезнаходження.",
 footer:"Інформаційний довідник — номери можуть змінюватися, перевіряйте офіційні джерела."},

tr:{title:"Mısır Acil Numaraları",subtitle:"Tüm önemli acil numaralar tek yerde — Arapça ve İngilizce",
 langTitle:"Dil seçin",search:"Hizmet veya numara ara…",call:"Ara",copy:"Kopyala",copied:"Kopyalandı",noResults:"Sonuç yok",
 notesTitle:"Önemli notlar",s1:"Temel acil numaralar",s2:"Tıbbi acil durumlar",s3:"Sosyal destek ve koruma",
 s4:"Altyapı ve günlük hizmetler",s5:"Ulaşım ve otoyollar",s6:"Ruh sağlığı ve bağımlılık",
 n1:"16 veya 19 ile başlayan numaralar sabit hatlardan genellikle ücretsizdir, cep telefonlarından ücretli olabilir.",
 n2:"112 yeni birleşik acil numaradır (polis, ambulans, itfaiye). Özel numaralar hâlâ en hızlısıdır.",
 n3:"Bu numaraları önceden kaydedin. Acil durumda sakin olun ve konumunuzu net şekilde bildirin.",
 footer:"Yalnızca bilgilendirme amaçlıdır — numaralar değişebilir, resmî kaynakları kontrol edin."},

cs:{title:"Tísňová čísla v Egyptě",subtitle:"Všechna důležitá tísňová čísla na jednom místě — arabsky a anglicky",
 langTitle:"Vyberte jazyk",search:"Hledat službu nebo číslo…",call:"Volat",copy:"Kopírovat",copied:"Zkopírováno",noResults:"Žádné výsledky",
 notesTitle:"Důležité poznámky",s1:"Základní tísňová čísla",s2:"Zdravotní naléhavé případy",s3:"Sociální podpora a ochrana",
 s4:"Inženýrské sítě a denní služby",s5:"Doprava a dálnice",s6:"Duševní zdraví a závislosti",
 n1:"Čísla začínající 16 nebo 19 jsou obvykle zdarma z pevné linky, z mobilu mohou být zpoplatněna.",
 n2:"112 je nové jednotné tísňové číslo (policie, sanitka, hasiči). Specializovaná čísla jsou zatím rychlejší.",
 n3:"Uložte si tato čísla předem. V nouzi zachovejte klid a jasně uveďte svou polohu.",
 footer:"Pouze informativní přehled — čísla se mohou měnit, ověřujte oficiální zdroje."}
};

/* Extra UI strings. Any language not listed here falls back to English. */
const X = {
en:{all:"All",pinned:"Pinned",pin:"Pin",unpin:"Unpin",wa:"WhatsApp",loc:"Find my location",locHelp:"Read these coordinates to the operator.",locWait:"Finding your position…",locErr:"Location unavailable. Turn on location services and allow access.",openMap:"Open map",theme:"Theme",auto:"Auto",light:"Light",dark:"Dark",size:"Text size",crit:"Emergency calls",credits:"Credits",sources:"Lines operated by",built:"Designed and built by",reviewed:"Last reviewed",print:"Print",noPins:"Pin a number to keep it at the top.",lang:"Language",found:"found",save:"Save contact",saveAll:"Download all contacts",saveAllHelp:"One .vcf file. Open it to add every number to your phone.",saved:"Contact file downloaded"},
ar:{all:"الكل",pinned:"المثبّتة",pin:"تثبيت",unpin:"إلغاء التثبيت",wa:"واتساب",loc:"حدّد موقعي",locHelp:"اقرأ هذه الإحداثيات على المسؤول.",locWait:"جارٍ تحديد موقعك…",locErr:"تعذّر تحديد الموقع. فعّل خدمات الموقع واسمح بالوصول.",openMap:"افتح الخريطة",theme:"المظهر",auto:"تلقائي",light:"فاتح",dark:"داكن",size:"حجم الخط",crit:"اتصالات الطوارئ",credits:"الشكر والتقدير",sources:"الجهات المشغّلة للخطوط",built:"تصميم وبرمجة",reviewed:"آخر مراجعة",print:"طباعة",noPins:"ثبّت رقماً ليبقى في الأعلى.",lang:"اللغة",found:"نتيجة",save:"حفظ جهة الاتصال",saveAll:"تحميل كل جهات الاتصال",saveAllHelp:"ملف .vcf واحد. افتحه لإضافة كل الأرقام إلى هاتفك.",saved:"تم تنزيل ملف جهات الاتصال"}
};

const CREDITS = {
  builder: "Your Name",          // edit: shown in the footer
  url: "",                       // optional link for the builder
  reviewed: "November 2026",
  sources: [
    ["وزارة الداخلية","Ministry of Interior"],
    ["وزارة الصحة والسكان","Ministry of Health and Population"],
    ["وزارة التضامن الاجتماعي","Ministry of Social Solidarity"],
    ["المجلس القومي للمرأة","National Council for Women"],
    ["هيئة الدواء المصرية","Egyptian Drug Authority"],
    ["الجهاز القومي لتنظيم الاتصالات","National Telecom Regulatory Authority"],
    ["جهاز حماية المستهلك","Consumer Protection Agency"]
  ]
};

const DATA = [
 {
  "id": "core",
  "key": "s1",
  "ar": "أرقام الطوارئ الأساسية",
  "en": "Core Emergency Numbers",
  "items": [
   {
    "n": "112",
    "a": "الطوارئ الموحدة",
    "e": "Unified Emergency (NAS)",
    "an": "رقم موحد جديد يغطي الشرطة والإسعاف والمطافئ تدريجياً.",
    "en": "New unified number covering police, ambulance and fire, rolled out gradually."
   },
   {
    "n": "122",
    "a": "شرطة النجدة",
    "e": "Police",
    "an": "للبلاغات الأمنية والجنائية العامة.",
    "en": "General security and criminal reports."
   },
   {
    "n": "123",
    "a": "الإسعاف",
    "e": "Ambulance",
    "an": "للطوارئ الطبية والحالات الحرجة.",
    "en": "Medical emergencies and critical cases."
   },
   {
    "n": "180",
    "a": "المطافئ (الحماية المدنية)",
    "e": "Fire Brigade (Civil Protection)",
    "an": "للحرائق والمخاطر المدنية.",
    "en": "Fires and civil hazards."
   },
   {
    "n": "128",
    "a": "شرطة المرور",
    "e": "Traffic Police",
    "an": "لحوادث الطرق والمشاكل المرورية.",
    "en": "Road accidents and traffic problems."
   },
   {
    "n": "126",
    "a": "شرطة السياحة",
    "e": "Tourist Police",
    "an": "لمساعدة السياح، وبعض أفرادها يتحدثون الإنجليزية.",
    "en": "Tourist assistance. Some officers speak English."
   }
  ]
 },
 {
  "id": "medical",
  "key": "s2",
  "ar": "الطوارئ الطبية والصحية",
  "en": "Medical & Health",
  "items": [
   {
    "n": "137",
    "a": "الرعاية الحرجة (توفير سرير)",
    "e": "Critical Care Bed Coordination",
    "an": "للتنسيق لتوفير سرير رعاية مركزة أو حضانة. الرقم البديل: 16474",
    "en": "Coordinates an ICU or incubator bed in a critical case. Alternative: 16474",
    "alt": "16474"
   },
   {
    "n": "105",
    "a": "وزارة الصحة (استفسارات)",
    "e": "Ministry of Health",
    "an": "استشارات طبية عامة وشكاوى صحية، على مدار الساعة.",
    "en": "General medical advice and health complaints, 24 hours."
   },
   {
    "n": "15301",
    "a": "هيئة الدواء المصرية",
    "e": "Egyptian Drug Authority",
    "an": "للاستفسارات المتعلقة بالأدوية.",
    "en": "Medicine-related enquiries."
   },
   {
    "n": "15335",
    "a": "شكاوى الخدمات الصحية",
    "e": "Health Services Complaints",
    "an": "لتقديم شكوى ضد جهة صحية.",
    "en": "File a complaint against a health facility."
   },
   {
    "n": "4862244",
    "a": "مركز السموم (الإسكندرية)",
    "e": "Poison Center (Alexandria)",
    "an": "لحالات التسمم. قد يكون الرقم محلياً (كود الإسكندرية 03).",
    "en": "For poisoning cases. May be local (Alexandria, area code 03)."
   }
  ]
 },
 {
  "id": "mental",
  "key": "s6",
  "ar": "الصحة النفسية وعلاج الإدمان",
  "en": "Mental Health & Addiction",
  "items": [
   {
    "n": "16328",
    "a": "الدعم النفسي",
    "e": "Psychological Support",
    "an": "الأمانة العامة للصحة النفسية وعلاج الإدمان، على مدار الساعة.",
    "en": "General Secretariat of Mental Health and Addiction Treatment, around the clock."
   },
   {
    "n": "16023",
    "a": "علاج الإدمان",
    "e": "Addiction Treatment",
    "an": "صندوق مكافحة وعلاج الإدمان والتعاطي. سري ومجاني.",
    "en": "Fund for Drug Control and Treatment of Addiction. Free and confidential."
   },
   {
    "n": "16805",
    "a": "الإقلاع عن التدخين",
    "e": "Quit Smoking",
    "an": "خط مساعدة للإقلاع عن التدخين.",
    "en": "Helpline for quitting smoking."
   }
  ]
 },
 {
  "id": "social",
  "key": "s3",
  "ar": "الدعم الاجتماعي وحماية الفئات",
  "en": "Social Support & Protection",
  "items": [
   {
    "n": "16000",
    "a": "نجدة الطفل",
    "e": "Child Helpline",
    "an": "الإبلاغ عن أي إساءة أو خطر يتعرض له طفل.",
    "en": "Report abuse or danger to a child.",
    "wa": "01102121600"
   },
   {
    "n": "16439",
    "a": "فريق التدخل السريع (المشردين)",
    "e": "Rapid Intervention Team (Homeless)",
    "an": "وزارة التضامن: للإبلاغ عن أطفال أو كبار بلا مأوى.",
    "en": "Social Solidarity Ministry: report homeless children or adults.",
    "wa": "01557582104"
   },
   {
    "n": "15115",
    "a": "دعم المرأة (المجلس القومي)",
    "e": "Women's Support (National Council)",
    "an": "دعم قانوني ونفسي للنساء والإبلاغ عن العنف.",
    "en": "Legal and psychological support for women; report violence."
   },
   {
    "n": "19828",
    "a": "خط أبناء مصر (دور الرعاية)",
    "e": "Abnaa Misr (Care Homes)",
    "an": "شكاوى بشأن نزلاء دور الرعاية الاجتماعية.",
    "en": "Complaints about residents of social care homes."
   },
   {
    "n": "16528",
    "a": "الشكاوى الحكومية الموحدة",
    "e": "Unified Government Complaints",
    "an": "شكوى ضد أي جهة حكومية أو مساعدة في الحالات الاجتماعية.",
    "en": "Complaints against any government body, or help in social emergencies.",
    "wa": "01555516528"
   },
   {
    "n": "19680",
    "a": "تكافل وكرامة",
    "e": "Takaful and Karama",
    "an": "برنامج الدعم النقدي.",
    "en": "Cash-support programme."
   },
   {
    "n": "15044",
    "a": "بطاقات ذوي الإعاقة",
    "e": "Disability Services Card",
    "an": "بطاقة الخدمات المتكاملة للأشخاص ذوي الإعاقة.",
    "en": "Integrated services card for persons with disabilities."
   },
   {
    "n": "16868",
    "a": "بنك ناصر الاجتماعي",
    "e": "Nasser Social Bank",
    "an": "خدمات وتمويل البنك الاجتماعي.",
    "en": "Nasser Social Bank services and financing."
   }
  ]
 },
 {
  "id": "utilities",
  "key": "s4",
  "ar": "المرافق والأعطال",
  "en": "Utilities & Faults",
  "items": [
   {
    "n": "121",
    "a": "طوارئ الكهرباء",
    "e": "Electricity Emergency",
    "an": "انقطاع التيار أو أي عطل كهربائي.",
    "en": "Power cuts or electrical faults."
   },
   {
    "n": "129",
    "a": "طوارئ الغاز الطبيعي",
    "e": "Natural Gas Emergency",
    "an": "تسريب الغاز أو انقطاعه. خدمة العملاء: 19129",
    "en": "Gas leaks or outages. Customer service: 19129",
    "alt": "19129"
   },
   {
    "n": "125",
    "a": "طوارئ المياه",
    "e": "Water Emergency",
    "an": "مشاكل إمداد المياه أو طلب سيارات مياه.",
    "en": "Water supply problems or water tanker requests."
   },
   {
    "n": "175",
    "a": "طوارئ الصرف الصحي",
    "e": "Sanitation Emergency",
    "an": "مشاكل الصرف الصحي في القاهرة والإسكندرية.",
    "en": "Sewage problems in Cairo and Alexandria."
   }
  ]
 },
 {
  "id": "transport",
  "key": "s5",
  "ar": "النقل والطرق السريعة",
  "en": "Transport & Highways",
  "items": [
   {
    "n": "01221110000",
    "a": "نجدة الطرق السريعة",
    "e": "Highway Patrol",
    "an": "حوادث أو أعطال على الطرق السريعة خارج المدن.",
    "en": "Accidents or breakdowns on highways outside cities."
   },
   {
    "n": "16048",
    "a": "مترو الأنفاق",
    "e": "Metro Enquiries",
    "an": "للاستعلام عن حالة المترو.",
    "en": "Metro status enquiries."
   },
   {
    "n": "25753555",
    "a": "السكك الحديدية",
    "e": "Railways Enquiries",
    "an": "للاستعلام عن مواعيد القطارات.",
    "en": "Train timetable enquiries."
   }
  ]
 },
 {
  "id": "services",
  "key": "",
  "ar": "خدمات وشكاوى أخرى",
  "en": "Other Services & Complaints",
  "items": [
   {
    "n": "155",
    "a": "شكاوى الاتصالات",
    "e": "Telecom Complaints (NTRA)",
    "an": "الجهاز القومي لتنظيم الاتصالات.",
    "en": "National Telecom Regulatory Authority.",
    "wa": "01202155155"
   },
   {
    "n": "19588",
    "a": "حماية المستهلك",
    "e": "Consumer Protection",
    "an": "شكاوى المستهلكين والسلع والخدمات.",
    "en": "Consumer complaints about goods and services.",
    "wa": "01577779999"
   },
   {
    "n": "15008",
    "a": "جرائم المعلومات",
    "e": "Information Crimes",
    "an": "الإبلاغ عن الجرائم الإلكترونية.",
    "en": "Report cybercrime."
   },
   {
    "n": "15460",
    "a": "مصلحة الجمارك",
    "e": "Customs Authority",
    "an": "استفسارات وشكاوى الجمارك.",
    "en": "Customs enquiries and complaints."
   },
   {
    "n": "19654",
    "a": "شكاوى السياحة",
    "e": "Tourism Complaints",
    "an": "وزارة السياحة والآثار: شكاوى واقتراحات السياح.",
    "en": "Ministry of Tourism and Antiquities: tourist complaints and suggestions."
   },
   {
    "n": "16789",
    "a": "البريد المصري",
    "e": "Egypt Post",
    "an": "استفسارات خدمات البريد.",
    "en": "Postal service enquiries."
   }
  ]
 }
];
