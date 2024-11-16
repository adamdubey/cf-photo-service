# CF-Photo-Service

## Quick Start

1. Install Dependencies:

```sh
$ npm install
```

2. Run worker locally:

```sh
$ npm run dev
# in browser, navigate to localhost:8787
```

---

## Localhost Development

- Running Tests:

```sh
$ npm run test
```

- Creating & Running DB Migrations:

```sh
# create migration
$ npx wrangler d1 migrations create <DB_NAME> <MIGRATION_NAME>

# applying migration to LOCALHOST DB
$ npx wrangler d1 migrations apply <DB_NAME> --local

# applying migration to PROD DB
$ npx wrangler d1 migrations apply <DB_NAME> --remote
```

---

## Deployment

```sh
$ npm run deploy
# in browser, navigate to https://cf-photo-service.<CF-ACCOUNT-NAME>.workers.dev/
```

---

## Technologies & Frameworks

- [Cloudflare]()
- [NodeJS]()
- [Typescript]()
