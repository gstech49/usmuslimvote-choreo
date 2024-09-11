import "./Strategise.css";
import { useRef, useCallback, useState, useEffect } from "react";
import { CategoryScale, Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Line, Scatter } from "react-chartjs-2";
import votersData from "../../data/votersData.json";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "red";

ChartJS.register(CategoryScale);

const Strategise = () => {
  const [isChartReady, setIsChartReady] = useState(false);
  const chartRef = useRef(null);
  const chartRefPdf = useRef();

  useEffect(() => {
    // Simulate a delay to represent chart rendering time (replace with actual check)
    setTimeout(() => {
      setIsChartReady(true);
    }, 1000);
  }, []);

  const downloadStrategiseinPNG = useCallback(async () => {
    const link = document.createElement("a");
    link.download = "strategiseChart.png";
    // Handle potential errors during chart conversion (consider a loading state)
    try {
      const allChartsCanvas = await html2canvas(chartRef.current.parentElement);
      const imageData = await allChartsCanvas.toDataURL("image/png");
      link.href = imageData;
      link.click();
    } catch (error) {
      console.error("Error downloading chart:", error);
      alert(
        "An error occurred while downloading the chart. Please try again later."
      );
      // Implement error handling (e.g., display an error message to the user)
    }
  }, []); // Dependency array includes ref

  const downloadStrategiseinPDF = () => {
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
          pdf.save("Strategise.pdf");
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
    <div className="Strategise">
      <div>
        <button className="btn" onClick={downloadStrategiseinPNG}>
          Download PNG
        </button>
        &nbsp; &nbsp; &nbsp;
        <button className="btn1" onClick={downloadStrategiseinPDF}>
          Download PDF
        </button>
        <h1>Our Strategy</h1>
        <p>
          View the differences result of &apos;Muslim Population&apos; as
          compared to &apos;Total Number of Democractic Voters&apos; and the
          &apos;Total Number of Republican Voters&apos; in three different
          graphical representation.
        </p>
        <div className="PDFCharts" ref={chartRefPdf}>
          <div className="AllCharts" ref={chartRef}>
            <div className="dataCardStrategy">
              <Line
                options={options}
                style={{ width: "100%", height: "100%" }}
                data={{
                  labels: votersData.map((data) => data.SwingStates),
                  datasets: [
                    {
                      label: "Total Number of Muslim Population",
                      data: votersData.map(
                        (data) => data.TotalNumberofMuslimPopulation
                      ),
                      backgroundColor: "white",
                      borderColor: "white",
                    },
                    {
                      label: "Total Number of Democratic Votes",
                      data: votersData.map(
                        (data) => data.TotalNumberofDemocraticVotes
                      ),
                      backgroundColor: "blue",
                      borderColor: "blue",
                    },
                    {
                      label: "Total Number of Republican Votes",
                      data: votersData.map(
                        (data) => data.TotalNumberofRepublicanVotes
                      ),
                      backgroundColor: "#FF3030",
                      borderColor: "#FF3030",
                    },
                  ],
                }}
              />
            </div>
            <div className="dataCardStrategyOne">
              {/* <p>
                The Differences Result of Muslim Population as compared to Total
                Number of Democractic Voters and the Total Number of Republican
                Voters
              </p> */}
              <Bar
                options={options}
                style={{ width: "400px", height: "100%" }}
                data={{
                  labels: votersData.map((data) => data.diff_result),
                  datasets: [
                    {
                      label: "Total Number of Muslim Population",
                      data: votersData.map(
                        (data) => data.TotalNumberofMuslimPopulation
                      ),
                      backgroundColor: "white",
                      borderColor: "white",
                    },
                    {
                      label: "Total Number of Democratic Votes",
                      data: votersData.map(
                        (data) => data.TotalNumberofDemocraticVotes
                      ),
                      backgroundColor: "blue",
                      borderColor: "blue",
                    },
                    {
                      label: "Total Number of Republican Votes",
                      data: votersData.map(
                        (data) => data.TotalNumberofRepublicanVotes
                      ),
                      backgroundColor: "#FF3030",
                      borderColor: "#FF3030",
                    },
                  ],
                }}
              />
            </div>
            <br />
            <br />
            <div className="dataCardStrategyTwo">
              {/* <p>
                The Comparison of Total Number of Republican Voters and the
                Total Number of Democractic Voters with the Total Number of
                Muslim Population
              </p> */}
              <Scatter
                options={options}
                style={{ width: "400px", height: "100%" }}
                data={{
                  labels: votersData.map((data) => data.diff_result),
                  datasets: [
                    {
                      label: "Total Number of Muslim Population",
                      data: votersData.map(
                        (data) => data.TotalNumberofMuslimPopulation
                      ),
                      backgroundColor: "white",
                      borderColor: "white",
                    },
                    {
                      label: "Total Number of Democratic Votes",
                      data: votersData.map(
                        (data) => data.TotalNumberofDemocraticVotes
                      ),
                      backgroundColor: "blue",
                      borderColor: "blue",
                    },
                    {
                      label: "Total Number of Republican Votes",
                      data: votersData.map(
                        (data) => data.TotalNumberofRepublicanVotes
                      ),
                      backgroundColor: "#FF3030",
                      borderColor: "#FF3030",
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategise;
