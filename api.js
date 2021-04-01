const getApiData = async (cb) => {
  try {
    // fetch data from API
    const data = await fetch(
      "http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=8&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
    );
    // word
    const word = (await data.json())[0].word;
    // return call back function
    cb(word, false);
  } catch (err) {
    // retrn call back with error
    cb(false, err);
    console.error(err);
  }
};
