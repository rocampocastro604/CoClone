# SSL

Certificates are not committed. Generate a self-signed pair for local use:

```sh
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout ssl/nginx.key -out ssl/nginx.crt -subj "/CN=localhost"
```
