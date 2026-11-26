# lessons

Short, beginner-friendly lessons with quizzes, written by the `tutor` subagent of [claude-dev-toolkit](https://github.com/E54Sacha/claude-dev-toolkit) while I build my projects. Every new lesson is committed and pushed here automatically.

The quizzes are also the question bank for my CS revision game ([cs-quiz-app](https://github.com/E54Sacha/cs-quiz-app)).

## Structure

```
<subject>/<topic>/<lesson>.md          ← the lesson, readable on GitHub
<subject>/<topic>/<lesson>.quiz.json   ← the same quiz, structured for the game
subjects.json                          ← the allowed subjects
schema/quiz.schema.json                ← the format of every .quiz.json
```

Subjects: `cs`, `maths`, `physics`, `finance`, `general-knowledge` (see [subjects.json](subjects.json)).

## Lesson format

Each `.md` file starts with a metadata header:

```yaml
---
title: Claude Code subagents
subject: cs
topic: claude-code
difficulty: beginner
created: 2026-11-26
source: claude-dev-toolkit      # the project it came from, or "general"
quiz: subagents.quiz.json
---
```

Then: The idea · Key words · How it works · Example · Why use it · Other ways · Quiz.

## Quiz format (for the game)

Four question types, described in [schema/quiz.schema.json](schema/quiz.schema.json):

| `type` | `answer` | Extra fields |
|---|---|---|
| `open` | model answer (text) | |
| `true_false` | `true` or `false` | |
| `multiple_choice` | index of the correct option, 0-3 | `options` (4 strings) |
| `fill_blank` | the missing word | `accept` (other spellings) |

Every question also has an `explanation`.

## License

Content: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) © 2026 E54Sacha
