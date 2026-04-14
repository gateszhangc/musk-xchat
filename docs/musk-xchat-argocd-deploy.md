# Musk XChat Argo CD Deploy Mapping

This repository includes the production deployment skeleton for `musk-xchat` under `deploy/`.

Current deployment mapping:

- GitHub repository: `gateszhangc/musk-xchat`
- Git branch: `main`
- Dokploy project: `n/a`
- Image repository: `registry.144.91.77.245.sslip.io/musk-xchat`
- K8s manifest path: `deploy/k8s/overlays/prod`
- Argo CD application: `musk-xchat`
- Primary domain: `musk-xchat.lol`
- Canonical policy: `www.musk-xchat.lol -> https://musk-xchat.lol`
- Preview domain: `musk-xchat.144.91.77.245.sslip.io`
- Clarity project ID: `wbfrqsuxcb`

Route summary:

`gateszhangc/musk-xchat -> main -> registry.144.91.77.245.sslip.io/musk-xchat -> deploy/k8s/overlays/prod -> musk-xchat`

## Files

- `deploy/argocd/musk-xchat-application.yaml`
- `deploy/k8s/base/*`
- `deploy/k8s/overlays/prod/kustomization.yaml`

## Wired configuration

- Namespace: `musk-xchat`
- Service / Deployment / ConfigMap: `musk-xchat-web`
- Live hosts:
  - `musk-xchat.lol`
  - `www.musk-xchat.lol`
- Preview host:
  - `musk-xchat.144.91.77.245.sslip.io`
- TLS secret:
  - `musk-xchat-lol-tls`
- Public env:
  - `NEXT_PUBLIC_WEB_URL=https://musk-xchat.lol`
  - `NEXT_PUBLIC_PROJECT_NAME=musk-xchat`
  - `NEXT_PUBLIC_CLARITY_PROJECT_ID=wbfrqsuxcb`
  - `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=` (empty until GA4 is provisioned)
  - `NEXT_PUBLIC_AUTH_DISABLED=true`

## Verification targets

- `https://musk-xchat.lol/en`
- `https://musk-xchat.lol/robots.txt`
- `https://musk-xchat.lol/sitemap.xml`
- `https://musk-xchat.lol/brand/musk-xchat/musk-xchat-hero.png`
- `https://www.musk-xchat.lol/en` should return a permanent redirect to apex

## Follow-up gates outside this repo

1. Create or confirm the GitHub repository `gateszhangc/musk-xchat`
2. Push a production image to `registry.144.91.77.245.sslip.io/musk-xchat`
3. Sync the Argo CD application `musk-xchat`
4. Add GA4 and GSC credentials when available
