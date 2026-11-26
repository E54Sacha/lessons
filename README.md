# lessons

Short, beginner-friendly lessons with quizzes, written by the `tutor` subagent of [claude-dev-toolkit](https://github.com/E54Sacha/claude-dev-toolkit) while I build my projects. Every new lesson is committed and pushed here automatically.

The quizzes are also the question bank for my CS revision game ([cs-quiz-app](https://github.com/E54Sacha/cs-quiz-app)).

## Read the lessons

Open **[the lessons home page](https://e54sacha.github.io/lessons/)** (or `index.html` locally). Each lesson is an illustrated web page: diagrams built from cards and icons, drawings, formulas, tip boxes and a quiz with hidden answers.

## Structure

```
index.html                               ← home page, rebuilt automatically with every new lesson
<subject>/<topic>/<lesson>.html          ← the lesson page
<subject>/<topic>/<lesson>.quiz.json     ← the same quiz, structured for the game
assets/lesson.css, assets/lesson.js      ← shared style (light and dark mode) and script (diagrams, formulas)
subjects.json                            ← the allowed subjects
schema/quiz.schema.json                  ← the format of every .quiz.json
```

Subjects: `cs`, `maths`, `physics`, `finance`, `general-knowledge` (see [subjects.json](subjects.json)).

Diagrams are plain HTML/CSS (the illustration kit in `assets/lesson.css`) with [Font Awesome](https://fontawesome.com/) icons; formulas use [KaTeX](https://katex.org/). Both are loaded from a CDN with integrity checks.

## Quiz format (for the game)

Four question types, described in [schema/quiz.schema.json](schema/quiz.schema.json):

| `type` | `answer` | Extra fields |
|---|---|---|
| `open` | model answer (text) | |
| `true_false` | `true` or `false` | |
| `multiple_choice` | index of the correct option, 0-3 | `options` (4 strings) |
| `fill_blank` | the missing word | `accept` (other spellings) |

Every question also has an `explanation`, and can have a `figure`: one self-contained inline SVG picture (inline colours, no scripts), the same one shown in the lesson page.

## License

Content: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) © 2026 E54Sacha
