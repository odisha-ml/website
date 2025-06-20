+++
title = "How Did We Get Here?"
template = "series.html"
sort_by = "weight"
transparent = true
draft = false

[extra]
series = true
series_template_placeholders = ["$POSITION", "$TOPIC", "$DIFFICULTY"]

# Introduction.
[extra.series_intro_templates]
next_only = """
Welcome to $SERIES_HTML_LINK! This $SERIES_PAGES_NUMBER-part series will teach you the history of AI.

Up next: $NEXT_HTML_LINK - $NEXT_DESCRIPTION
"""

middle = """
📚 Part $SERIES_PAGE_INDEX of $SERIES_PAGES_NUMBER in $SERIES_HTML_LINK

Previously: $PREV_HTML_LINK
Next up: $NEXT_HTML_LINK
"""

prev_only = """
Welcome to the final part of $SERIES_HTML_LINK!
New here? Start with $FIRST_HTML_LINK to build a strong foundation.

Previously: $PREV_HTML_LINK
"""

# Fallback template.
default = """
This is the $POSITION article in $SERIES_HTML_LINK.
Today's topic: $TOPIC
Difficulty level: $DIFFICULTY
"""

# Outro.
[extra.series_outro_templates]
next_only = """
Thanks for reading! 🙌

Continue your journey with $NEXT_HTML_LINK, where $NEXT_DESCRIPTION
Or check out the complete [$SERIES_TITLE]($SERIES_PERMALINK) series outline.
"""

middle = """
---
📝 Series Navigation

- Previous: $PREV_HTML_LINK
- Next: $NEXT_HTML_LINK
- [Series Overview]($SERIES_PERMALINK)
"""

prev_only = """
🎉 Congratulations! You've completed $SERIES_HTML_LINK.

Want to review? Here's where we started: $FIRST_HTML_LINK
Or check what we just covered in $PREV_HTML_LINK.
"""

# Fallback.
default = """
---
This article is part $SERIES_PAGE_INDEX of $SERIES_PAGES_NUMBER in $SERIES_HTML_LINK.
"""

+++