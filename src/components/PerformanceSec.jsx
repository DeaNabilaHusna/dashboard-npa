// import ChartSec from "./ChartSec";
// import Alert from './Alert';
// import Matrix from './Matrix';
// import './performancesec.scss';

// export default function PerformanceSec() {
//   return (
//     <div className="performancesec">
//       <ChartSec
//         name="Parameter (revenue, Payload, Traffic)"
//       />
//       <Matrix/>
//       <Alert
//       />
//     </div>
//   );
// }

import ChartSec from "./ChartSec";
import Alert from './Alert';
import Matrix from './Matrix';
import './performancesec.scss';

export default function PerformanceSec() {
  return (
    <div className="performancesec">
      <div className="chartsec">
        <ChartSec
          name="Parameter (revenue, Payload, Traffic)"
        />
      </div>
      <div className="matrix">
        <Matrix />
      </div>
      <div className="alert">
        <Alert />
      </div>
    </div>
  );
}
