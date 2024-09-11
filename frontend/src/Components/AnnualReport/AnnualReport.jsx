import "./AnnualReport.css";
import jsPDF from "jspdf";

function downloadPDF(data) {
  const pdf = new jsPDF();
  const splitDescription = pdf.splitTextToSize(data.description, 150); // Adjust width as needed

  // Add your PDF generation logic here, using the data object
  pdf.text(data.code, 10, 80);
  pdf.text(data.title, 10, 10);
  pdf.text(10, 30, splitDescription); // Pass the split array
  pdf.save(`${data.title}.pdf`); // Save PDF with report title
}
//const AnnualReport = ({ users }) => {
const AnnualReport = ({ reportData, search }) => {
  
  return (
    <>
      <div className="AnnualReport">
        {/*Starts getting report data from an API*/}
        {reportData
          .filter((curReportData) => {
            return search.toLowerCase() === ""
              ? curReportData
              : curReportData.title.toLowerCase().includes(search);
          })
          .map((curReportData) => {
            const { id, title, description, code } = curReportData;
            return (
              <>
                <tr>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{description}</td>
                  <td>{code}</td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => downloadPDF(curReportData)}
                    >
                      Download PDF
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        {/*Ends getting data report from an API*/}
      </div>
    </>
  );
};

export default AnnualReport;
