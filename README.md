# [Turborepo](https://turbo.build/repo) project for [williamtobing.com](https://williamtobing.com)

## Run script for development server

```bash
pnpm install
```

```bash
pnpm dev
```

## Run script for spesific package using --filter

```bash
pnpm dev --filter next-adaptive
pnpm lint --filter next-adaptive
```

## Run turbo with no caching

```bash
pnpm build --force
```

See [Command-Line Reference](https://turbo.build/repo/docs/reference/command-line-reference) for more CLI usage.
