import tradeguide from '../images/tradeguide.png';
import auction from '../images/auction.png';
import weather from '../images/weather_app.jpg';

export const projects = [
    {
      title: 'Trade Guide',
      description: "Trade Guide is a web application with primary target audience of beginner investors who need help choosing the right investment opportunities. The app uses advanced finance API providers to give the user neccessary information about available stock options and crypto options, making the decision to invest easier. It summarises the most useful information and provides access to other resourses for user to explore.",
        image: tradeguide,
        tags: ['jQuery ', 'Moment.js ', 'Javascript ', 'Chart.js'],
      source: 'https://github.com/ErnestAr/Trade_Guide',
      visit: 'https://ernestar.github.io/Trade_Guide/',
      id: 0,
    },
    {
      title: 'Super Auction Kart',
      description:"Super Auction Cart is an auction site strictly for Nintendo products. It reduces the amount of time collector's spend searching the internet for Nintendo items. Super Auction Cart also helps reduce the amount of time a collector spends listing their items to sell too.",
      image: auction,
      tags: ['MySql ', 'Javascript '],
      source: 'https://github.com/harviator/project-2-auction-site',
      visit: 'https://enigmatic-taiga-76650.herokuapp.com/',
      id: 1,
    },
    {
      title: 'Weather App',
      description:"A weather application that uses jquery, moment.js and Openweathermap API. Users are able to search a cities weather information and retrieve the cities temperature, wind speed, humidity, conditions, and uv index.",
      image: weather,
      tags: ['MySql ', 'Javascript '],
      source: 'https://github.com/kcrawford101/Weather_App_2.0',
      visit: 'https://kcrawford101.github.io/Weather_App_2.0/',
      id: 1,
    }
  ];

