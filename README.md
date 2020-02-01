# log-action

A simple GitHub action that log its input for debugging purposes.

## Example

```yml
name: Foo

on:
  repository_dispatch:
    types: [foo]

jobs:
  foo:
    runs-on: ubuntu-latest

      - name: Log input
        uses: Andarist/log-action@master
        with:
          input: |
            some multi-line
            and interpolated ${{ github.event.client_payload.sha }} input
```
