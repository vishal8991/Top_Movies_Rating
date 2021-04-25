import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const movies = [
      {
        id: 1,
        name: 'Jab We Met',
        imgPath: '../assets/images/71epG0m0KZL.jpg',
        desc: 'A depressed wealthy businessman finds his life changing after he meets a spunky and care-free young woman.',
        rating: 7.9,
        comments : [
          {username: '', rating: 0, comment:''},
          {username: 'Chandler', rating: '7', comment: 'Good Movie'},
          {username: 'Ross', rating: '8', comment: 'Best MOvie'},
          {username: 'Rachel', rating: '4', comment:'Worst Movie'},
          {username: 'Joey', rating: '9', comment:'I love it!!'}
      ]
    },
    {
        id: 2,
        name: 'The Prestige',
        imgPath: '../assets/images/MV5BMjA4NDI0MTIxNF5BMl5Ban.jpg',
        desc: 'After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.',
        rating: 8.5,
        comments : [
          {username: '', rating: 0, comment:''},
          {username: 'Monica', rating: '7', comment: 'Good Movie'},
          {username: 'Phoebey', rating: '8', comment: 'Best MOvie'},
          {username: 'Mike Ross', rating: '4', comment:'Worst Movie'},
          {username: 'Cameron', rating: '8', comment: 'This is the good Movie'},
          {username: 'Nancy', rating: '6', comment:'yeah! its just the average type movie..'},
          {username: 'Harvey', rating: '9', comment:'I love it!!'}
      ]
    },
    {
        id: 3,
        name: 'Bang Bang',
        imgPath: '../assets/images/Bang_Bang_(2014_Film).jpg',
        desc: 'Harleen leads a boring life with her grandmother and works as a bank receptionist. However, her life takes a sudden turn after she falls in love with Rajveer, a thief.',
        rating: 7.7,
        comments : [
          {username: '', rating: 0, comment:''},
          {username: 'Tribiani', rating: '7', comment: 'Good Movie'},
          {username: 'Vickey', rating: '8', comment: 'Best MOvie'},
          {username: 'Dean John', rating: '4', comment:'Worst Movie'},
          {username: 'Joey', rating: '9', comment:'I love it!!'}
      ]
    },
    {
        id: 4,
        name: 'Ford V Ferrari',
        imgPath: '../assets/images/Ford_v_Ferrari-929107889-large.jpg',
        desc: 'American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.',
        rating: 8.1,
        comments : [
          {username: '', rating: 0, comment:''},
          {username: 'Ambrose', rating: '7', comment: 'Good Movie'},
          {username: 'Green', rating: '8', comment: 'Best MOvie'},
          {username: 'Strang', rating: '4', comment:'Worst Movie'},
          {username: 'Anonymous', rating: '6', comment:'I love it!!'},
          {username: 'Yevadu', rating: '5', comment: 'Good Movie'},
          {username: 'Blank', rating: '3', comment: 'Best MOvie'},
          {username: 'Johns', rating: '4', comment:'Worst Movie'},
          {username: 'Joey', rating: '9', comment:'I love it!!'}
      ]
    },
    {
        id: 5,
        name: 'Dhamaal',
        imgPath: '../assets/images/Dhamaal_2007.jpg',
        desc: 'Four lazy slacker conmen buddies who are jobless, homeless and broke learn about the secret of a hidden treasure from a dying thief and later embark on a race against time to find the mobsters buried treasure and claim it while being pursued by a determined police inspector who is hellbent to get the treasure all by himself. ',
        rating: 7.3,
        comments : [
          {username: '', rating: 0, comment:''},
          {username: 'Makee', rating: '7', comment: 'Good Movie'},
          {username: 'Rohnda', rating: '8', comment: 'Best MOvie'},
          {username: 'Princy', rating: '4', comment:'Worst Movie'},
          {username: 'Yashu', rating: '9', comment:'I love it!!'},
          {username: 'Baby Green', rating: '7', comment: 'Good Movie'},
          {username: 'Mr Bing', rating: '8', comment: 'Best MOvie'},
          {username: 'Dr Drive', rating: '4', comment:'Worst Movie'},
          {username: 'Strang', rating: '9', comment:'I love it!!'},
          {username: 'Anonymous', rating: '7', comment: 'Good Movie'},
          {username: 'Sachin', rating: '8', comment: 'Best MOvie'},
          {username: 'Virat', rating: '4', comment:'Worst Movie'},
          {username: 'Rohit', rating: '9', comment:'I love it!!'}
      ]
    },
    {
        id: 6,
        name: 'Andhadhun',
        imgPath: '../assets/images/p16067915_p_v10_ab.jpg',
        desc: 'A series of mysterious events change the life of a blind pianist, who must now report a crime that he should technically know nothing of. ',
        rating: 8.2,
        comments : [
          {username: '', rating: 0, comment:''},
          {username: 'Chandler', rating: '7', comment: 'Good Movie'},
          {username: 'Ross', rating: '8', comment: 'Best MOvie'},
          {username: 'Rachel', rating: '4', comment:'Worst Movie'}
      ]
    },
    {
        id: 7,
        name: 'Forrest Gump',
        imgPath: '../assets/images/Forrest_Gump_poster.jpg',
        desc: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
        rating: 8.8,
        comments : [
          {username: '', rating: 0, comment:''},
          {username: 'Warner', rating: '7', comment: 'Good Movie'},
          {username: 'Spidy', rating: '8', comment: 'Best MOvie'},
          {username: 'Bencroft', rating: '4', comment:'Worst Movie'},
          {username: 'Richa', rating: '9', comment:'I love it!!'},
          {username: 'Tim Rony', rating: '7', comment: 'Good Movie'},
          {username: 'Max', rating: '8', comment: 'Best MOvie'},
          {username: 'Travis', rating: '4', comment:'Worst Movie'},
          {username: 'Mitchel', rating: '9', comment:'I love it!!'},
          {username: 'Mr Smith', rating: '7', comment: 'Good Movie'},
          {username: 'Geller', rating: '8', comment: 'Best MOvie'},
          {username: 'Rachel', rating: '4', comment:'Worst Movie'},
          {username: 'Joey', rating: '9', comment:'I love it!!'},
          {username: 'Parul', rating: '7', comment: 'Good Movie'},
          {username: 'Dolly', rating: '8', comment: 'Best MOvie'},
          {username: 'Pinky', rating: '4', comment:'Worst Movie'},
          {username: 'Monica Gellor', rating: '9', comment:'I love it!!'}
      ]
    },
    {
        id: 8,
        name: 'Rockstar',
        imgPath: '../assets/images/MV5BOTc3NzAxMjg4M15BMl5.jpg',
        desc: 'Janardhan Jakhar chases his dreams of becoming a big Rock star, during which he falls in love with Heer. ',
        rating: 7.7,
        comments : [
          {username: '', rating: 0, comment:''},
          {username: 'Rishi', rating: '7', comment: 'Good Movie'},
          {username: 'Neetu', rating: '8', comment: 'Best MOvie'},
          {username: 'Mukesh', rating: '4', comment:'Worst Movie'},
          {username: 'Kuldeep', rating: '9', comment:'I love it!!'},
          {username: 'Ben', rating: '7', comment: 'Good Movie'},
          {username: 'Blank', rating: '8', comment: 'Best MOvie'},
          {username: 'Amit', rating: '4', comment:'Worst Movie'},
          {username: 'Vikash', rating: '9', comment:'I love it!!'},
          {username: 'Raj Kiran', rating: '7', comment: 'Good Movie'},
          {username: 'Roy', rating: '8', comment: 'Best MOvie'},
          {username: 'Deepak', rating: '4', comment:'Worst Movie'},
          {username: 'Sahil', rating: '9', comment:'I love it!!'},
          {username: 'Poonam', rating: '7', comment: 'Good Movie'},
          {username: 'Reetu', rating: '8', comment: 'Best MOvie'},
          {username: 'Vishnu', rating: '4', comment:'Worst Movie'},
          {username: 'Ranveer', rating: '9', comment:'I love it!!'}
      ]
    },
    {
        id: 9,
        name: 'Special 26',
        imgPath: '../assets/images/Special_26_poster.jpg',
        desc: 'Janardhan Jakhar chases his dreams of becoming a big Rock star, during which he falls in love with Heer. ',
        rating: 8.0,
        comments : [
          {username: '', rating: 0, comment:''},
          {username: 'Akshay', rating: '7', comment: 'Good Movie'},
          {username: 'Raj', rating: '8', comment: 'Best MOvie'},
          {username: 'Rohit', rating: '4', comment:'Worst Movie'},
          {username: 'Pankaj', rating: '9', comment:'I love it!!'}
      ]
    },
    {
        id: 10,
        name: 'Extraction',
        imgPath: '../assets/images/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2.jpg',
        desc: 'Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he is enlisted to rescue the kidnapped son of an imprisoned international crime lord. ',
        rating: 6.7,
        comments : [
          {username: '', rating: 0, comment:''},
          {username: 'Randdep', rating: '7', comment: 'Good Movie'},
          {username: 'Thor', rating: '8', comment: 'Best MOvie'},
          {username: 'Pankaj', rating: '4', comment:'Worst Movie'},
          {username: 'Joey', rating: '9', comment:'I love it!!'}
      ]
    }
    ];
    return {movies};
  }
  isRatedByUser(movie: Movie): boolean{
    if(movie.comments.length>0 && movie.comments[0].comment == ''){
      return false;
    }
    return true;
  }
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(hero => hero.id)) + 1 : 1;
  }
  
}
