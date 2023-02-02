# nodejs-code-style.

## 2. Tooling.

### 2.1 Code Style

#### Task.

1. Configure .prettierrc. Default settings is okey.
2. Configure .eslintrc.js with some node.js related config. It should have enabled no-console rule
3. Fix eslint errors. Start with autofix, then use manual fix. Use // eslint-disable-next-line for no-console error.
4. Add npm script format what will run prettier fix and then run eslint fix
5. Add npm script lint what will run prettier check and then eslint check.
6. Add precommit hook with husky and lint-staged which will format changed files.
