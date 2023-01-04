import { useFunc } from '../Context/FunctionProvider';
import { useGeo } from '../Context/GeoProvider';
function UpdateData() {
  const { notLoginGetFetch, notLoginPostFetch } = useFunc();
  const { getLatLngByAddress } = useGeo();
  const updateData = async () => {
    const res = await notLoginGetFetch('getPark/updateLatLng');
    console.log(res);
    // return;
    const postData = JSON.parse(JSON.stringify(res));
    for (const element of postData) {
      if (element.address !== '') {
        const addressAdded = '台北市' + element.address;
        const latlng = await getLatLngByAddress(addressAdded);
        element.lat = latlng.lat;
        element.lng = latlng.lng;
      }
      // console.log(res);
    }
    const postInData = JSON.stringify(postData);
    const updateResult = await notLoginPostFetch(
      'getPark/insertLatLng',
      postInData
    );
    console.log({ updateResult });
  };

  return (
    <>
      <button
        onClick={() => {
          updateData();
        }}
      >
        update
      </button>
    </>
  );
}
export default UpdateData;
