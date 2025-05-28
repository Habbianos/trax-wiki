# Trax Wiki Schemas

## SampleInfobox

_Object containing the following properties:_

| Property              | Type                                                                                                                                                                                                                                                                                                                                                                                            |
| :-------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`id`** (\*)         | `string`                                                                                                                                                                                                                                                                                                                                                                                        |
| **`sampleBy`** (\*)   | `string`                                                                                                                                                                                                                                                                                                                                                                                        |
| **`details`** (\*)    | _Object with properties:_<ul><li>`soundPack`: `number`</li><li>`identifier`: `number`</li><li>`symbol`: `'circle' \| 'square' \| 'diamond' \| 'lower' \| 'colon' \| 'parenthesis' \| 'equal' \| 'cross' \| 'heart'`</li><li>`length`: `number`</li><li>`download`: `string` (_url_) _or_ _Array of objects:_<br /><ul><li>`label`: `string`</li><li>`url`: `string` (_url_)</li></ul></li></ul> |
| **`musicality`** (\*) | _Object with properties:_<ul><li>`genre`: `string`</li><li>`soundSource`: `string`</li><li>`mood`: `string`</li><li>`key`: `string`</li><li>`tempo`: `string`</li><li>`purpose`: `string`</li></ul>                                                                                                                                                                                             |

_(\*) Required._

## SoundPackInfobox

_Object containing the following properties:_

| Property               | Type                                                                                                                                                               |
| :--------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`id`** (\*)          | `number` (_nullable_)                                                                                                                                              |
| **`class`** (\*)       | `string`                                                                                                                                                           |
| **`name`** (\*)        | `string`                                                                                                                                                           |
| **`description`** (\*) | `string`                                                                                                                                                           |
| **`masterclass`** (\*) | `string`                                                                                                                                                           |
| **`image`** (\*)       | `string` (_url_) _or_ _Object with properties:_<ul><li>`icon`: `string` (_url_)</li><li>`furni`: `string` (_url_)</li><li>`furniSmall`: `string` (_url_)</li></ul> |
| **`mainColor`** (\*)   | `string`                                                                                                                                                           |
| **`caseColor`** (\*)   | `string`                                                                                                                                                           |
| **`preview`** (\*)     | `string` (_url_)                                                                                                                                                   |
| **`releaseDate`** (\*) | _Object with dynamic keys of type_ `string` _and values of type_ `Date` (_nullable_)                                                                               |

_(\*) Required._

## TimelineEvent

_Object containing the following properties:_

| Property               | Type                                                                                                              |
| :--------------------- | :---------------------------------------------------------------------------------------------------------------- |
| **`id`** (\*)          | `string`                                                                                                          |
| **`name`** (\*)        | `string`                                                                                                          |
| **`description`** (\*) | `string`                                                                                                          |
| **`date`** (\*)        | `Date` (_nullable_)                                                                                               |
| `labels`               | `Array<string>`                                                                                                   |
| `links`                | `Array<string (_url_) _or_ _Object with properties:_<ul><li>url: string (_url_)</li><li>label: string</li></ul>>` |
| `related`              | `Array<string>`                                                                                                   |

_(\*) Required._
