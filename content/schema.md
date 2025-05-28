# Trax Wiki Schemas

## SampleInfobox

_Object containing the following properties:_

| Property              | Type                                                                                                                                                                                                                                                                                                                                                                            |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`id`** (\*)         | `string`                                                                                                                                                                                                                                                                                                                                                                        |
| **`sampleBy`** (\*)   | `string`                                                                                                                                                                                                                                                                                                                                                                        |
| **`details`** (\*)    | _Object with properties:_<ul><li>`soundPack`: `number`</li><li>`identifier`: `number`</li><li>`symbol`: `'circle' \| 'square' \| 'diamond' \| 'lower' \| 'colon' \| 'parenthesis' \| 'equal' \| 'cross' \| 'heart'`</li><li>`length`: `number`</li><li>`download`: `string` _or_ _Array of objects:_<br /><ul><li>`label`: `string`</li><li>`url`: `string`</li></ul></li></ul> |
| **`musicality`** (\*) | _Object with properties:_<ul><li>`genre`: `string`</li><li>`soundSource`: `string`</li><li>`mood`: `string`</li><li>`key`: `string`</li><li>`tempo`: `string`</li><li>`purpose`: `string`</li></ul>                                                                                                                                                                             |

_(\*) Required._

## TimelineEvent

_Object containing the following properties:_

| Property               | Type                                                                                              |
| :--------------------- | :------------------------------------------------------------------------------------------------ |
| **`id`** (\*)          | `string`                                                                                          |
| **`name`** (\*)        | `string`                                                                                          |
| **`description`** (\*) | `string`                                                                                          |
| **`date`** (\*)        | `Date` (_nullable_)                                                                               |
| `labels`               | `Array<string>`                                                                                   |
| `links`                | `Array<string _or_ _Object with properties:_<ul><li>url: string</li><li>label: string</li></ul>>` |
| `related`              | `Array<string>`                                                                                   |

_(\*) Required._
