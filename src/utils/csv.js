export function parseCsvText(text) {
  const lines = text.trim().split("\n");
  if (lines.length < 2) return [];

  const headers = lines[0].split(",").map((h) => h.trim());

  return lines.slice(1).map((line) => {
    const values = line.split(",").map((v) => v.trim());

    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = values[index] ?? "";
    });

    return obj;
  });
}

export function toCsv(data) {
  if (!data.length) return "";

  const headers = ["name", "brand", "category", "price", "stock", "image"];

  const escapeCsv = (value) => {
    const stringValue = String(value ?? "");
    if (
      stringValue.includes(",") ||
      stringValue.includes('"') ||
      stringValue.includes("\n")
    ) {
      return `"${stringValue.replace(/"/g, '""')}"`;
    }
    return stringValue;
  };

  const rows = data.map((item) =>
    headers.map((header) => escapeCsv(item[header])).join(",")
  );

  return [headers.join(","), ...rows].join("\n");
}