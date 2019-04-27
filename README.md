# notify-link-clicks-i18n

**This add-on injects JavaScript into web pages. This add-on will work properly only on the https://dictionary.cambridge.org/ page.**

## What it does

This extension includes:

* a content script, "content-script.js", that is injected into the page
* a background script, "background-script.js"

The content script listens for clicks in the page it's attached to.
If a click is on a audio file, the content script will download it and send the notification to background script.

The background script listens for this message. When the background script
receives the message, it displays a notification containing the name of audio file.

The notification's content, as well as the extension's name and description, are
localized into German, Dutch, and Japanese, as well as the default en-US.

