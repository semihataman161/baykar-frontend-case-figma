# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

Requirements: 

Arayüz Çalışması 
Figma dosyası bulunan arayüz tasarımının responsive olarak Tailwind veya Bootstrap kullanarak kodlanması gerekmektedir.

Gerekli yerlerde dinamik tasarım özelliklerinin çalışır olması, (Örneğin ; ileri-geri butonları ile elementlerin kaydırılması vb.) beklenmektedir.

https://www.figma.com/file/M0PoTYnTLGmVlHrvwIFwRZ/Baykar-FrontendCase?type=design&node-id=0%3A1&mode=design&t=s4TpVhoXlTJVltFT-1