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
    z.string(),
    z.object({ url: z.string(), label: z.string() })
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
      z.string(),
      z.array(z.object({
        label: z.string(),
        url: z.string(),
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
