type RawLocation = [string, number, number];

type PointLocation = {
    key: string;
    name: string;
    lat: number;
    lng: number;
}

const mapPoints: RawLocation[] = [
	["G2 0.21", 48.84047582388744, 10.066747517154688],
	["G2 0.31", 48.840518958098464, 10.066525416758775],
	["G2 0.01", 48.84135527518146, 10.067297306659324],
	["Bibliothek", 48.8404949946574, 10.067006027466213],
	["Studienrendencenter", 48.83821332226776, 10.072666960422413],
];

const formatted: PointLocation[] = mapPoints.map(([name,lat, lng]) => ({
    name, lat, lng, key: JSON.stringify({name, lat, lng})
}))

export default formatted