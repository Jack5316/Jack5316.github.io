---
title: "GetNote CLI: Command-Line Client for Get笔记"
excerpt: "Lightweight Python CLI for the Get笔记 open platform API — list, retrieve, and create notes with zero external dependencies"
collection: portfolio
---

## GetNote CLI: Command-Line Client for Get笔记

A minimal, dependency-free Python 3.9+ CLI for interacting with [Get笔记](https://www.getbiji.com/)'s open platform HTTP API. List notes with pagination, retrieve individual notes, create new ones from text, stdin, or files — all from the terminal.

### Project Overview

Get笔记 is a popular note-taking application with a developer-friendly open API. GetNote CLI wraps that API into a clean command-line interface that requires only Python's standard library — making it easy to install, audit, and embed in scripts or shell workflows without dependency management overhead.

### Key Features

* **List Notes**: Browse your note library with cursor-based pagination support
* **Retrieve Notes**: Fetch and display individual notes by ID
* **Create Notes**: Add notes from inline text, stdin pipe, or a file path
* **Direct API Access**: Query arbitrary API endpoints for advanced use cases
* **Flexible Output**: Human-readable display or raw JSON for scripting
* **Zero Dependencies**: Built on Python standard library only — no pip install of third-party packages needed

### Technical Implementation

* **Language**: Python 3.9+
* **Auth**: `Authorization: <API Key>` and `X-Client-ID` headers per official docs
* **Pagination**: Cursor-based pagination for browsing large note collections
* **Config**: API key and client ID via environment variables or CLI flags
* **Installation**: `pipx install` (recommended) or `pip install`

### Development Highlights

* Built entirely on Python's standard library to minimize attack surface and simplify auditing
* Implemented cursor-based pagination matching the Get笔记 API spec
* Supported dual output modes (human-readable and JSON) for both interactive and scripted use
* Configured via environment variables for secure, shell-history-safe credential handling

### Tech Stack

* **Language**: Python 3.9+
* **Dependencies**: Standard library only
* **Installation**: pipx / pip
* **API**: Get笔记 Open Platform HTTP API
* **License**: MIT

[View on GitHub](https://github.com/Jack5316/GetNote_CLI)
