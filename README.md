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
pnpm dev --filter next-mobile
pnpm lint --filter next-mobile
```

## Run turbo with no caching

```bash
pnpm build --force
```

See [Command-Line Reference](https://turbo.build/repo/docs/reference/command-line-reference) for more CLI usage.
