### NEXTresume

this is a project to serve as a model to devs build they own professional portfolio.

See my own deployed at: https://nextresume.vercel.app

## tools:
### next.js: [doc](https://nextresume.vercel.app)
### typescript: [doc](https://www.typescriptlang.org/docs/handbook/release-notes/overview.html)
### chakra-ui: [doc](https://nextjs.org/docs)


## Getting Started

First, run:

```bash
yarn
```

Then, run the development server:

```bash
yarn dev
```

## Want to run with Docker?

### if you already have Makefile installed, just run:
`make run`

### if don't, just run:
`docker build --rm -t super-dev -f Dockerfile .`
#### then run:
`docker run -it --rm --name super-dev -p 3000:8080 super-dev`
#### to stop(kill):
`docker kill super-dev`
#### to remove:
`docker rm super-dev`