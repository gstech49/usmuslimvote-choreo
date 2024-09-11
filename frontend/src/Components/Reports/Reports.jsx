import { useEffect, useState } from "react";
import Select from "react-select";
import "./Reports.css";
import AnnualReport from "../AnnualReport/AnnualReport";

const PDF_FILE_URL1 = "http://localhost:5173/2024AnnualReport.pdf";
const PDF_FILE_URL2 = "http://localhost:5173/CAIRDeepDive.pdf";
const PDF_FILE_URL3 = "http://localhost:5173/SurveyReport.pdf";
const PDF_FILE_URL4 = "http://localhost:5173/understandingMuslimVoters.pdf";

const API = "https://jsonplaceholder.typicode.com/users";
const API_REPORTS = `${import.meta.env.VITE_API_URL}/reports`;

const Reports = ({ setResults }) => {
  {
    /*Starts getting data from reports.json*/
  }
  // const [column, setColumn] = useState([]);
  // const [records, setRecords] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5173/reports.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setColumn(Object.keys(data.reports[0]));
  //       setRecords(data.reports);
  //     });
  // }, []);
  {
    /*Ends getting data from reports.json*/
  }
  const [search, setSearch] = useState("");
  const [value, setValue] = useState(null);
  // const [users, setUsers] = useState([]);
  const [reportData, setReportData] = useState([]);
  //function to download a file
  const downloadFileAtUrl = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  //---------------------------------------------------Start Fetch API in a table--------------------------//
  const fetchReportData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setReportData(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    // fetchUsers(API);
    fetchReportData(API_REPORTS);
  }, []);
  //---------------------------------------------------End Fetch API in a table--------------------------//

  //---------------------------------------------------Start PDF Download from scratch--------------------------//
  // a function to create pdf from scratch
  // const generatePdf = async () => {
  //   const doc = new jsPDF();
  //   doc.text("Annual Report PDF", 10, 10);
  //   doc.text("This is the annual report 2024", 10, 20);
  //   doc.write("https://emgageusa.org/2023/06/20/2022-annual-report/");
  //   //Save the pdf with name annualreport.pdf
  //   doc.save("AnnualReport2024");
  // };
  //---------------------------------------------------Start PDF Download from scratch--------------------------//
  const options = [
    { value: "issue", label: "Issue" },
    { value: "report", label: "Report" },
    { value: "turnout", label: "Muslim Voter Turnout" },
    // ... more options
  ];

  return (
    <>
      <div className="reports">
        <div className="input-wrappers">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Keyword"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="input-wrapper1">
            <Select
              onChange={setValue}
              options={options}
              defaultValue={value}
              placeholder="Select your option"
              isSearchable
              noOptionsMessage={() => "No suitable option found"}
              styles={{
                placeholder: (baseStyles, state) => ({
                  ...baseStyles,
                  color: "#1d0877",
                  state,
                }),
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderColor: "none",
                }),
              }}
            />
          </div>
          <button
            className="btn"
            style={{
              display: "inline",
              marginInline: "10px",
              position: "relative",
            }}
          >
            Search
          </button>
        </div>
        <br />
        <div className="btn-filedownload">
          <p>
            <b>2024 Annual Report</b>
          </p>
          <table className="tableData">
            <thead></thead>
            <tbody className="tableBody">
              <AnnualReport reportData={reportData} search={search} />
            </tbody>
          </table>
          {/*Starts getting report data from json*/}
          {/* <table className="tableData">
            <thead>
              <tr>
                {column.map((c, i) => (
                  <th key={i}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {records.map((record, i) => (
                <tr key={i}>
                  <td>{records.title}</td>
                  <td>{records.description}</td>
                  <td>{records.code}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
          {/*Ends getting report data from json*/}
          <br />
          {/*
          <button
            className="btn"
            onClick={() => {
              downloadFileAtUrl(PDF_FILE_URL);
            }}
          >
            Download File
          </button>*/}
        </div>
      </div>
    </>
  );
};

export default Reports;
