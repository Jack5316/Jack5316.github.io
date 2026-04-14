---
title: "LLM Wiki: Agent-Maintained Knowledge Base"
excerpt: "AI agent that builds a compounding, interconnected markdown wiki vault inspired by Andrej Karpathy's LLM Wiki concept"
collection: portfolio
---

## LLM Wiki: Agent-Maintained Knowledge Base

A personal knowledge management system where an AI agent continuously integrates new sources into a structured, interconnected wiki — inspired by Andrej Karpathy's LLM Wiki concept. Rather than plain retrieval-augmented generation, knowledge compounds over time in browsable markdown files.

### Project Overview

Traditional RAG re-derives structure on every query and discards insights. LLM Wiki instead maintains a growing vault of linked notes, where the agent ingests new material, updates summaries, tracks contradictions, and records an append-only activity log — making knowledge accumulate and become more useful over time.

### Key Features

* **Agent-Maintained Vault**: LLM agent automatically integrates new sources into linked wiki notes
* **Immutable Source Storage**: Raw inputs are preserved separately from processed wiki content
* **Summary & Contradiction Tracking**: Agent updates summaries and flags conflicting information across notes
* **Append-Only Activity Log**: Full audit trail of all ingests and updates
* **Obsidian Compatible**: Vault format designed for graph visualization in Obsidian
* **Lint & Maintenance Workflows**: Built-in tooling to keep the knowledge base clean

### Technical Implementation

* **Storage**: Markdown-based notes organized as a structured wiki
* **Agent Framework**: Designed to work with Claude or other LLMs as the maintenance agent
* **Vault Format**: Obsidian-compatible file structure with bidirectional links
* **Organization**: Separation between raw source documents and processed wiki content

### Development Highlights

* Designed an append-only ingestion pipeline that prevents overwriting source material
* Implemented contradiction detection so the agent flags conflicting facts across notes
* Structured the vault to be browsable both programmatically and visually via Obsidian's graph view
* Built around the insight that compounding knowledge outperforms stateless retrieval over time

### Tech Stack

* **Language**: Markdown / plain text
* **Agent**: LLM-powered (Claude / Deepseek compatible)
* **Visualization**: Obsidian vault format
* **Source Control**: Git

[View on GitHub](https://github.com/Jack5316/llm-wiki)
