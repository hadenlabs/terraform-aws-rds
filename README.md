<!--


  ** DO NOT EDIT THIS FILE
  **
  ** 1) Make all changes to `README.yaml`
  ** 2) Run`make readme` to rebuild this file.
  **
  ** (We maintain HUNDREDS of open source projects. This is how we maintain our sanity.)
  **


  -->

# terraform-aws-rds

[![Lint](https://github.com/hadenlabs/terraform-aws-rds/actions/workflows/lint.yml/badge.svg?branch=develop)](https://github.com/hadenlabs/terraform-aws-rds/actions) [![Issues](https://img.shields.io/github/issues/hadenlabs/terraform-aws-rds.svg)](https://github.com/hadenlabs/terraform-aws-rds/issues) [![Latest Release](https://img.shields.io/github/release/hadenlabs/terraform-aws-rds.svg)](https://github.com/hadenlabs/terraform-aws-rds/releases)

terraform aws rds

## :page_facing_up: License

terraform-aws-rds is an open-sourced software licensed under the [MIT license](LICENSE.md).

## Usage

```hcl
  module "main" {
    source = "github.com/hadenlabs/terraform-aws-rds"

    name        = "repository-example"

  }
```

Full working example can be found in [example](./example) folder.

## :page_facing_up: Examples

### common

```hcl



```

 <!-- DO NOT EDIT. THIS FILE IS GENERATED BY THE MAKEFILE. -->

# Terraform variables

This document gives an overview of variables used in the platform of the terraform-aws-rds.

## Requirements

| Name      | Version |
| --------- | ------- |
| terraform | >= 0.13 |

## Providers

No provider.

## Inputs

| Name | Description                                        | Type       | Default | Required |
| ---- | -------------------------------------------------- | ---------- | ------- | :------: |
| tags | This is to help you add tags to your cloud objects | `map(any)` | `null`  |    no    |

## Outputs

No output.

## Help

**Got a question?**

File a GitHub [issue](https://github.com/hadenlabs/terraform-aws-rds/issues), send us an [email](email) or join our [Slack Community](slack).

## Contributing

### Bug Reports & Feature Requests

Please use the [issue tracker](https://github.com/hadenlabs/terraform-aws-rds/issues) to report any bugs or file feature requests.

### Developing

In general, PRs are welcome. We follow the typical "fork-and-pull" Git workflow.

1.  **Fork** the repo on GitHub
2.  **Clone** the project to your own machine
3.  **Commit** changes to your own branch
4.  **Push** your work back up to your fork
5.  Submit a **Pull Request** so that we can review your changes

**NOTE:** Be sure to rebase the latest changes from "upstream" before making a pull request!

### Versioning

Releases are managed using github release feature. We use [Semantic Versioning](http://semver.org) for all the releases. Every change made to the code base will be referred to in the release notes (except for cleanups and refactorings).

## Copyright

Copyright © 2018-2021 [Hadenlabs](https://hadenlabs.com)

## Trademarks

All other trademarks referenced herein are the property of their respective owners.

## Don't forget to 🌟 Star 🌟 the repo if you like terraform-aws-rds

[Your feedback is appreciated](https://github.com/hadenlabs/terraform-aws-rds/issues)
