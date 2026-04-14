---
title: "Obsidian Flomo Plugin: Instant Note Sync to Flomo"
excerpt: "Obsidian community plugin to send notes and selections from your vault directly to Flomo with a single command"
collection: portfolio
---

## Obsidian Flomo Plugin: Instant Note Sync to Flomo

An Obsidian community plugin that bridges your local markdown vault with Flomo's micro-note platform. Send any note or selected text to Flomo instantly without switching apps — keeping your capture workflow frictionless.

### Project Overview

Obsidian is a powerful local-first note-taking tool built on markdown, while Flomo excels at lightweight, frictionless thought capture. This plugin connects the two: users can highlight a passage or trigger a command to push content directly from their Obsidian vault to Flomo, maintaining a seamless writing flow.

### Key Features

* **One-Command Send**: Push the current note or selected text to Flomo with a single command palette action
* **Native Obsidian Integration**: Appears as a standard community plugin with settings panel
* **Webhook-Based Sync**: Uses Flomo's incoming webhook API for reliable delivery
* **No Context Switching**: Capture to Flomo without leaving your Obsidian workspace

### Technical Implementation

* **Framework**: Obsidian Plugin API (TypeScript)
* **API**: Flomo incoming webhook (HTTP POST)
* **Build**: Obsidian community plugin build pipeline
* **Settings**: Configurable webhook URL stored in plugin settings

### Development Highlights

* Built against the Obsidian Plugin API to integrate natively with the app's command palette and settings
* Implemented webhook-based delivery using Flomo's open API
* Designed for zero friction — one command, no modals, instant delivery

### Tech Stack

* **Language**: TypeScript
* **Framework**: Obsidian Plugin API
* **API**: Flomo Webhook (HTTP POST / JSON)
* **Build Tools**: esbuild / Obsidian plugin template

[View on GitHub](https://github.com/Jack5316/obsidian-flomo-plugin)
