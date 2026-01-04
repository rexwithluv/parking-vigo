export interface Parking {
	fechahora: string | undefined;
	plazaslibres: number | undefined;
	id_parking: number | undefined;
	totalplazas: number | undefined;
	ocupacion: number | undefined;

	lon: number;
	id: number;
	nombre: string;
	lat: number;

	telefono: string | undefined;
	parroquia: string | undefined;
	calle: string | undefined;
	web: string | undefined;
	numero: string | undefined;
	codigo_postal: string | undefined;
	barrio: string | undefined;
}
