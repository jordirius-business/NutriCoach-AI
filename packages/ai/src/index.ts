export interface AIProvider {
  readonly providerName: string;
}

export function createAIProviderStub(name = "provider-stub"): AIProvider {
  return { providerName: name };
}
