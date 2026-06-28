/**
 * PollASIA 2026 — receptor de pronósticos
 * Cada envío de la página se guarda como una fila en la hoja "Respuestas".
 * Columnas: Fecha y hora | Nombre | Apodo | Celular | Partido 1..31 | Campeón
 */

var SHEET_NAME = "Respuestas";

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000); // evita que dos envíos simultáneos choquen
  try {
    var data = JSON.parse(e.postData.contents);

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) { sheet = ss.insertSheet(SHEET_NAME); }

    // Encabezados (solo la primera vez)
    if (sheet.getLastRow() === 0) {
      var header = ["Fecha y hora", "Nombre", "Apodo", "Celular"];
      for (var i = 1; i <= 31; i++) { header.push("Partido " + i); }
      header.push("Campeón");
      sheet.appendRow(header);
      sheet.setFrozenRows(1);
    }

    var picks = data.picks || [];
    var row = [new Date(), data.nombre || "", data.apodo || "", data.celular || ""];
    for (var j = 0; j < 31; j++) { row.push(picks[j] || ""); }
    row.push(data.champ || "");
    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Para probar la URL en el navegador (debe mostrar el texto OK)
function doGet() {
  return ContentService.createTextOutput("PollASIA 2026 OK");
}
