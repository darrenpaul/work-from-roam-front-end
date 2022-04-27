import Button from 'elements/Button';
import { doSpotApprove } from 'services/spot';
import { stringDateAndTimeFromSeconds } from 'utils/dateUtils';
import { successNotification } from 'utils/notifications';

const SpotsTable = ({ spots, onSpotApproval }) => {
  const handleSpotApproval = async (spotId) => {
    // await doSpotApprove(accessToken, selectedSpot?.id);
    successNotification('Spot approved successfully');
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Created Date</th>
            <th>Address</th>
            <th>City</th>
            <th>Approve</th>
          </tr>
        </thead>
        <tbody>
          {spots.map((spot, index) => {
            return (
              <tr key={index}>
                <td>{spot.id}</td>
                <td>{spot.name}</td>
                <td>{stringDateAndTimeFromSeconds(spot.createdDate._seconds)}</td>
                <td>{spot.address}</td>
                <td>{spot.city}</td>
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
