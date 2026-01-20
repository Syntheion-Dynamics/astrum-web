# ASTRUM INVICTUM - Web Landing Page

Vítej v oficiálním webu pro sci-fi svět **Astrum Invictum**!

## 📁 Obsah balíčku

```
astrum-invictum-web/
├── index.html          # Hlavní HTML soubor
├── styles.css          # Kompletní CSS stylesheet
├── script.js           # JavaScript pro animace a interaktivitu
├── assets/
│   └── images/
│       ├── Vindex_Caelum_Closeup.png  # Hero background
│       ├── lyrra_acord_2.png          # Lodě Lyra Accord
│       └── AU_STYLE.png               # Vindex Caelum frame
└── README.md           # Tento soubor
```

## 🚀 Jak nahrát na web

### ⭐ DOPORUČENÁ METODA: Netlify (nejjednodušší, ZDARMA)

1. **Jdi na [netlify.com](https://netlify.com)**
2. Zaregistruj se (stačí GitHub účet)
3. Přetáhni celou složku `astrum-invictum-web` do Netlify Drop zóny
4. **Web je okamžitě live!** 🎉
5. Dostaneš URL typu `random-name.netlify.app`
6. V nastavení můžeš změnit na `astruminvictum.netlify.app`

#### Propojení s tvou doménou astruminvictum.com:

1. V Netlify jdi do **Domain Settings**
2. Přidej custom domain: `astruminvictum.com`
3. U tvého registrátora domén (Squarespace nebo jiný) přidej tyto DNS záznamy:
   - **A Record**: `75.2.60.5`
   - **CNAME** (www): `random-name.netlify.app`
4. Za pár minut bude doména funkční s HTTPS certifikátem zdarma!

---

### Varianta B: Squarespace (pokud už tam máš hosting)

#### B1: Code Injection

1. Přihlaš se do Squarespace
2. Jdi do **Settings → Advanced → Code Injection**
3. V **Header** přidej:
   ```html
   <link rel="stylesheet" href="/s/styles.css">
   ```
4. V **Footer** přidej:
   ```html
   <script src="/s/script.js"></script>
   ```
5. Nahraj všechny soubory do **Assets** (Design → Custom CSS → Manage Custom Files)

#### B2: Custom Template

1. V Squarespace jdi do **Settings → Developer Mode**
2. Stáhni si existující template
3. Nahraď obsah template souboru naším `index.html`
4. Nahraj obrázky do `/assets/images/`
5. Aktivuj template

---

### Varianta C: Vercel (alternativa k Netlify)

1. Jdi na [vercel.com](https://vercel.com)
2. Zaregistruj se
3. Import projekt: Upload složku nebo propoj s GitHub
4. Deploy je automatický
5. Propojení domény stejně jako u Netlify

---

## 🎨 Funkce webu

- ✨ **Starfield pozadí** - 200 animovaných hvězd
- 🌟 **Zlaté ornamentální rámy** - Art Deco styl inspirovaný tvým designem
- 📜 **Smooth scroll animace** - Fade-in efekty při scrollování
- 🖼️ **Responzivní design** - Funguje na mobilu i desktopu
- 🎭 **Parallax efekty** - Hero sekce se pohybuje při scrollu
- 🎯 **Hover efekty** - Interaktivní prvky
- 🎮 **Easter egg** - Zkus najít Konami Code! (↑↑↓↓←→←→BA)

---

## 🛠️ Customizace

### Změna barev

Otevři `styles.css` a uprav CSS proměnné:

```css
:root {
    --color-gold: #D4AF37;      /* Zlatá barva */
    --color-cyan: #00D4FF;      /* Cyan akcenty */
    --color-bg-dark: #0a1628;   /* Tmavé pozadí */
    /* ... */
}
```

### Přidání nových sekcí

V `index.html` zkopíruj strukturu existující sekce:

```html
<section id="new-section" class="content-section">
    <div class="section-container">
        <div class="ornamental-frame">
            <div class="frame-corner tl"></div>
            <div class="frame-corner tr"></div>
            <div class="frame-corner bl"></div>
            <div class="frame-corner br"></div>
            
            <div class="section-content">
                <!-- Tvůj obsah zde -->
            </div>
        </div>
    </div>
</section>
```

### Změna fontů

V `<head>` sekci v `index.html` uprav Google Fonts link.

---

## 📱 Responzivní breakpointy

- **Desktop**: 1024px+ (plná funkčnost, všechny efekty)
- **Tablet**: 768px - 1023px (zjednodušený layout)
- **Mobil**: < 768px (vertikální stack, skrytá navigace)

---

## ⚡ Performance tipy

1. **Obrázky**: Komprimuj je pomocí [TinyPNG](https://tinypng.com)
2. **Starfield**: Pro slabší zařízení sniž `starCount` v `script.js`
3. **Cursor trail**: Je defaultně vypnutý pro lepší výkon

---

## 🌟 Easter Eggs

- **Konami Code**: ↑↑↓↓←→←→BA (zvýší zlatý glow effect)
- **Console messages**: Otevři developer console (F12)

---

**Created by Jannomah © 2025**  
_"Ve hvězdách není jen hmota. Je tam vědomí." - Echo_
