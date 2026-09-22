# Prompt de Estilo Amplify para Generar Interfaces

Usa este prompt con cualquier IA generativa (Claude, ChatGPT, etc.) para crear interfaces, landings o componentes en el **estilo AWS Amplify**.

---

## 📋 Prompt Maestro

```
Eres un diseñador especializado en el sistema de diseño de AWS Amplify. 
Genera [TIPO DE ELEMENTO] siguiendo EXACTAMENTE estos parámetros:

### PALETA DE COLORES
- Fondo principal: #FFFFFF (blanco)
- Fondo secundario: #F5F5F1 (cream muy suave)
- Texto principal: #000000 (negro)
- Texto secundario: #2D3436 (gris oscuro)
- Acento primario: #0066FF (azul)
- Acento secundario: #7B68EE (púrpura)
- Bordes: #E8E8E6 (gris claro)

### TIPOGRAFÍA
- Headings (H1-H5): AmazonEmberBold / Bold, sans-serif
  * H1: 56px, bold, line-height 1.2
  * H2: 44px, bold, line-height 1.2
  * H3: 32px, bold, line-height 1.3
  * H4: 24px, bold, line-height 1.4
  * H5: 20px, 600, line-height 1.5
- Body text: Inter / sans-serif, 16px, 400, line-height 1.6
- Small text: 14px, 400, line-height 1.5
- Labels: 13px, 600, uppercase, tracking 0.01em

### ESPACIADO
- Espacios: 4px, 8px, 16px, 24px, 32px, 48px, 64px
- Padding estándar: 24px
- Gaps entre elementos: 16px (sm), 24px (md), 32px (lg)
- Secciones: padding 48-80px vertical

### COMPONENTES

#### Botones
**Primario (CTA principal):**
- Fondo: #000000, texto blanco
- Padding: 12px 28px
- Border-radius: 24px
- Hover: fondo #1A1A1A, elevar 2px
- Transición: 200ms ease

**Secundario (Alternativa):**
- Fondo: transparente, borde #000000 2px
- Texto: #000000
- Padding: 12px 28px
- Border-radius: 24px
- Hover: fondo #F5F5F1, elevar 2px

**Terciario (Link-style):**
- Fondo: transparente, borde #0066FF 2px
- Texto: #0066FF
- Hover: fondo #E6F0FF

#### Cards
- Fondo: #FFFFFF
- Borde: 1px #E8E8E6
- Border-radius: 12px
- Padding: 24px
- Sombra: 0 1px 3px rgba(0,0,0,0.08)
- Hover: elevar 4px, sombra más grande

#### Inputs
- Fondo: #FFFFFF
- Borde: 1px #E8E8E6
- Border-radius: 8px
- Padding: 12px 16px
- Focus: borde #0066FF, sombra azul suave
- Texto: #000000, 16px

#### Badges
- Padding: 6px 12px
- Border-radius: 12px
- Tipografía: 12px, bold, uppercase
- Variantes:
  * Primary: fondo #E6F0FF, texto #0066FF
  * Secondary: fondo #F5F5F1, texto #2D3436

### LAYOUT
- Ancho máximo: 1200px
- Container padding: 24px horizontal
- Gutter entre columnas: 24px
- Secciones: padding 48-64px vertical
- Bloques de texto ancho: máx 700px (para legibilidad)

### EFECTOS & MOVIMIENTO
- Transiciones: 150-400ms ease-in-out
- Hover: elevar 2-4px
- Shadows: gradual desde 1px a 20px
- Gradientes: 135deg de color a color
- SIN animaciones innecesarias: enfoque en claridad

### PRINCIPIOS DE DISEÑO
1. **Minimalista**: mucho whitespace, nada abarrotado
2. **Limpio**: bordes sutiles, grises muy claros
3. **Moderno**: tipografía grande y negrita, líneas rectas
4. **Accesible**: alto contraste (negro sobre blanco), touch targets 44-48px
5. **Professional**: sin decoraciones, solo lo necesario
6. **Responsive**: mobile first, adaptar a tablets/desktop

### ESTRUCTURA TÍPICA DE SECCIÓN
```
┌─ Sección (padding 48-64px vertical) ─────────────────────┐
│  ┌─────────────────────────────────────────────────────┐  │
│  │ Heading H2 o H3 (grande, bold)                      │  │
│  │ Subheading opcional (texto gris secundario)        │  │
│  └─────────────────────────────────────────────────────┘  │
│  gap: 24px                                                 │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ [Contenido: cards, grid, features, etc.]           │  │
│  │                                                     │  │
│  └─────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────┘
```

### COLORES PARA SECCIONES ESPECÍFICAS
- Hero/Destacado: fondo crema (#F5F5F1) o blanco con acento azul
- Features: cards blancas sobre fondo blanco/crema
- CTAs: botones negros (#000000) como foco visual
- Énfasis: usar azul (#0066FF) o púrpura (#7B68EE) con moderación

### EJEMPLOS DE COMBINACIONES
**Opción 1 - Profesional:**
- Fondo: #FFFFFF
- Texto heading: #000000
- Acento: #0066FF
- Botón: #000000

**Opción 2 - Premium:**
- Fondo: #F5F5F1
- Texto heading: #000000
- Acento: #7B68EE
- Botón: #000000

**Opción 3 - Tech:**
- Fondo: #FFFFFF
- Texto heading: #001A1A (navy muy oscuro)
- Acento: #0066FF
- Botón: #001A1A

### AHORA GENERA:
[DESCRIPCIÓN DE LO QUE QUIERES CREAR]
```

---

## 🎯 Usos Comunes

### Para una Landing Hero:
```
Genera una sección hero de landing de producto usando el estilo Amplify con:
- Título H1 grande y bold
- Subtítulo en gris secundario
- Dos botones: CTA primario (negro) y secundario (borde negro)
- Imagen/visual a la derecha (placeholder)
- Fondo: blanco o crema suave
- Espaciado generoso, muy legible

[Descripción específica del producto]
```

### Para una Página de Características:
```
Genera 4 cards de features en estilo Amplify:
- Cada card: ícono + título + descripción + enlace
- Grid 2x2 en desktop, stack en mobile
- Fondo blanco, bordes sutiles
- Hover effect: elevar y sombra más grande
- Colores: texto negro, accentes azul/púrpura

Características:
1. [Feature 1]
2. [Feature 2]
3. [Feature 3]
4. [Feature 4]
```

### Para Componentes Reutilizables:
```
Genera [COMPONENTE] para un sistema de diseño basado en Amplify:
- Siguiendo exactamente los estilos del JSON adjunto
- Responsive
- Variantes: normal, hover, focus, disabled
- Paleta de colores de Amplify
- Tipografía según las escalas definidas

Tipo: [button/card/input/badge/etc]
Variantes: [primary/secondary/tertiary/etc]
```

---

## 💡 Tips para Usar Este Prompt

1. **Copia el prompt maestro** completo como base
2. **Reemplaza [TIPO DE ELEMENTO]** con lo que quieres crear
3. **Reemplaza [DESCRIPCIÓN...]** con detalles específicos
4. **Incluye el JSON** de estilos si necesitas precisión total
5. **Pide HTML/CSS/React** según tu necesidad
6. **Solicita variantes** (mobile, tablet, desktop)
7. **Especifica si es estático o interactivo**

---

## 📱 Responsive Rules (Amplify Style)

```
### MOBILE (< 768px)
- Padding horizontal: 16px
- Font sizes: reducir 2-4px
- Espaciado: usar xs/sm en lugar de md/lg
- Botones: ancho completo o 2 columnas
- Grid: stack a 1 columna

### TABLET (768px - 1024px)
- Padding horizontal: 24px
- Font sizes: normal
- Grid: 2 columnas
- Botones: alineados

### DESKTOP (> 1024px)
- Padding horizontal: 24px, ancho 1200px
- Font sizes: escalas completas
- Grid: 3-4 columnas
- Botones: inline o 2 por fila
```

---

## 🔗 Archivos de Referencia

- JSON Style Guide: `amplify-style-guide.json`
- Colores hex: Guardados en la paleta
- Google Fonts: AmazonEmberBold, Inter
- Icons: Lucide React recomendado

---

## ❓ Ejemplo Completo de Uso

**Entrada al IA:**
```
Usa el prompt de estilo Amplify para generar:

Una sección de precios con 3 planes:
- Plan 1: Starter $29/mes
- Plan 2: Pro $99/mes (destacado)
- Plan 3: Enterprise (custom)

Cada plan:
- Card con fondo blanco, borde suave
- Título H4 bold
- Precio H2 en azul
- Descripción 14px gris
- CTA botón primario (Plan 2) o secundario (otros)
- Checkmarks de features (Lucide Check)

Fondo: #F5F5F1 (crema)
Colores: negro/azul/gris según paleta
```

**Resultado esperado:**
HTML + CSS limpio, responsive, exactamente en el estilo de AWS Amplify.

---

**Siempre mantén esta estructura y recibirás componentes UI profesionales y cohesivos.** ✅
