---
sidebar_position: 2
---

# Overview

First of all, let me reiterate that anything outside the `apps/app` workspace were fun side-projects that I've been itching to attempt, and found themselves in the perfect occasion to do so. There's a [breakdown](#time-breakdown) of the time I spent on each portion of the project, and what is relevant to the project requirements and what isn't. 

:::warning
What was not required for the project is **not** something I would do for a production-ready project.
:::

## Project Structure

Let's let the graph do the talking: 

```mermaid
graph TD
  subgraph Legend
    direction LR
    folder[ Folder ] ~~~ app{ Application } ~~~ lib( Library )
  end
  subgraph Workspaces
  R[ root ] ==> A[ apps ]
  R[ root ] ==> P[ packages ]
  subgraph Apps
  A --> APP{ Main App }
  A --> DOCS{ Devlog }
  A --> SB{ Storybook }
  end
  subgraph Packages
  P --> ESL( ESLint Configs )
  P --> T( Theme Engine )
  end
  end
  style APP stroke:red,fill:orange
  style Legend fill:transparent
  style Workspaces fill:transparent
```

Okay, I didn't get `mermaid` to make something really, really nice. Essentially, I split the project into apps and libraries. As far as the project is concerned, the `apps/app` is the only bit that matters. The rest is setup, documentation, design system, and other fun distractions (like the theme engine).

## "Stolen" Code

Almost all of the code in this project is mine alone. I have taken some code from StackOverflow&trade; (few lines) and I've credited where that was the case. I've also "borrowed" some of the colors, typography, and overall structure of the theme from [Material UI](https://material-ui.com/) as well. 

Finally, there are bits of code that I've taken from older (and public) projects of mine. The theme system is a simplified (and complete) variant of something I've tried to build on an unfinished project, the ripple component was likewise taken from another unfinished project... you'll see a pattern here :sweat_smile:.

## Time Breakdown

---
| Time | Activity | Disclaimer |
| --- | --- | --- |
| 0.6 day | Setup | Setting up turborepo, eslint, testing, and the apps |
| 2 days | Theme Engine | Whooo, boy. Fun, but definitely not needed. Also very cool |