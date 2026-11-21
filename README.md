# Egypt Emergency Numbers | أرقام الطوارئ في مصر

[![Offline-First PWA](https://img.shields.io/badge/PWA-Offline--First-c8102e.svg)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
[![Languages](https://img.shields.io/badge/Languages-14%20(AR%20%2B%20EN%20%2B%2012)-0b57d0.svg)](#supported-languages)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Every essential Egypt emergency, medical, utility, transport, and government service number in one fast, offline-first Progressive Web App (PWA) — built for instant access in Arabic and English.

**Live App:** `https://mikymiky1.github.io/egypt-emergency-numbers/` *(update after enabling GitHub Pages)*

---

## Core Emergency Numbers (أرقام الطوارئ الأساسية)

| Number | Service (English) | الخدمة (العربية) | Notes |
| :--- | :--- | :--- | :--- |
| **112** | Unified Emergency (NAS) | الطوارئ الموحدة | Covers police, ambulance, and fire (rolled out gradually) |
| **122** | Police | شرطة النجدة | General security and criminal reports |
| **123** | Ambulance | الإسعاف | Medical emergencies and critical cases |
| **180** | Fire Brigade (Civil Protection) | المطافئ (الحماية المدنية) | Fires and civil hazards |
| **128** | Traffic Police | شرطة المرور | Road accidents and traffic emergencies |
| **126** | Tourist Police | شرطة السياحة | Tourist assistance (English-speaking officers available) |

---

## Key Features

- **100% Offline Support:** Powered by a Service Worker (`sw.js`) with a stale-while-revalidate caching strategy so all numbers work without an internet connection.
- **One-Tap Actions:** Call directly (`tel:`), copy numbers to clipboard, open official WhatsApp support lines, or pin frequent numbers to the top.
- **vCard (`.vcf`) Contact Export:** Save individual numbers or download the entire directory (`egypt-emergency-contacts.vcf`) directly to iOS, Android, or desktop contacts.
- **GPS Location Finder:** Fetch live coordinates (`latitude, longitude` with accuracy radius) and open Google Maps to read your exact position to emergency operators.
- **Bilingual & Multi-Language UI:** Always displays Arabic and English side-by-side, with interface localization in **14 languages** (`ar`, `en`, `ru`, `de`, `fr`, `it`, `es`, `zh`, `ja`, `pl`, `nl`, `uk`, `tr`, `cs`).
- **Accessible & Lightweight:** Zero external dependencies, dark/light/auto theme support, adjustable text sizes (`A`, `A+`, `A++`), and print-friendly layout.

---

## Categories Included

1. **Core Emergency Numbers** (`112`, `122`, `123`, `180`, `128`, `126`)
2. **Medical & Health** (`137` / `16474` ICU Beds, `105` Ministry of Health, `15301` Drug Authority, `15335` Health Complaints, `4862244` Alexandria Poison Center)
3. **Mental Health & Addiction** (`16328` Psychological Support, `16023` Addiction Treatment, `16805` Quit Smoking)
4. **Social Support & Protection** (`16000` Child Helpline, `16439` Homeless Rapid Intervention, `15115` Women's Support, `16528` Government Complaints, `19680` Takaful & Karama, `15044` Disability Card, `16868` Nasser Social Bank)
5. **Utilities & Faults** (`121` Electricity, `129` / `19129` Natural Gas, `125` Water, `175` Sanitation)
6. **Transport & Highways** (`01221110000` Highway Patrol, `16048` Cairo Metro, `25753555` Railways)
7. **Other Services & Complaints** (`155` Telecom NTRA, `19588` Consumer Protection, `15008` Cybercrime, `15460` Customs, `19654` Tourism Complaints, `16789` Egypt Post)

---

## Project Structure

```text
├── index.html            # Main UI, styles, search/filter logic, and vCard generator
├── data.js               # Bilingual emergency dataset, translations (14 languages), and credits
├── sw.js                 # Service Worker for offline caching
├── manifest.webmanifest  # PWA manifest metadata and icons
└── icon.svg              # App vector icon
```

---

## Running Locally

No build tools or package managers are required. Serve the root folder with any static HTTP server (required for Service Worker registration):

```bash
# Python
python3 -m http.server 8080

# Node.js (npx)
npx serve .
```

Then open `http://localhost:8080` in your browser.

---

## Official Sources

Data compiled from official Egyptian public entities:
- Ministry of Interior (وزارة الداخلية)
- Ministry of Health and Population (وزارة الصحة والسكان)
- Ministry of Social Solidarity (وزارة التضامن الاجتماعي)
- National Council for Women (المجلس القومي للمرأة)
- Egyptian Drug Authority (هيئة الدواء المصرية)
- National Telecom Regulatory Authority (الجهاز القومي لتنظيم الاتصالات)
- Consumer Protection Agency (جهاز حماية المستهلك)

---

## Disclaimer & License

> **Informational reference only:** Emergency and hotline numbers may change over time. Always verify critical numbers with official government sources.

Licensed under the [MIT License](LICENSE).
