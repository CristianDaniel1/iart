import arcane from '../assets/arcane-architect.jpg';
import cat from '../assets/colourful-cat.jpg';
import ninja from '../assets/ninja.jpg';
import femaleNinja from '../assets/female-ninja.jpg';
import promptView from '../assets/prompt-view.jpg';

export const homeImages = [
  {
    id: 'art-18',
    path: arcane,
    title: 'Arcane Architect',
  },
  {
    id: 'art-2',
    path: cat,
    title: 'Colorful Cat',
  },
  {
    id: 'art-20',
    path: ninja,
    title: 'Cyborg Ninja',
  },
];

export const allCategories = [
  'Personagem',
  'Anime',
  'Animais',
  'Comida',
  'Ficção Científica',
  'Paisagem',
];

export const imgPrompt = {
  path: promptView,
  alt: 'detalhes de sobre uma imagem criada por IA, com ênfase no prompt de contorno verde',
};

export const example = [
  {
    id: 'ex-1-start',
    path: ninja,
    prompt:
      'anime style illustration of techwear, cyborg ninja, holding a sword, wearing a mask, striking pose, all limbs appear in frame, japanese vibe, detailed design for streetwear and urban style t-shirt design, solid color background, etc pro vector',
    title: 'Estado Inicial',
    alt: 'Cyborg Ninja',
  },
  {
    id: 'ex-1-end',
    path: femaleNinja,
    prompt:
      'Create an art Poster, vintage anime/graphic novel styled illustration of a tech-wear, Filipina, Spanish, Japanese female cyborg ninja, wielding a plasma energized katana, striking pose, all limbs appear in frame, Japanese vibe, detailed design for streetwear and urban style Chinese ink wash painting, urban background',
    title: 'Resultado Final',
    alt: 'Female Cyborg Ninja',
  },
];
