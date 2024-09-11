import "./DataCollection.css";
import { useRef, useCallback, useState, useEffect } from "react";
import { CategoryScale, Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import sourceData from "../../data/sourceData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "red";

ChartJS.register(CategoryScale);

const DataCollection = () => {
  // const handleNavigateBack = () => {
  //   window.location.href = "http://localhost:5173/"; // Replace "/" with the actual URL of the previous page
  // };

  const [isChartReady, setIsChartReady] = useState(false);

  const chartRef = useRef(null);
  const chartRefPdf = useRef();

  useEffect(() => {
    // Simulate a delay to represent chart rendering time (replace with actual check)
    setTimeout(() => {
      setIsChartReady(true);
    }, 1000);
  }, []);

  const downloadDataChartinPNG = useCallback(() => {
    const link = document.createElement("a");
    link.download = "dataChart.png";

    // Handle potential errors during chart conversion (consider a loading state)
    try {
      link.href = chartRef.current.toBase64Image("image/png", 1);
      link.click();
    } catch (error) {
      console.error("Error downloading chart:", error);
      console.log(error);
      // Implement error handling (e.g., display an error message to the user)
    }
  }, []); // Dependency array includes ref

  const downloadDataChartinPDF = () => {
    if (isChartReady) {
      const input = chartRefPdf.current;
      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("p", "mm", "a4", true);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          const imgWidth = canvas.width;
          const imgHeight = canvas.height;
          const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
          const imgX = (pdfWidth - imgWidth * ratio) / 2;
          const imgY = 30;
          pdf.addImage(
            imgData,
            "PNG",
            imgX,
            imgY,
            imgWidth * ratio,
            imgHeight * ratio
          );
          pdf.save("DataCollection.pdf");
        })
        .catch((error) => {
          console.log("Error generating PDF:", error);
          // Implement additional error handling (e.g., display an error message to the user)
        });
    } else {
      console.log("Chart not ready for download yet!");
    }
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="DataCollection">
      <div>
        <button className="btn" onClick={downloadDataChartinPNG}>
          Download PNG
        </button>
        &nbsp; &nbsp; &nbsp;
        <button className="btn1" onClick={downloadDataChartinPDF}>
          Download PDF
        </button>
        <h1>Collect Data</h1>
        {/* <p>
          Of the 1.5 million <br /> registered Muslim <br />
          Voters, <br />
          <b>52%</b>
        </p> */}
        <div className="dataAnalysisCard" ref={chartRefPdf}>
          <Bar
            options={options}
            style={{ width: "400px", height: "1000px" }}
            ref={chartRef}
            data={{
              labels: sourceData.map((data) => data.state),
              datasets: [
                {
                  label: "Total No. of Muslim Population",
                  data: sourceData.map(
                    (data) => data.MuslimPopulationEstimated
                  ),
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DataCollection;
