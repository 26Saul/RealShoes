import { parseCsvText } from "../../utils/csv";
import { parseJsonText } from "../../utils/json";
import { parseXmlText } from "../../utils/xml";

export async function parseImportedFile(file) {
  const extension = file.name.split(".").pop().toLowerCase();
  const text = await file.text();

  let data = [];

  if (extension === "csv") {
    data = parseCsvText(text);
  } else if (extension === "json") {
    data = parseJsonText(text);
  } else if (extension === "xml") {
    data = parseXmlText(text);
  } else {
    throw new Error("Formato no soportado");
  }

  return normalizeProducts(data);
}

function normalizeProducts(data) {
  if (!Array.isArray(data)) {
    throw new Error("El archivo no contiene una lista válida de productos");
  }

  return data.map((item) => ({
    name: item.name ?? item.nombre ?? "",
    brand: item.brand ?? item.marca ?? "",
    category: item.category ?? item.categoria ?? "",
    price: Number(item.price ?? item.precio ?? 0),
    stock: Number(item.stock ?? item.stockDisponible ?? 0),
    image: item.image ?? item.imagen ?? "",
  }));
}