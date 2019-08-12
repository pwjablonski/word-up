export default function drawPDFGrid(doc, currentPuzzle, shouldDrawFill) {
  doc.setLineWidth(1);
  for (let i = 0; i < currentPuzzle.grid.length; i += 1) {
    doc.setFillColor(currentPuzzle.grid[i].fill === "." ? 0 : 255);
    doc.rect(100 + (i % 15) * 25, 200 + Math.floor(i / 15) * 25, 25, 25, "FD");
    if (currentPuzzle.grid[i].hasCircle) {
      doc.circle(
        112.5 + (i % 15) * 25,
        212.5 + Math.floor(i / 15) * 25,
        12,
        "FD"
      );
    }
    if (currentPuzzle.grid[i].clueNum) {
      doc.setFont("helvetica");
      doc.setFontType("normal");
      doc.setFontSize(7);
      doc.text(
        currentPuzzle.grid[i].clueNum.toString(),
        101 + (i % 15) * 25,
        207 + Math.floor(i / 15) * 25
      );
      doc.setFontSize(14);
    }
    if (shouldDrawFill) {
      doc.text(
        currentPuzzle.grid[i].fill,
        108 + (i % 15) * 25,
        220 + Math.floor(i / 15) * 25
      );
    }
  }
  return doc;
}
