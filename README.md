# IMS Lab

## Data

Data is in [`./data`](data) directory with JSON format.

### members data format

* PhD students start from "p", followed by grade.  
  For example, "p1" stands for "First year", or "博一".
* Master students start from "m", followed by grade.
  For example, "m1" stands for "First year", or "碩一".
* Master and PhD alumni start from "g", followed by year graduated.
  For example, "g104" stands for "Graduated in 2015", or "104 年畢".
* Bachelor students and alumni start from "b", followed by year graduated.
  For example, "b104" stands for "Graduated in 2015", or "104 級".

## Develop

- Do install related package before starting develop: `$ npm install`
- Start dynamic app test on port 3000: `$ npm run dev`
- Eslint js code check before pushing on `reactapp` branch: `$ npm run pre-commit`
- Build app & export (output to `./docs` directory): `$ npm run build`
- Publish `./docs`: `$ npm run publish`  
  (Do note that `npm run build`, and add commit with `docs/` change is necessary before publish)
