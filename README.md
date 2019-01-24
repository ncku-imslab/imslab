# IMS Lab

## Data

Data is in [`./data`](data) directory with JSON format.

### members data format

* PhD students start from "p", followed by grade.  
  For example, "p1" stands for "First year", or "博一".
* Master students start from "m", followed by grade.
  For example, "m1" stands for "First year", or "碩一".
* Master and PhD alumni start from "gra", followed by year graduated.
  For example, "gra104" stands for "Graduated in 2015", or "104 年畢".
* Bachelor students and alumni start from "b", followed by year graduated.
  For example, "b104" stands for "Graduated in 2015", or "104 級".

## Develop

```
$ sudo npm install
```

start dynamic app on port 3000

```
$ npm start
```

build app & export (output to `./out` directory)

```
$ npm run build
```
