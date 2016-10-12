# Project Name

SWICK

## Team

  - __Product Owner__: Patrik Korzinski (@pkorzinski)
  - __Scrum Master__: Roni Vegh (@formatted)
  - __Development Team Members__: Jason Holtkamp (@holtkam2)
                                  Jeff Bernstein (@jeff-bernstein)

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

Swick is an app that can help you get to the content you need on the internet much faster.
Set up your own buttons to open several tabs with a single click. Configure interest feeds to get the latest info aggregated and streamed to your home page. Also, get friendly greeting dependant on time of day, and your location. This also allows for an overview of your local weather, as well as time of sunset/sunrise depending on current time of day.
The SentiBar close to the bottom of the page uses machine learning to analyze the content of financial and global news over the last hour and displays it in a dynamic infographic.
And there is still so much more coming! But we are careful to not add anything distracting or that doesn't add actual value or insight for the user. Clean and efficient is the approach to style.

## Requirements

`node 6.6.0` and `npm`
need to put a `.env` file in root with the below structure
```
PORT=
STORMPATH_CLIENT_APIKEY_ID=
STORMPATH_CLIENT_APIKEY_SECRET=
STORMPATH_APPLICATION_HREF='https://api.stormpath.com/v1/applications/'
DATABASE_URL='postgres://'
WATSON_TONE_URL=
WATSON_TONE_PASSWORD=
WATSON_TONE_USERNAME=
WATSON_ALCHEMY_URL=https://gateway-a.watsonplatform.net/calls
WATSON_ALCHEMY_APIKEY=
DARKSKY_APIKEY=
DARKSKY_URL=https://api.darksky.net/forecast/
YQL_APIKEY=
YQL_SECRET=
```

## Development


### Installing Dependencies

```
npm install
```

### Tasks

View the waffle.io issue [here](https://waffle.io/HRR18-Harambe/Harambe)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
