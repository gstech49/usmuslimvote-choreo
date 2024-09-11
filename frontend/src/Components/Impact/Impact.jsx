import "./Impact.css";
import { useRef, useCallback, useState, useEffect } from "react";
import { CategoryScale, Chart as ChartJS, defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import votersData from "../../data/votersData.json";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

defaults.maintainAspectRatio = true;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "red";

ChartJS.register(CategoryScale);

const Impact = () => {
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

  const downloadImpactPNG = useCallback(async () => {
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

  const downloadImpactPDF = () => {
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
          const imgY = 20;
          pdf.addImage(
            imgData,
            "PNG",
            imgX,
            imgY,
            imgWidth * ratio,
            imgHeight * ratio
          );
          pdf.save("Impact.pdf");
        })
        .catch((error) => {
          console.log("Error generating PDF:", error);
          // Implement additional error handling (e.g., display an error message to the user)
        });
    } else {
      console.log("Chart not ready for download yet!");
    }
  };

  return (
    <div className="Impact">
      <button className="btn" onClick={downloadImpactPNG}>
        Download PNG
      </button>
      &nbsp; &nbsp; &nbsp;
      <button className="btn1" onClick={downloadImpactPDF}>
        Download PDF
      </button>
      <h1>Impact</h1>
      <div className="ImpactDataPdf" ref={chartRefPdf}>
        <div className="ImpactData" ref={chartRef}>
          <p>
            The following data describes the impact of rate of muslim population
            registered voters in eight different states.
          </p>
          <br />
          <Doughnut
            style={{ width: "400px", height: "100%" }}
            data={{
              labels: votersData.map((data) => data.SwingStates),
              datasets: [
                {
                  label: "PercentageofRegisteredVoters",
                  data: votersData.map(
                    (data) => data.PercentageofRegisteredVoters
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

export default Impact;
