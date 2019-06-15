const findBounds = ({ arr }) => {
  if (!arr) return false;
  let minLat = arr[0].lat;
  let maxLat = arr[0].lat;
  let minLng = arr[0].lng;
  let maxLng = arr[0].lng;

  for (let i = 1, len = arr.length; i < len; i += 1) {
    const { lat, lng } = arr[i];
    minLat = (lat < minLat) ? lat : minLat;
    maxLat = (lat > maxLat) ? lat : maxLat;
    minLng = (lng < minLng) ? lng : minLng;
    maxLng = (lng > maxLng) ? lng : maxLng;
  }
  return {
    ne: { lat: maxLat, lng: maxLng },
    sw: { lat: minLat, lng: minLng }
  };
}

export default findBounds;