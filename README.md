# Build Request Action

> A GitHub Action to get an auto-incrementing build number in any job.

## Usage

```yml
- uses: travisj/build-number-action@v1
  id: my-project-build-number

- name: Echo Build Number
  run: echo $BUILD_NUMBER
  env:
    BUILD_NUMBER: ${{ steps.my-project-build-number.outputs.build-number }}
```

## Unique build number incrementors within the same project

```yml
- uses: travisj/build-number-action@v1
  id: my-project-build-number
  with:
    key: my-project
```
