# Objects

Manipulate object data

# Contents

- [Installation](#Installation)
- [Definitions](#Definitions)
  
  - [Tasks](#Tasks)
    - [merge](#merge)
    - [select](#select)
    - [value](#value)

# Installation

## MESG Core

This service requires [MESG Core](https://github.com/mesg-foundation/core) to be installed first.

You can install MESG Core by running the following command or [follow the installation guide](https://docs.mesg.com/guide/start-here/installation.html).

```bash
bash <(curl -fsSL https://mesg.com/install)
```

## Service

Download the source code of this service, and then in the service's folder, run the following command:
```bash
mesg-core service deploy
```

# Definitions


# Tasks

## merge

Task key: `merge`

merge multiple objects into one

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **sources** | `sources` | `Object` | Array of objects |

### Outputs

#### failure

Output key: `failure`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **message** | `message` | `String` |  |

#### success

Output key: `success`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **data** | `data` | `Object` | Merged object data |


## select

Task key: `select`

partially select some fields from object or array of objects

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **fields** | `fields` | `String` | field key patterns to match with field keys of objects |
| **flatten** | `flatten` | `Boolean` | **`optional`** flatten fields from child object to root object |
| **source** | `source` | `Any` | source data can be object or array of objects |

### Outputs

#### failure

Output key: `failure`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **message** | `message` | `String` |  |

#### success

Output key: `success`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **data** | `data` | `Any` | New object or array of objects from selected fields |


## value

Task key: `value`

Get value of matching object's requested field

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **from** | `from` | `String` | Field to get its value from the matching object |
| **match** | `match` | `Object` | Matching filter object fields |
| **sources** | `sources` | `Object` | Array of objects |

### Outputs

#### failure

Output key: `failure`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **message** | `message` | `String` |  |

#### success

Output key: `success`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **data** | `data` | `Any` | Value of matching object's requested field |


