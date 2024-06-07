export function getAttributePrompt(selectedAttributes: string[]) {
  return (
    `I need to be more persuasive. Here is a list of Facebook likes for a person I'm trying to
      convince. Can you give me a profile of who this person is (gender, age, personality traits,
      political leanings, interests, etc.)? Then please recommend 3 ways that will be most
      effective in persuading someone with these attributes.

      Please format your result as follows:

      **Profile:**
      - <list of attributes>

      **Persuasion Tactics:**
      - <list of tactics>

      Their likes are: ${selectedAttributes.join(', ')}.`
  );
}
