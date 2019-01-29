---
layout: category
title: Comics
permalink: /comics/
---
{% assign category = page.category | default: page.title %}
{% assign len = site.categories[category] | size %}
{% assign first_post = site.categories[category][0] %}
<div>{{ first_post.content }}</div>

