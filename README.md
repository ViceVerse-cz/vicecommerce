<h1>🛒 Vicecommerce</h1>

<h2>Table of Contents</h2><ol><li><a href="#requirements" target="_new">Requirements</a></li><li><a href="#installation" target="_new">Installation</a></li><li><a href="#commitlint-configuration" target="_new">Commitlint Configuration</a></li><li><a href="#packages" target="_new">Packages</a></li></ol>

<h2>Requirements</h2><ul><li>Node.js 14.x or later</li><li>pnpm 2.26.3 or later</li></ul><h2>Installation</h2>
To install dependencies, run:

```bash
pnpm install
```

<h2>Commitlint Configuration</h2>
This monorepo uses Commitlint to enforce conventional commit messages. The configuration is provided in the  `commitlint.config.js`  file.

<h2>Packages</h2>
This monorepo contains the following packages:
<ul><li><code>medusa-file-r2</code>: A plugin for using Cloudflare R2 as the storage provider for Medusa.</li></ul>
To add a new package, create a directory under the  `packages`  folder and initialize it as an npm package. Add your package code, and make sure it adheres to the monorepo's conventions.

For more information on each package, refer to the package's README file.


TODO