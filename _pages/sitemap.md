---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

A list of all pages on this site. For search engines, an [XML version](/sitemap.xml) is also available.

## Main Pages

- [Home](/) - About me
- [CV](/cv/) - Education, experience, and skills
- [Portfolio](/portfolio/) - Project showcases

## Portfolio Projects

{% for post in site.portfolio %}
- [{{ post.title }}]({{ post.url }}) - {{ post.excerpt | strip_html | truncate: 80 }}
{% endfor %}

## External

- [Blog](https://jack5316.github.io/Thinking-Machine/) - Thinking Machine (AI, Technology, Philosophy)
