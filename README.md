# Overview

* An example of using bazel to build/run/test nestjs monorepo

# Dependency

* [Bazel](https://bazel.build/)
* [Bazel/aspect plugins](https://github.com/aspect-build)
* [Nestjs - monorepo](https://docs.nestjs.com/cli/monorepo)

# Install

## Install bazel + aspect

* Bazel: <https://bazel.build/install>
* Aspect: <https://github.com/aspect-build/aspect-cli>

## Use aspect/cli to generate .aspect

### Important

* Must have .aspect/bazelrc to `bazel run`. For that, use cli: `aspect init` to copy folder `.aspect` to your workspace folder

## Build

```bash
bazel build //apps/api:bin
```

## Run

```bash
bazel run //apps/api:bin
```
