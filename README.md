# Reproduction for [10573](https://github.com/prisma/prisma/issues/10573)

This repository contains the reproduction for https://github.com/prisma/prisma/issues/10573

## Usage

```
npm install
```

Generate using explicit version:

```
$ npx prisma@3.4.0 generate

Prisma schema loaded from schema.prisma

> prisma-npx-version-reproduction@1.0.0 generator
> ts-node src

Got prisma version 1c9fdaa9e2319b814822d6dbfd0a69e1fcc13a85

✔ Generated Generator tester to ./custom-output in 3ms
```

Note that the prisma version passed to the generator is: `1c9fdaa9e2319b814822d6dbfd0a69e1fcc13a85`

Install prisma in current working directory:

```
npm install prisma@3.6.0
```

Run generator again:

```
$ npx prisma@3.4.0 generate
Prisma schema loaded from schema.prisma

> prisma-npx-version-reproduction@1.0.0 generator
> ts-node src

Got prisma version dc520b92b1ebb2d28dc3161f9f82e875bd35d727

✔ Generated Generator tester to ./custom-output in 3ms
```

Note that the prisma version passed to the generator is now: `dc520b92b1ebb2d28dc3161f9f82e875bd35d727`
