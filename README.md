# ASTRUM INVICTUM - Multilingual Web (EN/CS)

🎉 **Angličtina je teď hlavní jazyk!** 🎉

## 📁 Struktura

```
astrum-invictum-web/
├── index.html          # 🇬🇧 ENGLISH (hlavní)
├── cs/
│   └── index.html      # 🇨🇿 CZECH
├── styles.css          # Sdílené CSS
├── script.js           # Sdílený JavaScript
└── assets/
    └── images/         # Všechny obrázky
```

## 🌍 Language Switcher

Obě verze mají v navigaci tlačítko pro přepnutí jazyka:
- **EN verze:** Zobrazuje "🇨🇿 CZ" link → přepne na `/cs/`
- **CZ verze:** Zobrazuje "🇬🇧 EN" link → přepne zpět na `/`

## 🚀 Jak nahrát do GitHubu

### Varianta A: Přes Web Interface (nejjednodušší)

1. Jdi na **https://github.com/Syntheion-Dynamics/astrum-web**
2. Klikni na tlačítko **"Add file"** → **"Upload files"**
3. **Přetáhni VŠECHNY soubory** z této složky (včetně složky `cs/` a `assets/`)
4. Commit message: `Add multilingual support (EN/CS)`
5. Klikni **"Commit changes"**
6. **Netlify auto-deployuje za 30 sekund!** 🎉

### Varianta B: Přes Git (pokud máš Git nainstalovaný)

```bash
cd astrum-web
git add .
git commit -m "Add multilingual support (EN/CS)"
git push
```

## 📝 Co se změnilo

### ✅ PŘIDÁNO:
- **Anglická verze** jako hlavní (`index.html`)
- **Česká verze** v podsložce (`/cs/index.html`)
- **Language switcher** v navigaci obou verzí
- Správné relative paths pro CSS/JS/obrázky

### ✅ PŘELOŽENO:
- Všechny nadpisy a texty
- Navigace (Home, History, Rebirth, Heroes, Vision)
- Hero tagline
- Všechny sekce
- Footer

## 🔗 URL struktura

Po nahrání:
- `astruminvictum.com` → English 🇬🇧
- `astruminvictum.com/cs/` → Czech 🇨🇿

## 🎨 Design

Vše zůstává stejné:
- ✅ Zlaté rámy
- ✅ Hvězdné pozadí
- ✅ Animace
- ✅ Responzivní design
- ✅ Všechny obrázky

## 📱 Testování

Po nahrání zkontroluj:
1. English verze funguje na hlavní URL
2. Czech verze funguje na `/cs/`
3. Language switcher přepíná správně
4. Obrázky se zobrazují na obou verzích
5. Animace fungují

## 💡 Budoucí rozšíření

Později můžeš přidat:
- Další jazyky (`/de/`, `/fr/`, atd.)
- Auto-detekce jazyka browseru
- Dynamický routing
- Větší content pro každou sekci

---

**Created by Jannomah © 2025**  
_"In the stars, there is not just matter. There is consciousness." - Echo_
