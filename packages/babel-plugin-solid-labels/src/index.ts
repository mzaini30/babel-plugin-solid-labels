import { PluginObj } from '@babel/core';
import { State } from './types';
import LABEL_PARSER from './label-parser';
import COMMENT_PARSER from './comment-parser';
import CTF_PARSER from './ctf-parser';

declare global {
  function $signal<T>(value: T): T;
  function $memo<T>(value: T): T;
  function $untrack<T>(value: T): T;
  function $batch<T>(value: T): T;
}

export default function solidReactivityPlugin(): PluginObj<State> {
  return {
    pre() {
      this.hooks = new Map();
    },
    visitor: {
      ...LABEL_PARSER,
      ...COMMENT_PARSER,
      ...CTF_PARSER,
    },
  };
}
