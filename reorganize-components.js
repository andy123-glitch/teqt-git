import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folders = ['components', 'layout', 'pages'];
const srcPath = path.join(__dirname, 'src');

/**
 * Réorganise les fichiers dans des dossiers individuels
 */
function reorganizeFiles() {
  folders.forEach((folderName) => {
    const folderPath = path.join(srcPath, folderName);

    if (!fs.existsSync(folderPath)) {
      console.log(`⚠️  Le dossier ${folderName} n'existe pas`);
      return;
    }

    const files = fs.readdirSync(folderPath);

    files.forEach((file) => {
      const filePath = path.join(folderPath, file);
      const stat = fs.statSync(filePath);

      // Ignorer les dossiers et fichiers non-.jsx/.js
      if (
        stat.isDirectory() ||
        (!file.endsWith('.jsx') && !file.endsWith('.js'))
      ) {
        return;
      }

      // Extraire le nom du composant (sans extension)
      const componentName = file.replace(/\.(jsx|js)$/, '');
      const componentFolder = path.join(folderPath, componentName);

      // Créer le dossier du composant
      if (!fs.existsSync(componentFolder)) {
        fs.mkdirSync(componentFolder, { recursive: true });
        console.log(`✅ Dossier créé: ${folderName}/${componentName}/`);
      }

      // Déplacer le fichier
      const newFilePath = path.join(componentFolder, file);
      fs.renameSync(filePath, newFilePath);
      console.log(`📦 Déplacé: ${file} → ${componentName}/${file}`);

      // Créer le fichier style.scss
      const scssFilePath = path.join(componentFolder, 'style.scss');
      if (!fs.existsSync(scssFilePath)) {
        const scssContent = `// Styles pour ${componentName}\n\n.${componentName.toLowerCase()} {\n  // Vos styles ici\n}\n`;
        fs.writeFileSync(scssFilePath, scssContent);
        console.log(`🎨 Créé: ${componentName}/style.scss`);
      }

      // Créer un fichier index.js pour faciliter les imports
      const indexFilePath = path.join(componentFolder, 'index.js');
      if (!fs.existsSync(indexFilePath)) {
        const indexContent = `export { default } from './${file}';\n`;
        fs.writeFileSync(indexFilePath, indexContent);
        console.log(`📄 Créé: ${componentName}/index.js`);
      }
    });
  });

  console.log('\n✨ Réorganisation terminée !');
}

// Exécuter le script
reorganizeFiles();
