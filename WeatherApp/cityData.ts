export interface City {
  id: number;
  name: string;
  temperature: string;
  feelsLike: string,
  conditions: string;
  sunUp: string;
  sunDown: string;
  wind: string;
  image: string;
}

export const cities: City[] = [
    {
      id: 1,
      name: 'New York',
      temperature: '23°C',
      feelsLike: '23°C',
      conditions: 'Delvis molnigt',
      sunUp: '06.56',
      sunDown: '18.32',
      wind: '2 m/s',
      image: 'https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg',
    },
    {
      id: 2,
      name: 'Los Angeles',
      temperature: '25°C',
      feelsLike: '23°C',
      conditions: 'Soligt',
      sunUp: '06.50',
      sunDown: '18.32',
      wind: '1 m/s',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/1200px-Los_Angeles_with_Mount_Baldy.jpg',
    },
    {
       id: 3,
       name: 'Borås',
       temperature: '13°C',
       feelsLike: '12°C',
       conditions: 'Regn',
       sunUp: '07.20',
       sunDown: '18.32',
       wind: '2 m/s',
       image: 'https://cdn.innocode.digital/cmedical.no/uploads/2021/09/sandwalls-plats.jpg',
    },
    {
       id: 4,
      name: 'Barcelona',
      temperature: '32°C',
      feelsLike: '31°C',
      conditions: 'Soligt',
      sunUp: '07.52',
      sunDown: '19.27',
      wind: '4 m/s',
      image: 'https://wp.globaluniversitysystems.com/bsbi/wp-content/uploads/sites/2/2023/06/web-banner-barcelona.jpg',
    },
    {
       id: 5,
       name: 'Göteborg',
       temperature: '22°C',
       feelsLike: '20°C',
       conditions: 'Molnigt',
       sunUp: '07.24',
       sunDown: '18.36',
       wind: '3 m/s',
       image: 'https://s3-eu-north-1.amazonaws.com/py3.visitsweden.com/images/_DSC4999_Copyright20Steampipe20Production2.max-1650x1100.jpg',
    },
  ];
  