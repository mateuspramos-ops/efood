# efood — cardápios com história

Projeto de listagem de restaurantes inspirado no layout [efood do Figma](https://www.figma.com/file/JjduV2Tg713TzYUUsees8b/efood), desenvolvido com **React**, **Styled Components** e **React Router DOM**.

## 🎨 Conceito

Em vez do visual genérico de app de delivery, o efood foi desenhado como um **quadro de cardápios editorial**: cada restaurante é apresentado como uma comanda de papel com borda rasgada e um selo de avaliação, e o cardápio de cada casa é tipografado como um menu impresso, com linhas pontilhadas entre nome e preço.

- **Cores:** `--ink` (carvão), `--saffron` (mostarda), `--clay` (terracota), `--sage` (verde-sálvia), `--parchment` (papel)
- **Tipografia:** Fraunces (display), Work Sans (corpo), Space Mono (preços e labels)

## 📁 Estrutura

```
src/
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── RestauranteCard/    → card "comanda" com borda rasgada
│   └── PratoCard/           → linha de cardápio com dot-leaders
├── pages/
│   ├── Home/                → listagem de restaurantes
│   └── Restaurante/         → cardápio do restaurante
├── data/
│   └── restaurantes.ts      → dados mockados
├── styles/
│   └── GlobalStyle.ts
├── types.ts
├── App.tsx                  → rotas com React Router DOM
└── main.tsx
```

## 🧭 Rotas

| Rota | Página |
|---|---|
| `/` | Listagem de restaurantes |
| `/restaurante/:id` | Cardápio do restaurante selecionado |

## ▶️ Como rodar

```bash
npm install
npm run dev
```
