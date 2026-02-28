export const buildSearchPrompt = (
    query: string,
    contracts: unknown[]
) => {
    return `
  You are a smart contract search assistant.
  
  User search query:
  "${query}"
  
  Here is a list of contracts in JSON format:
  ${JSON.stringify(contracts, null, 2)}
  
  Your task:
  - Analyze the meaning of the search query
  - Return ONLY contracts that are semantically relevant
  - Return result as valid JSON array
  - Do NOT include explanations
  - Do NOT include markdown
  - Return ONLY pure JSON
  `;
};