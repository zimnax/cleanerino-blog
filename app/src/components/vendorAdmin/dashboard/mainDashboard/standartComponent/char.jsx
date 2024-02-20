import css from "../../dashboard.module.css";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import arrow from "../../../../../svg/Vectorarrow.svg";
import { ReactSVG } from "react-svg";
import direction from "../../../../../svg/Direction.svg";
const Char = () => {
  const [data, setData] = useState([]);
  const [periodType, setPeriodType] = useState("days");
  // Функція для генерації випадкових даних продажів для демонстрації
  const generateSalesData = (numDays) => {
    const newData = [];
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - numDays);

    for (let i = 0; i < numDays; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const sales = Math.floor(Math.random() * 1000); // Генеруємо випадкові значення продажів
      newData.push({ name: formatDate(date), sales });
    }

    return newData;
  };

  // Функція для форматування дати у потрібний формат (наприклад, "дд-мм")
  const formatDate = (date) => {
    if (periodType === "days") {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      return `${day}-${month}`;
    } else if (periodType === "months") {
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      return monthNames[date.getMonth()];
    } else if (typeof periodType === "number" && periodType !== 0) {
      return date.getDate(); // Повертаємо числову дату
    }
  };

  // Оновлення даних при зміні періоду
  const handleButtonClick = (numDays) => {
    setPeriodType(numDays === 0 ? "months" : numDays);
    const newData = generateSalesData(numDays);
    setData(newData);
  };
  return (
    <div className={css.wrapChart}>
      <div className={css.wrapData}>
        <p className={css.pReportY}>Your reports</p>
        <p className={css.bigPrice}>50000$</p>
        <div className={css.wrapPDownd}>
          <div className={css.saleProcent}>
            <ReactSVG src={direction} />
            <span className={css.saleProcent}>+30%</span>
          </div>
          <p className={css.procentCurMonth}>+18.4 this month</p>
        </div>
        <div className={css.wrapButtonData}>
          <p className={css.buttData} onClick={() => handleButtonClick(7)}>
            7d
          </p>
          <p className={css.buttData} onClick={() => handleButtonClick(30)}>
            30d
          </p>
          <p className={css.buttData} onClick={() => handleButtonClick(180)}>
            6m
          </p>
          <p className={css.buttData} onClick={() => handleButtonClick(365)}>
            12m
          </p>
          <p className={css.buttData} onClick={() => handleButtonClick(0)}>
            All time
          </p>
        </div>
      </div>
      <div className={css.wrapRealChart}>
        <div className={css.wrapSectionChart}>
          <ReactSVG src={arrow} className={css.arrowSales} />
          <section className={css.sectionChart}>
            <option>Sales</option>
          </section>
        </div>
        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis hide />
            <Tooltip labelFormatter={(value) => formatDate(new Date(value))} />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#FF0000"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default Char;
