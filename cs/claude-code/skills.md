---
title: Claude Code skills
subject: cs
topic: claude-code
difficulty: beginner
created: 2026-11-26
source: claude-dev-toolkit
quiz: skills.quiz.json
---

# Claude Code skills

> Example used: `skills/scope-project/SKILL.md`

## The idea

A skill is a set of instructions you write once and Claude reuses whenever it's needed. Instead of explaining the same process every time ("ask me questions first, then write a plan"), you save it in a file. It's like a recipe card: Claude doesn't memorize every recipe, it only reads the card when it's time to cook that dish.

## Key words

- **Skill:** a folder with a `SKILL.md` file that teaches Claude how to do one kind of task.
- **Frontmatter:** the few lines between `---` at the top of the file, holding the skill's name and description.
- **Description:** one or two sentences saying what the skill does and when to use it.
- **Plugin:** a package that can hold several skills (and other tools) so they can be installed together.
- **Slash command:** typing `/plugin-name:skill-name` to start a skill yourself.

## How it works

1. When Claude Code starts, it reads only the name and description of every skill. This is cheap, so you can have many skills.
2. You send a message.
3. If your message matches a skill's description, Claude opens that skill and reads its full instructions.
4. Claude follows the instructions step by step. It reads extra files from the skill's folder (like a template) only when a step needs them.
5. You can also skip the matching and start a skill directly with its slash command.

## Example

`scope-project` turns a vague project idea into a `REQUIREMENTS.md`. Its description lists the phrases that should start it ("I want to build", "plan this") and when *not* to use it (bug fixes). Its instructions split the work into 4 phases (ask, check the scope, write, hand off), and it reads its template only when it reaches the writing phase.

```markdown
---
name: scope-project          # the name used in /claude-dev-toolkit:scope-project
description: Turns a project idea into a REQUIREMENTS.md ...
  Use when the user ... says "new project idea", "I want to build", "plan this" ...
  Do not use for changes to code in an existing project, bug fixes ...
---                          # everything above is always loaded; everything below only when the skill starts
```

## Why use it

- ✅ You stop repeating the same instructions in every conversation.
- ✅ Claude follows the same steps every time, so the results are consistent.
- ✅ Only descriptions are loaded at the start, so many skills cost very little.
- ⚠️ If the description is vague, Claude won't know when to use the skill.
- ⚠️ Instructions are guidance, not hard rules: Claude can still skip a step sometimes.

## Other ways

- **CLAUDE.md file:** for rules that apply to every conversation in a project, not to one kind of task.
- **Subagent:** when the task should run in its own separate context, like a long code explanation.

## Quiz

1. What is a skill in Claude Code?
2. The few lines between the two `---` at the top of a skill file are called the _____.
3. How does Claude decide when to use a skill?
   - A) It runs every skill on every message
   - B) It reads all descriptions and opens the skill whose description matches your message
   - C) It only uses skills you start with a slash command
   - D) It picks one at random
4. Is it true that Claude reads the full instructions of every skill when it starts?
5. Is it true that you can start a skill yourself with a slash command?
6. Why does a skill read extra files, like a template, only when a step needs them?
7. What happens if a skill's description is too vague?
   - A) The skill fails to install
   - B) Claude asks you to rewrite it
   - C) Nothing, descriptions are optional
   - D) Claude often doesn't know when to use it
8. A _____ is a package that can hold several skills, so they install together.

<details>
<summary>Answers</summary>

1. A folder with a `SKILL.md` file: a short description, then instructions Claude follows for one kind of task. You write it once and reuse it.
2. **Frontmatter.** It holds the skill's name and description.
3. **B.** Claude always reads every description, and opens a skill when your message matches it. C is tempting, but slash commands are only one of the two ways to start a skill.
4. **No, false.** At the start it only reads each skill's name and description. The full instructions load only when the skill is used.
5. **Yes, true.** Typing `/plugin-name:skill-name` starts it directly, without waiting for Claude to match it.
6. To keep Claude's context small: you only pay for a file when it's actually needed.
7. **D.** Claude matches your message against the description, so a vague one rarely matches. A is tempting, but the skill still installs fine.
8. **Plugin.** It bundles skills (and other tools) into one installable package.

</details>

## What to ask about next

- How a subagent (like `tutor`) differs from a skill.
- How hooks make something happen every time, without relying on Claude.
