# Contributing to trax-wiki

Thanks for your interest in contributing to traxmachine.com website's content!  
This project is open to community contributions via pull requests.

## Structure

All content lives inside the `content/` folder, organized by collection.  
Each item is a single file, using `.md`, `.yaml`, or `.toml` extension.

Example structure:

```txt
content/
├── timeline-events/
│   ├── hhus/
│   │   └── hhus-trax-release.yaml
│   ├── hhfi/
│   │   └── hhfi-[...].yaml
│   ├── hhbr/
│   │   └── hhbr-[...].yaml
│   └── [...]
├── packs-page/
│   ├── sound_set_1.md
│   └── [...]
├── packs-infobox/
│   ├── sound_set_1.toml
│   └── [...]
├── samples-page/
│   ├── sound_machine_sample_1.md
│   └── [...]
└── samples-infobox/
    ├── sound_machine_sample_1.toml
    └── [...]
```

## Format

- Files must be written in the appropriate format described in `schema.ts`.
- Use **2 spaces** for indentation
- File names should be **kebab-case**, e.g., `my-new-event.yaml`

## Minimum fields

Each collection has its own schema, but all files are validated using [Zod](https://zod.dev/)-based definitions in `schema.ts`.

You can look at existing files or the `schema.ts` file to see what fields are required.

## How to contribute

1. **Fork** the repository
2. Create a new branch from `main`
3. Add or update the files inside the correct folder
4. Commit your changes
5. **Open a Pull Request**

We will review your PR and merge it if everything looks good!

## Code of Conduct

Please be respectful, kind, and constructive. We're building this together.

---

If you have any questions, open an issue or ask in your pull request.  
Thanks for helping build the Traxmachine universe!
