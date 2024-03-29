<!--


  ** DO NOT EDIT THIS FILE
  **
  ** 1) Make all changes to `README.yaml`
  ** 2) Run`make readme` to rebuild this file.
  **
  ** (We maintain HUNDREDS of open source projects. This is how we maintain our sanity.)
  **


  -->

 

 [![Latest Release](https://img.shields.io/github/release/hadenlabs/terraform-aws-rds)](https://github.com/hadenlabs/terraform-aws-rds/releases) [![Lint](https://img.shields.io/github/workflow/status/hadenlabs/terraform-aws-rds/lint-code)](https://github.com/hadenlabs/terraform-aws-rds/actions?workflow=lint-code) [![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow)](https://conventionalcommits.org) [![KeepAChangelog](https://img.shields.io/badge/Keep%20A%20Changelog-1.0.0-%23E05735)](https://keepachangelog.com)

# terraform-aws-rds

 terraform aws rds 

















## Usage


```hcl
  module "main" {
    source = "hadenlabs/rds/aws"
    version   = "0.0.0"
  }

```

Full working examples can be found in [examples](./examples) folder.






## Examples

### common

```hcl



```



 <!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 0.13 |
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | >=3.2.0 |
| <a name="requirement_local"></a> [local](#requirement\_local) | >=1.3.0 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | >=3.2.0 |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [aws_db_instance.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/db_instance) | resource |
| [aws_db_subnet_group.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/db_subnet_group) | resource |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_auto_minor_version_upgrade"></a> [auto\_minor\_version\_upgrade](#input\_auto\_minor\_version\_upgrade) | auto\_minor\_version\_upgrade | `bool` | `true` | no |
| <a name="input_copy_tags_to_snapshot"></a> [copy\_tags\_to\_snapshot](#input\_copy\_tags\_to\_snapshot) | copy tags to snapshot | `bool` | `true` | no |
| <a name="input_multi_availability_zone"></a> [multi\_availability\_zone](#input\_multi\_availability\_zone) | multi availability zone | `bool` | `false` | no |
| <a name="input_skip_final_snapshot"></a> [skip\_final\_snapshot](#input\_skip\_final\_snapshot) | skip final snapshot | `bool` | `true` | no |
| <a name="input_storage_encrypted"></a> [storage\_encrypted](#input\_storage\_encrypted) | storage encrypted | `bool` | `false` | no |
| <a name="input_allocated_storage"></a> [allocated\_storage](#input\_allocated\_storage) | storage allocated | `string` | `"20"` | no |
| <a name="input_backup_retention_period"></a> [backup\_retention\_period](#input\_backup\_retention\_period) | backup retention period | `string` | `"7"` | no |
| <a name="input_backup_window"></a> [backup\_window](#input\_backup\_window) | backup window | `string` | `"04:00-04:30"` | no |
| <a name="input_database_identifier"></a> [database\_identifier](#input\_database\_identifier) | database identifier | `string` | `"database"` | no |
| <a name="input_engine"></a> [engine](#input\_engine) | n/a | `string` | `"mysql"` | no |
| <a name="input_engine_version"></a> [engine\_version](#input\_engine\_version) | version engine rds | `string` | n/a | yes |
| <a name="input_instance_db_type"></a> [instance\_db\_type](#input\_instance\_db\_type) | database db type | `string` | `"db.t3.micro"` | no |
| <a name="input_maintenance_window"></a> [maintenance\_window](#input\_maintenance\_window) | maintenance window | `string` | `"sun:04:30-sun:05:30"` | no |
| <a name="input_name"></a> [name](#input\_name) | name database rds | `string` | n/a | yes |
| <a name="input_parameter_group"></a> [parameter\_group](#input\_parameter\_group) | parameter group | `string` | `"default.mysql5.7"` | no |
| <a name="input_password"></a> [password](#input\_password) | password of database | `string` | n/a | yes |
| <a name="input_port"></a> [port](#input\_port) | port of database | `string` | `"3306"` | no |
| <a name="input_storage_type"></a> [storage\_type](#input\_storage\_type) | storage type | `string` | `"gp2"` | no |
| <a name="input_username"></a> [username](#input\_username) | username of database | `string` | `""` | no |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_rds_endpoint"></a> [rds\_endpoint](#output\_rds\_endpoint) | n/a |
| <a name="output_rds_hostname"></a> [rds\_hostname](#output\_rds\_hostname) | n/a |
| <a name="output_rds_name"></a> [rds\_name](#output\_rds\_name) | n/a |
| <a name="output_rds_port"></a> [rds\_port](#output\_rds\_port) | n/a |
| <a name="output_rds_username"></a> [rds\_username](#output\_rds\_username) | n/a |
<!-- END_TF_DOCS -->





## Help

**Got a question?**

File a GitHub [issue](https://github.com/hadenlabs/terraform-aws-rds/issues).

## Contributing

### Bug Reports & Feature Requests

Please use the [issue tracker](https://github.com/hadenlabs/terraform-aws-rds/issues) to report any bugs or file feature requests.

### Development

In general, PRs are welcome. We follow the typical "fork-and-pull" Git workflow.

1.  **Fork** the repo on GitHub
2.  **Clone** the project to your own machine
3.  **Commit** changes to your own branch
4.  **Push** your work back up to your fork
5.  Submit a **Pull Request** so that we can review your changes

**NOTE:** Be sure to rebase the latest changes from "upstream" before making a pull request!

## Module Versioning

This Module follows the principles of [Semantic Versioning (SemVer)](https://semver.org/).

Using the given version number of `MAJOR.MINOR.PATCH`, we apply the following constructs:

1. Use the `MAJOR` version for incompatible changes.
1. Use the `MINOR` version when adding functionality in a backwards compatible manner.
1. Use the `PATCH` version when introducing backwards compatible bug fixes.

### Backwards compatibility in `0.0.z` and `0.y.z` version

- In the context of initial development, backwards compatibility in versions `0.0.z` is **not guaranteed** when `z` is
  increased. (Initial development)
- In the context of pre-release, backwards compatibility in versions `0.y.z` is **not guaranteed** when `y` is
  increased. (Pre-release)




## Copyright

Copyright © 2018-2021 [Hadenlabs](https://hadenlabs.com)



## Trademarks

All other trademarks referenced herein are the property of their respective owners.






## License

The code and styles are licensed under the LGPL-3.0 license [See project license.](LICENSE).



## Don't forget to 🌟 Star 🌟 the repo if you like terraform-aws-rds

[Your feedback is appreciated](https://github.com/hadenlabs/terraform-aws-rds/issues)
