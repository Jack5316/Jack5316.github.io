---
title: "Flomo CLI: Terminal Client for Flomo Notes"
excerpt: "Python command-line tool to send notes, tags, and memos to Flomo directly from the terminal via webhook API"
collection: portfolio
---

## Flomo CLI: Terminal Client for Flomo Notes

A lightweight Python CLI that lets you capture thoughts and notes to [Flomo](https://flomoapp.com/) without leaving the terminal. Supports direct arguments, piped content, file input, and hashtag-based tagging — making it easy to integrate Flomo into any scripting or automation workflow.

### Project Overview

Flomo is a minimalist micro-note-taking app focused on capturing fleeting thoughts. Flomo CLI exposes its webhook API as a first-class terminal tool, enabling power users and developers to send notes programmatically — from shell scripts, pipe chains, or keyboard shortcuts.

### Key Features

* **Multiple Input Methods**: Send notes via inline arguments, stdin pipe, or file path
* **Hashtag Tag Support**: Add tags naturally using `#hashtag` syntax inline
* **Webhook URL Override**: Point to a different endpoint per-request without changing config
* **Verbose Mode**: Inspect raw JSON responses for debugging
* **Secure Config**: Webhook URL stored in config file, keeping credentials out of shell history
* **pipx Compatible**: Install as an isolated CLI tool with no dependency conflicts

### Technical Implementation

* **Language**: Python 3
* **API**: Flomo incoming webhook (HTTP POST with JSON payload)
* **Auth**: Webhook URL as credential (treated as secret)
* **Installation**: `pip install -e .` or `pipx install`
* **Config**: Webhook URL configured once, reused across sessions

### Development Highlights

* Designed a clean CLI interface supporting three distinct input modes (argument / pipe / file)
* Implemented per-request webhook override to support multiple Flomo accounts
* Added verbose JSON output for easy debugging and automation scripting
* Packaged for pipx to ensure clean, isolated installation

### Tech Stack

* **Language**: Python
* **API Protocol**: HTTP POST / JSON webhook
* **Packaging**: pip / pipx
* **Requirements**: Flomo PRO account with webhook access

[View on GitHub](https://github.com/Jack5316/Flomo_CLI)
