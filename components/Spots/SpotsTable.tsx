import Button from 'elements/Button';
import { doSpotApprove } from 'services/spot';
import { stringDateAndTimeFromSeconds } from 'utils/dateUtils';
import { successNotification } from 'utils/notifications';

const SpotsTable = ({ spots, onSpotApproval }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Created Date</th>
            <th>Created By</th>
            <th>Country</th>
            <th>Approve</th>
          </tr>
        </thead>
        <tbody>
          {spots.map((spot, index) => {
            return (
              <tr key={index}>
                <td>{spot.id}</td>
                <td>{spot.company}</td>
                <td>{stringDateAndTimeFromSeconds(spot.createdDate._seconds)}</td>
                <td>{spot.createdBy}</td>
                <td>{spot.country}</td>
                <td>
                  <Button onClick={() => onSpotApproval(spot.id)}>Approve</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SpotsTable;
