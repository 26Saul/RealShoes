export function parseJsonText(text) {
  const parsed = JSON.parse(text);
  return Array.isArray(parsed) ? parsed : parsed.products ?? [];
}

export function toJson(data) {
  return JSON.stringify(data, null, 2);
}