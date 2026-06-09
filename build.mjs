import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';
import fs from 'fs';

const css = fs.readFileSync('input.css', 'utf8');

postcss([tailwindcss]).process(css, { from: 'input.css', to: 'output.css' }).then(result => {
  fs.writeFileSync('output.css', result.css);
  console.log('CSS built successfully!');
});
