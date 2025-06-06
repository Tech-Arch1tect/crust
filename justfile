default:
  just --list

[working-directory: "src"]
api-client:
  @rm -rf api-client && \
  openapi-generator-cli generate -i https://raw.githubusercontent.com/Tech-Arch1tect/Mantle/refs/heads/main/openapi/swagger.json \
  -g typescript-fetch -o api-client && \
  rm openapitools.json