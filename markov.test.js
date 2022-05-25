
const { MarkovMachine } = require("./markov");


describe('Markov Machine', function () {
    test('makes relationships', function () {
      let rel = new MarkovMachine("aa bb cc aa BB aa BB");
  
      expect(rel.chains).toEqual(new Map([
        ["aa", ["bb", "BB", "BB"]],
        ["bb", ["cc"]],
        ["cc", ["aa"]],
        ["BB", ["aa", null]]]));
    });


    test('Generates text', function () {
        let mm = new MarkovMachine("a b c");
        let text = mm.makeText();
        expect(["a b c", "b c", "c"]).toContain(text);
      });

      test('Cuts length', function () {
        let bigrams = ["the cat", "cat in", "in the", "the hat", "hat "];
        let mm = new MarkovMachine("the cat in the hat");
        let output = mm.makeText(2);
    
        let outputWords = output.split(/[ \r\n]+/);
        expect([1, 2]).toContain(outputWords.length);
      });





});