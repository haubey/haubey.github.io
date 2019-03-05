---
layout: category
title: Taglines
permalink: /taglines/
---
<ul id="taglines" class="posts-list"></ul>
<script>
    let list = "";
    subtitles.forEach(function(tag) {
        list += "<li><h3>" + tag.tag + "&nbsp;<small>" + tag.date + "</small></h3><hr /></li>";
    });
    document.getElementById("taglines").innerHTML = list;
</script>

