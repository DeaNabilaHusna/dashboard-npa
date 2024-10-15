import "../css/main.scss";
import "./matrix.scss";
export default function Matrix() {
  return (
    <div className="matrix">
      <h2>* Matrix</h2>
      <div className="table">
        <table className="styled-table">
          <thead>
            <tr>
              <th colSpan="2">Utilization</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
            </tr>
            <tr>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
            </tr>
            <tr>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="styled-table">
        <thead>
        <tr>
            <th colSpan="2"></th> 
            <th colSpan="2"></th> 
            <th colSpan="2"></th> 
        </tr>
        <tr>
            <th>May '23</th>
            <th>May '24</th>
            <th>May '23</th>
            <th>May '24</th>
            <th>May '23</th>
            <th>May '24</th>
        </tr>
    </thead>
          <tbody>
            <tr>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
            </tr>
            <tr>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
            </tr>
            <tr>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="styled-table item">
          <thead>
          <tr>
            <th colSpan="2"></th> 
        </tr>
        <tr>
            <th>May '23</th>
            <th>May '24</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                341
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="styled-table">
          <thead>
            <tr>
              <th colSpan="2">
               &lt;36 Mio
              </th>
              <th colSpan="2">
                36-72 Mio
              </th>
              <th colSpan="2">
                &gt; 72 Mio
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
            </tr>
            <tr>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
              <td>
                341
                <p>4.0%</p>
              </td>
            </tr>
            <tr>
              <th colSpan={6}><p>Revenue</p></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
