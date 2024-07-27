import { assign, createMachine, setup } from "xstate";

export const countMachine = setup({
  types: {
    context: {} as { count: number }
  },
  actions: {
    "increment count": assign({
      count: ({ context }) => context.count + 1,
    }),
    "decrement count": assign({
      count: ({ context }) => context.count - 1,
    }),
    "event count": assign({
      count: ({ event }) => event.ok,
    }),
    "reset count": assign({
      count: 0,
    }),
  }
}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOlwgBsBiASQDkBhAbQAYBdRUABwHtZcALrh75OIAB6IALAGYSAdhmz5AVgA0IAJ6IZikgCYpATiPz5ARksAOcwDYpAXwca0WPIVLlqAEQCizdjFefiERMUkEKX0NbQR9VRITEyspeSlzfXMWI0dnEFccAmIySioAZV8AFVYOJBBgwWFROoiVWxIso111LURzeSsFYxN9XRZbFhVUpxcMQo8S6gAlXwrqwLqG0ObQVvkSKxVzNv0e2JsSFSc8-B4IODEC92IgvkawlsQAWlsY79sZvk5s9PJRXiEmuFEPJ9AdVH9IglhkZbDkrIZMkZrg4gA */
  context: {
    count: 0,
  },

  on: {
    INC: {
      actions: "increment count",
    },
    DEC: {
      actions: "decrement count",

    },
    SET: {
      actions: "event count",
    },
    RESET: {
      actions: "reset count",
    }
  },


});
