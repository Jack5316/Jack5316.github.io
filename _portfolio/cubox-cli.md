---
title: "Cubox CLI: Command-Line Client for Cubox"
excerpt: "Go CLI tool to save URLs, memos, and RSS feeds to Cubox content curation platform via its Open API"
collection: portfolio
---

## Cubox CLI: Command-Line Client for Cubox

A fast, cross-platform command-line tool written in Go for saving content to [Cubox](https://cubox.pro/), a content curation and read-later platform. Supports saving individual URLs with metadata, creating text memos, and bulk-importing entire RSS feeds.

### Project Overview

Cubox is a powerful tool for collecting and organizing web content, but its browser-centric workflow can be limiting for power users and automation scenarios. Cubox CLI wraps Cubox's Open API into a clean terminal interface, enabling scripted saves, RSS feed ingestion, and integration into any automation pipeline.

### Key Features

* **Save URLs**: Clip any URL with optional title, description, tags, and folder assignment
* **Create Memos**: Write text memos directly to Cubox from the command line
* **RSS Feed Import**: Bulk-import entire RSS feeds with automatic metadata extraction
* **Configurable Rate Limits**: Set delays and item limits for RSS ingestion to avoid API throttling
* **Secure API Config**: Token stored in `~/.config/cubox/api` using environment variables
* **Cross-Platform Binaries**: Pre-built binaries for macOS, Linux, and Windows

### Technical Implementation

* **Language**: Go
* **Build System**: Make
* **API**: Cubox Open API (JSON POST)
* **Config**: Environment variable and file-based (`~/.config/cubox/api`)
* **Distribution**: Pre-built binaries for multiple operating systems

### Development Highlights

* Chose Go for fast startup time and easy cross-platform binary distribution
* Implemented RSS parsing with configurable delay and item-limit flags for polite ingestion
* Used file-based API token config to keep credentials out of shell history
* Released pre-built binaries to lower the barrier to installation

### Tech Stack

* **Language**: Go
* **Build**: Make
* **API**: Cubox Open API (JSON / HTTP POST)
* **Distribution**: Static binaries (macOS / Linux / Windows)
* **License**: MIT

[View on GitHub](https://github.com/Jack5316/Cubox_CLI)
