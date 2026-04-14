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
- Live DNS target A records:
  - `144.91.73.228`
  - `144.91.77.245`
  - `144.91.78.201`
- Public env:
  - `NEXT_PUBLIC_WEB_URL=https://bloodhounds.homes`
  - `NEXT_PUBLIC_PROJECT_NAME=bloodhounds`
  - `NEXT_PUBLIC_CLARITY_PROJECT_ID=wb4ttwal07`
  - `NEXT_PUBLIC_AUTH_DISABLED=true`
- Live verification status:
  - `https://bloodhounds.homes/en` returns `200`
  - `https://bloodhounds.homes/brand/bloodhounds/bloodhounds-hero.svg` returns `200`
  - `https://www.bloodhounds.homes/en` returns `200`

## What still needs confirmation

1. Whether auth should stay disabled in production
2. GA4 / GSC credentials for full launch-analytics completion
3. Whether `www.bloodhounds.homes` should remain a full alias or be forced to apex after launch

## Recommended next step

1. Keep Argo synced to `main`
2. Add GA4 and GSC when credentials are ready
3. Decide whether `www` should redirect to apex permanently
4. Re-run PageSpeed on the live domain once Google quota or UI access is available
