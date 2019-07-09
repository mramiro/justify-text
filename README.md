## How to run

### Requirements:
* NodeJs 10+

The main function expects two parameters: an input string and the desired length:

```
node ./index.js "The quick brown fox jumps over the lazy dog." 52
```

Note that the main function has no dependencies and should run just fine with pure node. However, if you wish to run the provided Unit Tests you first must install Jest:

```
npm install
```

And then:
```
npm test
```
