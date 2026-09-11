# Frinkle - Sito Web Premium per Bevande

Sito web interattivo e lussuoso per il brand di bevande Frinkle, con tre gusti esclusivi:
- Fragola Rossa
- Mela Verde  
- Mirtillo Blu

## Caratteristiche Principali

### Design Lusso e Elaborato
- Gradients sofisticati che cambiano lentamente
- Tipografia premium con Playfair Display e Montserrat
- Effetti di luce e ombre realistici
- Transizioni fluide e curate

### Interazioni 3D Avanzate
- **Rotazione prodotti**: Le bottiglie ruotano automaticamente e rispondono al movimento del mouse
- **Effetti parallasse**: Sfondo e contenuti che si muovono a velocità diverse durante lo scroll
- **Liquidi animati**: Simulazione di bevande che si muovono naturalmente dentro i contenitori
- **Bollette che salgono**: Effetto di carbonatazione realistico

### Dettagli Tecnici
- HTML5 semantico
- CSS3 avanzato con variabili, animazioni e trasformazioni 3D
- JavaScript vanilla per le interazioni
- Design completamente responsive
- Ottimizzato per prestazioni
- Compatibile con tutti i browser moderni

## Struttura dei File

```
frinkle-website/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Personalizzazione

### Colori
I colori principali sono definiti in `:root` nel file CSS:
- `--frinkle-red: #c41e3a` (Fragola)
- `--frinkle-green: #2d5d2c` (Mela)
- `--frinkle-blue: #1e3a8a` (Mirtillo)

### Animazioni
Le velocità e le intensità delle animazioni possono essere regolate modificando:
- Variabili CSS come `--rotate-speed`, `--shadow-*`
- Funzioni JavaScript in `script.js` come `init3DEffects()`

### Contenuto
Per aggiungere nuovi gusti o modificare le informazioni:
1. Duplica una sezione `.flavor-card` in `index.html`
2. Aggiorna gli ID e le classi di colore
3. Modifica il contenuto testuale
4. Lo stile si adatterà automaticamente

## Browser Supportati
- Chrome 80+
- Firefox 75+
- Safari 12.1+
- Edge 80+
- Opera 68+

## Note sulla Performance
- Le animazioni utilizzano `requestAnimationFrame` per ottimizzare le prestazioni
- Le proprietà trasformate (transform, opacity) sono accelerate dalla GPU
- Le immagini sarebbero lazy-loaded se aggiunte (attualmente utilizziamo solo CSS e SVG)
- Il sito è progettato per mantenere 60fps su dispositivi moderni

## Crediti
Concept e design ispirato alle tendenze moderne di branding premium per bevande.
Tutte le animazioni e gli effetti sono stati realizzati con tecnologie web standard.