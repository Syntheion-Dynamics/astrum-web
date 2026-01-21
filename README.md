# ASTRUM INVICTUM - Multilingual Web (EN/CS)

🎉 **Aktualizováno: Nová sekce Cities + Lightbox + Echo obrázek** 🎉

## 📁 Struktura

```
astrum-invictum-web/
├── index.html          # 🇬🇧 ENGLISH (hlavní)
├── cs/
│   └── index.html      # 🇨🇿 CZECH
├── styles.css          # Sdílené CSS
├── script.js           # Sdílený JavaScript
└── assets/
    └── images/         # Všechny obrázky (JPG)
        ├── AU_STYLE.jpg
        ├── Vindex_Caelum_Closeup.jpg
        ├── lyrra_acord_2.jpg
        ├── echo.jpg          # NOVÝ - pro kartu Echo
        └── doky.jpg          # NOVÝ - pro sekci Cities
```

## 🆕 Co je nového

### ✅ Nová sekce "Our Cities" / "Naše Města"
- Umístěna mezi Heroes a Vision
- Obsahuje obrázek `doky.jpg` (Stellar Athenaeum)
- Lightbox zvětšení po kliknutí

### ✅ Echo karta s obrázkem
- Karta Echo v sekci Heroes nyní obsahuje obrázek
- Soubor: `echo.jpg`

### ✅ Lightbox pro zvětšování obrázků
- Kliknutí na obrázek v sekci Cities nebo Vision
- Zobrazí velký obrázek přes celou obrazovku
- Zavření: kliknutí mimo, X tlačítko, nebo Escape

### ✅ Všechny obrázky přejmenovány na JPG
- `AU_STYLE.png` → `AU_STYLE.jpg`
- `lyrra_acord_2.png` → `lyrra_acord_2.jpg`
- `Vindex_Caelum_Closeup.png` → `Vindex_Caelum_Closeup.jpg`

## 🚀 Jak nahrát do GitHubu

### 1. Nahraj tyto soubory:
- `index.html` (nahraď existující)
- `cs/index.html` (nahraď existující)
- `styles.css` (nahraď existující)
- `script.js` (nahraď existující)

### 2. Převeď a nahraj obrázky do `assets/images/`:
- Převeď existující PNG na JPG
- Přidej `echo.jpg`
- Přidej `doky.jpg`

### 3. Commit a push
```bash
git add .
git commit -m "Add Cities section, Echo image, lightbox, convert to JPG"
git push
```

## 🔗 URL struktura

- `astruminvictum.com` → English 🇬🇧
- `astruminvictum.com/cs/` → Czech 🇨🇿

## 📱 Navigace

Nové pořadí sekcí:
1. Home
2. History / Historie
3. Rebirth / Znovuzrození
4. Heroes / Hrdinové
5. **Cities / Města** (NOVÉ)
6. Vision / Vize

---

**Created by Jannomah © 2025**  
_"In the stars, there is not just matter. There is consciousness." - Echo_
