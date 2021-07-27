import React from 'react';
import {Bar} from 'react-chartjs-2';
const data = {
  labels: ['서울', '경기', '대구', '인천', '기타'],
  datasets: [
    {
      label: '확진자',
      backgroundColor: '#3F82EF',
      borderColor: 'rgba(255,99,132,0)',
      borderWidth: 0,
      hoverBackgroundColor: '#2572F1',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [444, 384, 81, 61, 394]
    }],
};
function App() {
  return (
    <div>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
    </div>
  );
}
export default App;