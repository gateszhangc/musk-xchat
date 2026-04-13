# Bloodhounds Argo CD Deploy Mapping

This repository now includes a minimal Argo CD deployment skeleton under `deploy/`.

Current explicit deployment mapping for this workspace:

- GitHub repository: `gateszhangc/bloodhounds`
- Git branch: `main`
- Dokploy project: `n/a`  
  This site is prepared for Argo CD, not Dokploy.
- Image repository: `registry.144.91.77.245.sslip.io/bloodhounds:20260414065832`
- K8s manifest path: `deploy/k8s/overlays/prod`
- Argo CD application: `bloodhounds`
- Primary domain: `bloodhounds.homes`
- Preview domain: `bloodhounds.144.91.77.245.sslip.io`

Route summary:

`GitHub repository -> branch -> image repository -> K8s manifest path -> Argo CD application`

Current route:

`gateszhangc/bloodhounds -> main -> registry.144.91.77.245.sslip.io/bloodhounds:20260414065832 -> deploy/k8s/overlays/prod -> bloodhounds`

## Files added

- `deploy/k8s/base/*`
- `deploy/k8s/overlays/prod/kustomization.yaml`
- `deploy/argocd/bloodhounds-application.yaml`

## What is already wired

- Hostnames: `bloodhounds.homes`, `www.bloodhounds.homes`
- Preview hostname: `bloodhounds.144.91.77.245.sslip.io`
- TLS issuer annotation: `letsencrypt-prod`
- Ingress class: `nginx`
- Public env:
  - `NEXT_PUBLIC_WEB_URL=https://bloodhounds.homes`
  - `NEXT_PUBLIC_PROJECT_NAME=bloodhounds`
  - `NEXT_PUBLIC_CLARITY_PROJECT_ID=wb4ttwal07`
  - `NEXT_PUBLIC_AUTH_DISABLED=true`

## What still needs confirmation

1. DNS cutover from Porkbun parked page to the cluster ingress
2. Whether auth should stay disabled in production
3. GA4 / GSC credentials for full launch-analytics completion

## Recommended next step

1. Push the repo to GitHub
2. Push image `registry.144.91.77.245.sslip.io/bloodhounds:20260414065832`
3. Apply Argo CD application
4. Verify:
   - `/robots.txt`
   - `/sitemap.xml`
   - homepage HTML
   - `/brand/bloodhounds/bloodhounds-hero.svg`
