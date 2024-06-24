import browserSync from 'browser-sync'; // Локальный сервер
import newer from 'gulp-newer'; // Проверка обновления
import ifPlugin from 'gulp-if'; // Условное ветление

const concatPathAndFileName = (path, files) => {
  return files.map((file) => `${path}/${file}`);
};

export const plugins = {
  if: ifPlugin,
  browserSync,
  newer,
  concat: concatPathAndFileName
};
