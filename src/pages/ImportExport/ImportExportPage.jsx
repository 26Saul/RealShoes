import { useState } from "react";
import {
    getProducts,
    importProducts,
} from "../../services/firebase/products.service";
import { parseImportedFile } from "../../services/file/import.service";
import { exportData } from "../../services/file/export.service";
import "./ImportExportPage.css";

function ImportExportPage() {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleImport = async (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        try {
            setLoading(true);
            setMessage("Importando archivo...");

            const products = await parseImportedFile(file);
            await importProducts(products);

            setMessage(`Se importaron ${products.length} productos correctamente.`);
        } catch (error) {
            setMessage(`Error al importar: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleExport = async (format) => {
        try {
            setLoading(true);

            const products = await getProducts();
            exportData(products, format);

            setMessage(`Archivo datos.${format} generado correctamente.`);
        } catch (error) {
            setMessage(`Error al exportar: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="import-export-page">
            <div className="import-export-wrapper">
                <div className="import-export-header">
                    <span className="import-export-badge">RealShoes Admin</span>
                    <h1>Importar y exportar productos</h1>
                    <p>
                        Sube archivos CSV, JSON o XML para añadir productos a la aplicación
                        y exporta los datos actuales en distintos formatos.
                    </p>
                </div>

                <div className="import-export-grid">
                    <div className="import-card">
                        <h2>Importar archivo</h2>
                        <p className="card-description">
                            Selecciona un archivo compatible para cargar productos en la base
                            de datos.
                        </p>

                        <label className="file-upload">
                            <span>Seleccionar archivo</span>
                            <input
                                type="file"
                                accept=".csv,.json,.xml"
                                onChange={handleImport}
                                disabled={loading}
                            />
                        </label>

                        <div className="supported-formats">
                            <span>Formatos permitidos:</span>
                            <div className="format-tags">
                                <span>CSV</span>
                                <span>JSON</span>
                                <span>XML</span>
                            </div>
                        </div>
                    </div>

                    <div className="export-card">
                        <h2>Exportar datos</h2>
                        <p className="card-description">
                            Descarga los productos actuales guardados en la aplicación.
                        </p>

                        <div className="export-buttons">
                            <button
                                className="export-btn csv"
                                onClick={() => handleExport("csv")}
                                disabled={loading}
                            >
                                Exportar CSV
                            </button>

                            <button
                                className="export-btn json"
                                onClick={() => handleExport("json")}
                                disabled={loading}
                            >
                                Exportar JSON
                            </button>

                            <button
                                className="export-btn xml"
                                onClick={() => handleExport("xml")}
                                disabled={loading}
                            >
                                Exportar XML
                            </button>
                        </div>
                    </div>
                </div>

                {message && (
                    <div className={`status-message ${message.includes("Error") ? "error" : "success"}`}>
                        {message}
                    </div>
                )}
            </div>
        </section>
    );
}

export default ImportExportPage;