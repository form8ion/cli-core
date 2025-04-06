import {prompt} from '@form8ion/overridable-prompts';

export default function getPrompt(decisions) {
  return ({questions}) => prompt(questions, decisions);
}
