import React, { useState, useEffect } from "react";
import axios from "axios";

const withMySQLData = (endpoint) => (WrappedComponent) => {
  const WithMySQLData = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          // Виконання запиту до сервера за допомогою Axios
          const response = await axios.get(endpoint);
          setData(response.data); // Оновлення стану даними з сервера
        } catch (error) {
          console.error("Помилка при отриманні даних з сервера:", error);
        }
      };

      fetchData(); // Виклик функції для отримання даних
    }, [endpoint]); // Зміна endpoint приведе до повторного виклику useEffect

    // Повернення обгорнутого компонента з даними
    return <WrappedComponent data={data} {...props} />;
  };

  return WithMySQLData; // Повернення компоненти вищого порядку
};

export default withMySQLData; // Експорт компоненти вищого порядку
