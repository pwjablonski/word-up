import { createLogic } from "redux-logic";
import jsPDF from "jspdf";
import "jspdf-autotable";

import { getCurrentPuzzle } from "../selectors";
import drawPDFGrid from "../util/drawPDFGrid";
import getCluesAndAnswers from "../util/getCluesAndAnswers";

export default createLogic({
  type: "CREATE_PDF",
  async process({ getState }, dispatch, done) {
    const state = getState();
    const currentPuzzle = getCurrentPuzzle(state);
    // eslint-disable-next-line new-cap
    let doc = new jsPDF("p", "pt");
    doc = drawPDFGrid(doc, currentPuzzle, false);
    doc.addPage();
    doc = drawPDFGrid(doc, currentPuzzle, true);
    doc.addPage();

    const { newAcross, newDown } = getCluesAndAnswers(currentPuzzle);

    doc.autoTableSetDefaults({
      headStyles: {
        fillColor: false,
        textColor: 0,
        fontSize: 16,
        fontStyle: "normal",
        overflow: "visible"
      },
      bodyStyles: {
        fillColor: false,
        textColor: 0,
        fontSize: 10,
        cellPadding: 6
      },
      alternateRowStyles: { fillColor: false }
    });

    doc.autoTable(
      [
        { title: "Across", dataKey: "clueNum" },
        { title: "", dataKey: "text" },
        { title: "", dataKey: "answer" }
      ],
      newAcross
    );
    doc.autoTable(
      [
        { title: "Down", dataKey: "clueNum" },
        { title: "", dataKey: "text" },
        { title: "", dataKey: "answer" }
      ],
      newDown
    );

    doc.setFontSize(9);
    for (let i = 1; i <= 5; i += 1) {
      doc.setPage(i);
      doc.text(
        doc.internal.pageSize.width / 2,
        40,
        currentPuzzle.author,
        null,
        null,
        "center"
      );
      doc.setLineWidth(0.5);
      doc.line(0 + 150, 48, doc.internal.pageSize.width - 150, 48);
    }

    doc.save(`${currentPuzzle.title}.pdf`);

    done();
  }
});
