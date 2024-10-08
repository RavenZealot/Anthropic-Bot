# Anthropic-Bot

AI chat bot for Discord using Anthropic API

## Reference

- [Getting started - Anthropic](https://docs.anthropic.com/en/api/getting-started)

## Required (Only once)

- `.env` (Root directory)
  - ANTHROPIC_ORG_ID : Anthropic [Organization ID](https://console.anthropic.com/settings/organization)
    Currently, the Organization ID is not used in the API.
  - ANTHROPIC_API_KEY : Anthropic [API keys](https://console.anthropic.com/settings/keys)
  - BOT_TOKEN : Discord Application [Token](https://discord.com/developers/applications)
  - CHAT_CHANNEL_ID : for [Messages](https://docs.anthropic.com/en/api/messages)
    Multiple designations possible
  - ANTHROPIC_EMOJI : Emoji for Anthropic API (e.g. `<:Anthropic:1234567890123456789>`)
- Discord Application Generated URL

## Run

```shell-session
$ node bot/index.js
```

## Requests for developer (Optional)

In VS Code

1. Use [`Commit Message Editor`](https://marketplace.visualstudio.com/items?itemName=adam-bender.commit-message-editor) extention
   - Import `comit_template.json`
   - Use `Commit Message Editor` for messages when creating commits.
