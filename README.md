# moj-stack-foundations

Repo intended for learning and testing core concepts of the MoJ tech stack incrementally

[![Main Lint](https://github.com/sgsmi/moj-stack-foundations/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/sgsmi/moj-stack-foundations/actions/workflows/ci.yml)

## Roadmap (learning in public)

- [x] CI with GitHub Actions (run tests on push/PR)
- [ ] Docker: containerise a tiny NodeJS app
- [ ] GOV.UK Frontend: sample page
- [ ] Sentry: integrate SDK and trigger a test error
- [ ] Kubernetes: Deployment + Service manifests (concepts)
- [ ] AWS fundamentals: IAM, S3, CloudWatch, EKS (notes)

## Evidence

I’ll link each demo here once it’s working.

### CI with GitHub Actions - linting principles (MoJ-aligned, incremental)

See my [workflows](https://github.com/sgsmi/moj-stack-foundations/tree/main/.github/workflows).

- Start small; expand only when new tech appears.
- Run on `ubuntu-latest`; pin action versions.
- Always keep a fast lint job on PRs and pushes.
- Add language checks **only if files exist** (conditional jobs).
- Prefer check-only in CI; do auto-fixes locally.
- Add a badge and make the lint check required on `main`.

#### Default lint set (current)

- **Markdown:** `npx prettier --check "**/*.md"`
- **YAML (workflows):** `yamllint -s -c .yamllint .github/workflows`

### Initialised small node app with MoJ styling

- Basic node app initialised with GOV.UK styling implemented, take a look at a [screenshot of the first running version here](https://github.com/sgsmi/moj-stack-foundations/resources/node_app_moj_1.png).

## Notes

No secrets in the repo. `.env` files are ignored.
License: MIT
