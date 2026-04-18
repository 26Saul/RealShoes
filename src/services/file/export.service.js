import { toCsv } from "../../utils/csv";
import { toJson } from "../../utils/json";
import { toXml } from "../../utils/xml";
import { downloadFile } from "../../utils/download";

export function exportData(data, format) {
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error("No hay datos para exportar");
  }

  if (format === "csv") {
    const csv = toCsv(data);
    downloadFile(csv, "datos.csv", "text/csv;charset=utf-8;");
    return;
  }

  if (format === "json") {
    const json = toJson(data);
    downloadFile(json, "datos.json", "application/json;charset=utf-8;");
    return;
  }

  if (format === "xml") {
    const xml = toXml(data);
    downloadFile(xml, "datos.xml", "application/xml;charset=utf-8;");
    return;
  }

  throw new Error("Formato no soportado");
}