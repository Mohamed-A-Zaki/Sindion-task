import "./Chart.scss";
import ApexCharts from "apexcharts";
import { useEffect, useRef } from "react";

export default function Chart() {
  useEffect(() => {
    const options = {
      series: [44, 55, 41, 17, 15],
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };

    const chart = new ApexCharts(chart_ref.current, options);
    chart.render();
  }, []);

  const chart_ref = useRef(null);

  return (
    <div className="chart-sec position-relative text-center my-3">
      <div className="chart" ref={chart_ref}></div>
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="caption">solved</div>
        <h4 className="m-0">40</h4>
        <div className="total">Out of 120</div>
      </div>
    </div>
  );
}
