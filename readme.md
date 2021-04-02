# Consistency made even simpler

Collection of utilities for plop generator framework. Generate variables, get pre-configured generators and much more with just a few steps.

What is this package doing for You?

- Makes the code consistent across the whole repository.
- Reduces the nervousness caused by correcting typos.
- Saves a lot of time from creating a boilerplate files.

## Getting started

1. Install the [@ofadiman/plop-utils](https://www.npmjs.com/package/@ofadiman/plop-utils) package as a dev dependency.

```shell
yarn add -D @ofadiman/plop-utils
```

2. Create a `plopfile.ts` in the root of your project and setup initial generators.

```ts
import { setupPlop } from '@ofadiman/plop-utils'
import { NodePlopAPI } from 'plop'

export default function plopGenerator(plop: NodePlopAPI): void {
  setupPlop(plop)
}
```

3. Run the generator and follow the instructions that appear in the terminal.

```shell
yarn plop
```

That's it! Now you are ready to start saving your time!

## Creating custom generators

The first thing you may want to do is to create your own generator that suits your project. To facilitate this process, the library provides [plop-generator](https://github.com/Ofadiman/plop-utils/tree/main/src/generators/plop-generator) which scaffolds the initial generator files for you. It is not enabled by default, so we have to tweak our `plopfile.ts` a bit.

```ts
import { setupPlop } from '@ofadiman/plop-utils'
import { NodePlopAPI } from 'plop'

export default function plopGenerator(plop: NodePlopAPI): void {
  setupPlop(plop, { shouldSetupGeneratorTemplate: true })
}
```

Now, when we run `yarn plop` command we will see an option to create a custom generator. Let's choose it then. Plop asks us how we want to name our new generator. We can simply say `function`. Now, inside `codegen` directory we have `function` directory with a few files. The `function.config.ts` file is responsible for the configuration of a generator (questions asked during codegen, answer validation, etc.), the `function.constants.ts` file holds variables that will be used during codegen process, the `function.actions.ts` file stores all the actions that will be run after we answer all the questions. Inside the `function` directory we also have the `templates` directory that contains all templates for files that we want to generate.

To finish generator configuration we need to do 2 more things. The first is to specify our template for the generated function in `templates/[name].ts`.

```ts
import { functionConstants } from '../function.constants'

export const template = `export const ${functionConstants.variables.handlebars.name.camelCase} = (): void => {}
`
```

Here, we are declaring the shape of content in generated file. The variable `functionConstants.variables.handlebars.name.camelCase` is equal to `{{ camelCase name }}`. [Handlebars](https://handlebarsjs.com/) goes ahead and substitutes the `name` part to whatever the user answered in the `name` prompt and transforms the value to camel case.

The second necessary thing is to declare a path under which we want to generate our function. This happens in `function.actions.ts`.

```ts
import { ActionType } from 'plop'

import { functionConstants } from './function.constants'

export const functionActions: ActionType[] = [
  {
    path: `src/functions/${functionConstants.variables.handlebars.name.camelCase}/${functionConstants.variables.handlebars.name.camelCase}.ts`,
    template: require('./templates/[name].template').template,
    type: 'add'
  }
]
```

Here, we are saying that for a function named e.g. `getUserById` we want to use path `src/functions/getUserById/getUserById.ts`.

That's it! You've successfully set up your first custom generator!

## Bundled generators

Writing your own generators from scratch is not the best way to save time, so the library provides you with some pre-configured generators that enforce consistent project structure.

Here is the full list of available generators:

- `plop-generator` - Generate a custom plop generator.

## Prompt validation

To validate prompt values you can use `composeValidators` function. By default, it requires user to type a non-empty string in kebab case form. You can override this behaviour by specifying a new list of validator functions.

```ts
export const functionConfig: GeneratorConfig = {
  // ...
  prompts: [
    {
      // ...
      validate: composeValidators(
        requireInput('Input is required!'),
        requirePascalCase('Provided string must be in pascal case!'),
        requireSingularForm('Provided string must be in singular form!')
      )
    }
  ]
}
```

Complete list of validators:

- `requireCamelCase` - Passed string must be in camel case.
- `requireHookCase` - Passed string must start with `use` prefix.
- `requireInput` - Passed string must be non-empty.
- `requireKebabCase` - Passed string must be in kebab case.
- `requirePascalCase` - Passed string must be in pascal case.
- `requirePluralForm` - Passed string must be in plural form.
- `requireSingularForm` - Passed string must be in singular form.

## Additional helpers

By default, plop exposes some helpers that may come in handy while you are building your templates.

- `camelCase` - changeFormatToThis
- `constantCase` - CHANGE_FORMAT_TO_THIS
- `dashCase/kebabCase` - change-format-to-this
- `dotCase` - change.format.to.this
- `lowerCase` - change format to this
- `pathCase` - change/format/to/this
- `properCase` - pascalCase: ChangeFormatToThis
- `sentenceCase` - Change format to this,
- `snakeCase` - change_format_to_this
- `titleCase` - Change Format To This

The library provides a few additional helpers.

- `plural` - Change singular to plural form.
- `singular` - Change plural to singular form.

## Custom variables

By default, every variable passed to the `getManyConstants` function via `base` object is being transformed to `camelCase`,`constantCase`,`dotCase`,`kebabCase`,`lowerCase`,`pascalCase`,`pathCase`,`plural`,`sentenceCase`,`singular`,`snakeCase`,`titleCase` and `unmodified` variant. It should cover most of the usages but sometimes your templates may require customized variables e.g. camel cased variable that is also in plural form. In order to achieve this we can pass an additional argument to the `getManyConstants` function. It's an object that as a key has one of the `base` object keys and as a value an object which has any key and value generated via `getOneConstant` function.

```ts
const base = {
  name: 'name'
} as const

const handlebars = getManyConstants(base, {
  name: {
    singularPascalCase: getOneConstant(base.name, 'singular', 'pascalCase')
  }
})
```
