---
layout: category
title: Taglines
permalink: /taglines/
---
<ul id="taglines" class="posts-list"></ul>
<script>
    var list = "";
    subtitles.forEach(function(tag) {
        var pubTime = Date.parse(tag.date);
        if (Date.now() > pubTime) {
            list += "<li><h3>" + tag.tag + "&nbsp;<small>" + tag.date + "</small></h3><hr /></li>";
        }
    });
    document.getElementById("taglines").innerHTML = list;
</script>

