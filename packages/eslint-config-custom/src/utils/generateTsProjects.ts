import path from 'path';
import fs from 'fs';
import glob from 'glob';

export const generateTsProjects = (
  rootDir: string,
  workspaces: string[],
) => {
  const tsConfigPaths = [
    '.',
    ...workspaces,
  ].map(
    (workspace) => {
      const globPath = path.resolve(rootDir, workspace, 'tsconfig.json');
      return glob.sync(globPath);
    },
  ).flat();
  const validPackages = tsConfigPaths.filter(
    (config) => fs.existsSync(
      path.resolve(
        path.dirname(
          path.resolve(config),
        ),
        'package.json',
      ),
    ),
  );
  const tsProjects = validPackages.map(
    (config) => path.relative(rootDir, config),
  );
  return tsProjects;
};
