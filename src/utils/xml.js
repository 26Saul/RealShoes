export function parseXmlText(text) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(text, "application/xml");

  const errorNode = xmlDoc.querySelector("parsererror");
  if (errorNode) {
    throw new Error("XML inválido");
  }

  const productNodes = xmlDoc.querySelectorAll("products > product");

  return Array.from(productNodes).map((node) => ({
    name: node.querySelector("name")?.textContent ?? "",
    brand: node.querySelector("brand")?.textContent ?? "",
    category: node.querySelector("category")?.textContent ?? "",
    price: Number(node.querySelector("price")?.textContent ?? 0),
    stock: Number(node.querySelector("stock")?.textContent ?? 0),
    image: node.querySelector("image")?.textContent ?? "",
  }));
}

export function toXml(data) {
  const escapeXml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&apos;");

  const productsXml = data
    .map(
      (product) => `
  <product>
    <name>${escapeXml(product.name ?? "")}</name>
    <brand>${escapeXml(product.brand ?? "")}</brand>
    <category>${escapeXml(product.category ?? "")}</category>
    <price>${escapeXml(product.price ?? 0)}</price>
    <stock>${escapeXml(product.stock ?? 0)}</stock>
    <image>${escapeXml(product.image ?? "")}</image>
  </product>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<products>${productsXml}
</products>`;
}