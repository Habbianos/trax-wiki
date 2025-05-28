import { z } from 'zod'

// Folder name: `timeline-events/[hotel]/`
// File type: `.yaml`
export const timelineEventSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  labels: z.array(z.string()).optional(),
  links: z.array(z.union([
    z.string().url(),
    z.object({ url: z.string().url(), label: z.string() })
  ])).optional(),
  related: z.array(z.string()).optional(),
})

// Folder name: `samples-infobox/`
// File type: `.toml`
export const sampleInfoboxSchema = z.object({
  id: z.string(),
  sampleBy: z.string(),

  details: z.object({
    soundPack: z.number(),
    identifier: z.number(),
    symbol: z.enum([
      'circle',
      'square',
      'diamond',
      'lower',
      'colon',
      'parenthesis',
      'equal',
      'cross',
      'heart',
    ]),
    length: z.number(),
    download: z.union([
      z.string().url(),
      z.array(z.object({
        label: z.string(),
        url: z.string().url(),
      }))
    ]),
  }),

  musicality: z.object({
    genre: z.string(),
    soundSource: z.string(),
    mood: z.string(),
    key: z.string(),
    tempo: z.string(),
    purpose: z.string(),
  }),
})

// Folder name: `packs-infobox/`
// File type: `.toml`
export const soundPackInfoboxSchema = z.object({
  id: z.coerce.number(),
  class: z.string(),
  name: z.string(),
  description: z.string(),
  masterclass: z.string(),
  image: z.union([
    z.string().url(),
    z.object({
      icon: z.string().url(),
      furni: z.string().url().optional(),
      furniSmall: z.string().url().optional(),
    })
  ]),
  mainColor: z.string(), // HEX color
  caseColor: z.string(), // HEX color
  preview: z.string().url(),
  releaseDate: z.record(z.string(), z.coerce.date()) // hotel => "DD/MM/YYYY"
})
