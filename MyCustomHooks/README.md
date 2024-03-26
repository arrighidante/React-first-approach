# :books: Custom Hooks Repository

This repository contains a collection of React Custom Hooks that you can use in your projects to speed up your development and keep your code clean and organized.

## :file_folder: Contents

The repository contains the following Custom Hooks:

1. \`useForm\`: For handling forms.
2. \`useFetch\`: For making HTTP requests.
3. \`useCounter\`: For handling counters.
4. \`useToggle\`: For handling boolean states.

## :wrench: How to Use

To use any of these Custom Hooks, simply import the Hook you need into your component:

```
import { useForm } from './hooks/useForm';
```

Then, you can use the Hook in your component:

```
const [values, handleInputChange, reset] = useForm(initialState);
```

## :bulb: Contributing

If you have an idea for a new Custom Hook or an improvement to an existing one, feel free to open an Issue or a Pull Request.
