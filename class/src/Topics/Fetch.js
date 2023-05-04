import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      <table>
        <tr>
          <th className="text-center">S.no</th>
          <th className="text-center">Title</th>
          <th className="text-center">Body</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="text-center">{item.id}</td>
            <td className="pl-3 pr-3">{item.title}</td>
            <td className="pl-3 pr-3">{item.body}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Fetch;
