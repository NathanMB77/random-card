/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const RandomExcuse = () => {
    let who = [
      "My dog",
      "My mom",
      "My son",
      "My cactus",
      "My cat",
      "My goldfish",
      "My grandma",
      "A ghost friend",
      "A frog",
      "I"
    ];
    let action = [
      "ate",
      "smashed",
      "passed away.",
      "be having a kid.",
      "obliterated",
      "burned",
      "destroyed",
      "stole",
      "lost",
      "deleted",
      "forgot",
      "dissolved",
      "evaporated",
      "melted",
      "froze",
      "drowned",
      "buried",
      "hid",
      "misplaced"
    ];
    let what = [
      "my homework",
      "my car",
      "my documents",
      "my dad",
      "my keys",
      "my phone",
      "my computer",
      "my shoes",
      "my money",
      "my wallet",
      "my passport",
      "my ID",
      "my credit card",
      "my glasses",
      "my watch",
      "my bike",
      "my skateboard",
      "my surfboard",
      "my snowboard",
      "my skis",
      "my camera",
      "my headphones",
      "my earphones",
      "my speakers",
      "my microphone",
      "my guitar",
      "my piano",
      "my violin",
      "my drums",
      "my saxophone",
      "my trumpet",
      "my trombone",
      "my clarinet",
      "my flute",
      "my harmonica",
      "my accordion",
      "my banjo",
      "my ukulele",
      "my mandolin",
      "my harmonium",
      "my cello",
      "my bass",
      "my double bass",
      "my tuba",
      "my sousaphone",
      "my trumpet",
      "my french horn",
      "my oboe",
      "my bassoon",
      "my piccolo",
      "my recorder",
      "my maracas",
      "my tambourine",
      "my triangle",
      "my xylophone",
      "my marimba",
      "my vibraphone",
      "my glockenspiel",
      "my timpani",
      "my drumsticks",
      "my mallets",
      "my brushes",
      "my bow",
      "my plectrum",
      "my capo",
      "my strings",
      "my reeds",
      "my mouthpiece",
      "my sheet music",
      "my music stand",
      "my metronome",
      "my tuner",
      "my pedal",
      "my amplifier",
      "my speaker",
      "my headphones",
      "my earplugs",
      "my ear defenders",
      "my ear muffs",
      "my ear protectors",
      "my earbuds",
      "my earphones"
    ];
    let when = [
      "yesterday.",
      "this morning.",
      "3 years ago.",
      "last night.",
      "this afternoon.",
      "last week.",
      "last month.",
      "last year.",
      "last decade.",
      "last century.",
      "last millennium.",
      "last ice age."
    ];
    const pickRandomWord = arr => {
      let str = arr[Math.floor(Math.random() * arr.length)];
      return str;
    };

    let excuse = pickRandomWord(who) + " " + pickRandomWord(action);
    if (excuse[excuse.length - 1] == ".") {
      return excuse;
    } else {
      excuse = excuse + " " + pickRandomWord(what) + " " + pickRandomWord(when);
      return excuse;
    }
  };
  document.querySelector("#excuse").innerHTML = RandomExcuse();
};
